import express from 'express';
import canvas from 'canvas';
import React from 'react';
//import createObjectURL from 'create-object-url';
//import revokeObjectURL from 'revoke-object-url';
import { renderToString } from 'react-dom/server';
import template from './template';
import ScreenTest from './src/screenTest.js';
import SVGTest from './src/svgTest.js';

const server = express();
server.use('/assets', express.static('assets'));

server.get('/sscr', (req, res) => {
  res.send(template({
    body: renderToString(<ScreenTest />),
    title: 'SSCR'
  }));
});

server.get('/toSVG', (req, res) => {
  //const Image = canvas.Image;
  //const canvas = new Canvas (200,200);
  //const ctx = canvas.getContext('2d');
  const svgData = `<svg width="200" height="200">
  <rect width="100%" height="100%" fill="gray" />
    <foreignObject width="100%" height="100%">
        ${renderToString(<SVGTest />)}
    </foreignObject>
  </svg>`;


/*const img = new Image();
const svg = new Blob([svgData], {type: 'image/svg+xml'});
const url = createObjectURL(svg);

img.onload = function() {
  ctx.drawImage(img, 0, 0);
  revokeObjectURL(url);
  console.log('I think I rendered sth!');
}

img.src = url;*/
  res.send(`
  <svg width="200" height="200">
    <rect width="100%" height="100%" fill="gray" />
    <foreignObject width="100%" height="100%">
      ${renderToString(<SVGTest />)}
    </foreignObject>
  </svg>
  `);
});

server.listen(8080);
console.log('Listening on port 8080')