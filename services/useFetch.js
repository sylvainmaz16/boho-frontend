// this takes a plain object and wraps it as though it's a fetch() response

const baseURL = process.env.NEXT_PUBLIC_BASE_CMS;

const responsify = (errData) => {
  return {
    json() {
      return Promise.resolve(errData);
    }
  }
};

const fetchInside = async (endpoint, {
  method = "GET",
  headers = true,
  data = null,
  pageType = null
} = {}) => {
  let initialResponse;
  if (
    (headers === true && method === "POST") ||
    method === "PUT" ||
    method === "PATCH"
  ) {
    initialResponse = await fetch(`${baseURL}${endpoint}`, {
      method: method,
      credentials: "include",
      body: new URLSearchParams(data)
    });
  } else if (pageType !== null && headers === true) {
    initialResponse = await fetch(`${baseURL}/api/v2/pages/?type=${pageType}&fields=*`, {
        method: method,
        credentials: "include"
    });
  } else if (pageType !== null && headers !== true) {
    initialResponse = await fetch(`${baseURL}/api/v2/pages/?type=${pageType}&fields=*`, {
      method: method,
    });
  } else if (headers !== true && method === "POST") {
    initialResponse = await fetch(`${baseURL}${endpoint}`, {
      method: method,
      body: new URLSearchParams(data),
    });
  } else if (headers === true && method === "GET") {
    initialResponse = await fetch(`${baseURL}${endpoint}`, {
      method: method,
      credentials: "include",
    });
  } else if (headers !== true && method === "GET") {
    initialResponse = await fetch(`${baseURL}${endpoint}`);
  }

  let returnData;
  if (
    initialResponse.status === 200 ||
    initialResponse.status === 201 ||
    initialResponse.status === 202
  ) {
    returnData = initialResponse;
  } else if (initialResponse.status === 401 || initialResponse.status === 403) {
    returnData = responsify({ error: "Permission denied" });
  } else {
    returnData = responsify({ error: "Oops, something went wrong." });
  }

  return returnData;
};

const fetchWrapper = async (baseURL = process.env.NEXT_PUBLIC_BASE_CMS, {
  endpoint,
  method = "GET",
  user = null,
  headers = true,
  data = null,
  pageType = null,
  clientCookieSet = null,
  clientCookieDelete = null,
  serverCookieSet = null,
  req = null,
  res = null
} = {}) => {
  let initialResponse;
  if (
    (headers === true && method === "POST") ||
    method === "PUT" ||
    method === "PATCH"
  ) {
    initialResponse = await fetch(`${baseURL}${endpoint}`, {
      method: method,
      credentials: "include",
      body: new URLSearchParams(data),
    });
  } else if (headers !== true && method === "POST") {
    initialResponse = await fetch(`${baseURL}${endpoint}`, {
      method: method,
      body: new URLSearchParams(data),
    });
  } else if (headers === true && method === "GET") {
    initialResponse = await fetch(`${baseURL}${endpoint}`, {
      method: method,
      headers: {
        Authorization: `Bearer ${user?.access}`,
      },
    });
  } else if (headers !== true && method === "GET") {
    initialResponse = await fetch(`${baseURL}${endpoint}`);
  }

  console.log("RES", initialResponse);

  let returnData;
  if (
    initialResponse.status === 200 ||
    initialResponse.status === 201 ||
    initialResponse.status === 202
  ) {
    returnData = initialResponse;
  } else if (initialResponse.status === 401 || initialResponse.status === 403) {
    try {
      //   const reAuth = await fetch("http://localhost:5050/api/token/refresh/", {
      const reAuth = await fetch(
        "http://localhost:5000/dj-rest-auth/token/refresh/",
        {
          method: "POST",
          credentials: "include"
        }
      );

      returnData = await fetchInside(baseURL, {
        endpoint,
        method,
        headers,
        data,
        pageType
      });
    } catch (err) {
      console.error(err);
      returnData = responsify({ error: "Error refreshing token" });
    }
  } else {
    returnData = responsify({ error: "Unknown reponse code" });
  }

  return returnData;
};

export const fetchPage = async (pageType) => {
  console.log("BASE", baseURL)
  const pageURL = `${baseURL}/api/v2/pages/?type=${pageType}&fields=*`;
  return await fetch(pageURL, {
    credentials: "include"
  });
}

export default fetchWrapper;
