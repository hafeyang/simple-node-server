/* eslint-env node */
/* eslint no-console:0 */
import http from "http";

// prettier-ignore
const app = http.createServer(async (req, res) => {
  const path = req.url?.split("?")?.[0] || "";
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/ping") {
    res.write("pong");
    res.end();
  } else if (req.method === "GET") {
    res.write("hello mjs"),
    res.end();
  } else {
    res.writeHead(404);
    res.end("404 Not Found");
  }
}).listen(8080);

export default app;