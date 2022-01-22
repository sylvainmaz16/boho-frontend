// this takes a plain object and wraps it as though it's a fetch() response

const baseURL = process.env.NEXT_PUBLIC_BASE_CMS || "https://boho-cms-staging.dev";
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
  pageType = null,
  req = {}
} = {}) => {
  let initialResponse;
  if (
    (headers === true && method === "POST") ||
    method === "PUT" ||
    method === "PATCH"
  ) {
    initialResponse = await fetch(`${baseURL}${endpoint}`, {
      method: method,
      mode: "cors",
      body: JSON.stringify(data),
      credentials: "include",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Cookie: req?.headers?.cookie
      }
    });
  } else if (headers !== true && method === "POST") {
    initialResponse = await fetch(`${baseURL}${endpoint}`, {
      method: method,
      mode: "cors",
      ...(data ? { body: JSON.stringify(data) } : null),
      credentials: "include",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Cookie: req?.headers?.cookie
      }
    });
  } else if (method === "GET") {
    initialResponse = await fetch(`${baseURL}${endpoint}`, {
      method: method,
      mode: "cors"
    });
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

const fetchWrapper = async (endpoint, {
  method = "GET",
  user = null,
  headers = true,
  data = null,
  pageType = null,  
  clientCookieSet = null,
  clientCookieDelete = null,
  req = null,
  res = null,
  cookies = "",
} = {}) => {
  let initialResponse;
  if (method === "POST" || method === "PUT" || method === "PATCH") {
    initialResponse = await fetch(`${baseURL}${endpoint}`, {
      method: method,
      mode: "cors",
      credentials: "include",
      withCredentials: true,
      ...(data ? { body: JSON.stringify(data) } : null),
      headers: {
        "Content-Type": "application/json",
        Cookie: req?.headers?.cookie
      }
    });
  } else if (method === "GET") {

    initialResponse = await fetch(`${baseURL}${endpoint}`, {
      method: method,
      mode: "cors",
      credentials: "include",
      withCredentials: true,
      headers: {
        Cookie: req?.headers?.cookie
      },
    });
  }

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
        `${baseURL}/dj-rest-auth/token/refresh/`,
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          withCredentials: true,
          headers: {
            Cookie: req?.headers?.cookie
          }
        }
      );

      returnData = await fetchInside(baseURL, {
        endpoint,
        method,
        credentials: "include",
        withCredentials: true,
        headers: {
          Cookie: req?.headers?.cookie
        },
        data,
        pageType,
        req
      });
    } catch (err) {
      console.error(err);
      returnData = responsify({ error: "Error refreshing token" });
    }
  } else {
    returnData = initialResponse;
  }

  return returnData;
};

export const fetchPage = async (pageType) => {
  const pageURL = `${baseURL}/api/v2/pages/?type=${pageType}&fields=*`;
  return await fetch(pageURL, {
    mode: "cors"
  });
}

export default fetchWrapper;
