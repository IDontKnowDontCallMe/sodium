import Koa from 'koa';
import serve from'koa-static';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
//import App from '../src/app';

const path = require('path')

let server = new Koa();

let App = () => (
    <div>
        <span>2323232323</span>
    </div>
)

let diskPath = path.resolve(__dirname, '../dist');
//server.use(serve(diskPath));

server.use( function (ctx) {



    let renderHTML = ReactDOMServer.renderToString(<App/>);

    ctx.response.type = 'html';
    ctx.response.body = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <title>Webpack App</title>
          </head>
          <body>
          <div id='app'>
            ${renderHTML}
            </div>
          <script type="text/javascript" src="bundle.js"></script>
          </body>
        </html>
    `;

})

server.listen(8080);

console.log('server start')