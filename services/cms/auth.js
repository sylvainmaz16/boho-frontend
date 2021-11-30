import fetchWrapper from "../useFetch";

export const signup = (data) => {
  const response = fetchWrapper(
    "http://localhost:5050",
    "/dj-rest-auth/registration/",
    "POST",
    null,
    false,
    data,
    null
  );
  return response;
};

export const login = (data) => {
  const response = fetchWrapper(
    "http://localhost:5050",
    "/api/login",
    "POST",
    null,
    false,
    data,
    null
  );
  return response;
};

export const migrate = (data) => {
  const response = fetchWrapper(
    "http://localhost:5050",
    "/api/migrate",
    "POST",
    null,
    false,
    data,
    null
  );
  return response;
};
