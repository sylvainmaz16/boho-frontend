import fetchWrapper from "../useFetch";

export const signup = (data) => {
  const response = fetchWrapper("/dj-rest-auth/registration/", {
    method: "POST",
    data
  }).catch(err => console.error(err));
  return response;
};

export const login = (data) => {
  const response = fetchWrapper("/api/login", {
    method: "POST",
    data
  });
  return response;
};

export const migrate = (data) => {
  const response = fetchWrapper("/api/migrate", {
    method: "POST",
    data
  });
  console.log("RES", response)
  return response;
};
