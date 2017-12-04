import express from 'express';
import { Canvas, Image } from 'canvas';
import React from 'react';
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
  const Image = Image;
  const canvas = new Canvas (200,200);
  const ctx = canvas.getContext('2d');
  const svgData = `<svg width="200" height="200">
  <rect width="100%" height="100%" fill="gray" />
    <foreignObject width="100%" height="100%">
        ${renderToString(<SVGTest />)}
    </foreignObject>
  </svg>`;

  fs.writeFile('svgTest.svg', svgData, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  fs.readFile(__dirname + '/svgTest.svg', function(err, squid){
    if (err) throw err;
    img = new Image;
    img.src = squid;
    ctx.drawImage(img, 0, 0, img.width / 4, img.height / 4);
    const out = fs.createWriteStream(__dirname + '/omgitworks.png')
    const stream = canvas.pngStream();
  
    stream.on('data', function(chunk){
      out.write(chunk);
    });
    
    stream.on('end', function(){
      console.log('The PNG stream ended');
    });
    
    out.on('finish', function(){
      console.log('The PNG file was created.');
    });
  });

  res.send(`
  <svg width="200" height="200">
    <rect width="100%" height="100%" fill="gray" />
    <foreignObject width="100%" height="100%">
      ${renderToString(<SVGTest />)}
    </foreignObject>
  </svg>
  `)
});

server.listen(8080);
console.log('Listening on port 8080')