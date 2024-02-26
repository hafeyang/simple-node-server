/* eslint-env node */
/* eslint no-console:0 */
import fs from "fs";
import http from "http";

// prettier-ignore
http.createServer(async (req, res) => {
  const start = Date.now();
  const path = req.url?.split("?")?.[0] || "";
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/ping") {
    res.write("pong");
    res.end();
  } else if (req.method === "GET") {
    res.write("hello"),
    res.end();
    console.log(
      JSON.stringify({
        service: packageName, // 服务名称
        log_type: "access", // 日志类型, app/internal/access or others
        log_level: res.statusCode === 200 ? "info" : "error", // 日志级别, fatal/error/warning/info/debug
        log_time: new Date().toISOString(), // 日志时间, 统一 format 格式!!!
        message: {
          // 日志内容, 所有内容都在这下面!!!
          http: {
            elapse: new Date().getTime() - start, // 全部格式化成秒, int 类型, 方便过滤
            status: res.statusCode, // http status, 统一 int 类型, 方便过滤
            method: req.method, //
            origin: req.headers["origin"] || "none", // origin
            path: req.url,
          },
        },
      }),
    );
  } else {
    res.writeHead(404);
    res.end("404 Not Found");
  }
}).listen(8080);
