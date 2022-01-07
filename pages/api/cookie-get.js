import { serverCookieGet } from "../../services/cookies";

export default async function handler(req, res) {
  // Instead of static content this would be the place for a db request.

  const cookie = serverCookieGet(req, res);
  console.log(cookie);

  res.statusCode = 200;
  res.end(JSON.stringify({ message: "success" }));
}
