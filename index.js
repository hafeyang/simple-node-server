const http = require("http");
const httpProxy = require("http-proxy");
const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // if (/^\/api\/v1\/public\//g.test(req.url) || /^\/api\/v1\/private\//g.test(req.url)) {
  //   proxy.web(req, res, { target: "https://dev.dex2.xyz", secure: false, changeOrigin: true });
  // } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, js!\n");
  // }
});

module.exports = server;
