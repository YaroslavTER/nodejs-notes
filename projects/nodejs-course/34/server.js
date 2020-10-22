const fs = require('fs');
const server = require('http').createServer();
const {
  root: { route: rootRoute },
  home: { route: homeRoute, page: homePage },
  about: { route: aboutRoute, page: aboutPage },
  api: { route: apiRoute },
} = require('./routeSet');

server.on('request', (req, res) => {
  console.log(req.url);
  switch (req.url) {
    case rootRoute:
      redirectToRoute(res, homeRoute);
      break;
    case homeRoute:
      sendPage(res, homePage);
      break;
    case aboutRoute:
      sendPage(res, aboutPage);
      break;
    case apiRoute:
      sendData(res, {});
      break;
    default:
      sendUndefinedPage(res);
  }
});

const sendPage = (res, relativePath) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(fs.readFileSync(relativePath));
};

const redirectToRoute = (res, route) => {
  res.writeHead(300, { Location: route });
  res.end();
};

const sendData = (res, data) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
};

const sendUndefinedPage = (res) => {
  res.writeHead(404);
  res.end();
};

server.listen(8000);
