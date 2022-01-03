import fetchWrapper from "../useFetch";

export const signup = (data) => {
  const response = fetchWrapper(process.env.NEXT_PUBLIC_BASE_CMS, {
    endpoint: "/dj-rest-auth/registration/",
    method: "POST",
    data
  }).catch(err => console.error(err));
  return response;
};

export const login = (data) => {
  const response = fetchWrapper(process.env.NEXT_PUBLIC_BASE_CMS, {
    endpoint: "/api/login",
    method: "POST",
    data
  });
  return response;
};

export const migrate = (data) => {
  const response = fetchWrapper(process.env.NEXT_PUBLIC_BASE_CMS, {
    endpoint: "/api/migrate",
    method: "POST",
    data
  });
  console.log("RES", response)
  return response;
};
