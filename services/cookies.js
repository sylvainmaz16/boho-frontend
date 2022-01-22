import JSCookie from "js-cookie";
import Cookies from "cookies";

export const cookieDecode = (cookie) => {
  const decodedCookie = decodeURIComponent(cookie);
  console.log(decodedCookie);
  const useableCookie = JSON.parse(decodedCookie);
  return useableCookie;
};

export const clientCookieGet = () => {
  const myJScookie = JSCookie.get("boho-cookie");
  const goodCookie = cookieDecode(myJScookie);
  return goodCookie;
};

export const clientCookieDelete = () => {
  JSCookie.remove("boho-cookie");
};

export const clientCookieSet = (access, refresh, isLoggedIn) => {
  clientCookieDelete();

  JSCookie.set("boho-cookie", JSON.stringify({ access, isLoggedIn, refresh }));
};
