var express = require('express')
const { Server } = require('ws')
const webSocketServerPort = 8000
const WebSocketServer = require('ws').Server
wss = new WebSocketServer({port: 8080})

let x = 0;
let y = 0;
let r = 0;
let w = 0;
let up = false;
let down = false;
let left = false;
let right = false;
let xPressed = false;
let yPressed = false;
let aPressed = false;
let bPressed = false;
let selectPressed = false;

wss.on('connection', function connection(ws) {
  
  ws.on('message', function message(data){
    parsedData = JSON.parse(data)
    up = parsedData.up
    down = parsedData.down
    left = parsedData.left
    right = parsedData.right
    xPressed = parsedData.x
    yPressed = parsedData.y
    aPressed = parsedData.a
    bPressed = parsedData.b
    selectPressed = parsedData.select

    if(parsedData.start){
      x = 0;
      y = 0;
      r = 0;
      w = 0;
    }
  })

  setInterval(() => {
    if(up){y -= 1}
    if(down){y += 1}
    if(left){x -= 1}
    if(right){x += 1}
    if(xPressed){r += 1}
    if(yPressed){r-=1}
    if(aPressed){w+=1}
    if(bPressed){w-=1}
    ws.send(JSON.stringify({x: x, y: y, r: r, w: w, select: selectPressed}))
  }), 1000
})