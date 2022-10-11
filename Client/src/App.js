import './App.css';
import DirectionalPad from './components/DirectionalPad';
import useScreenOrientation from 'react-hook-screen-orientation';
import Controller from './components/Controller'
import React, { useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const PUBLIC_IP = "192.168.1.22"

function App() {
  const orientation = useScreenOrientation()

  const [mode, setMode] = React.useState(null)
  const [upIsPressed, setUpIsPressed] = React.useState(false)
  const [downIsPressed, setDownIsPressed] = React.useState(false)
  const [leftIsPressed, setLeftIsPressed] = React.useState(false)
  const [rightIsPressed, setRightIsPressed] = React.useState(false)
  const [startIsPressed, setStartIsPressed] = React.useState(false)
  const [selectIsPressed, setSelectIsPressed] = React.useState(false)
  const [aIsPressed, setAIsPressed] = React.useState(false)
  const [bIsPressed, setBIsPressed] = React.useState(false)
  const [xIsPressed, setXIsPressed] = React.useState(false)
  const [yIsPressed, setYIsPressed] = React.useState(false)
  const [square, setSquare] = React.useState({x: 0, y:0, w: 0, r: 0})

  const {sendMessage, lastMessage, readyState, getWebSocket} = useWebSocket(`ws://${PUBLIC_IP}:8080`, {retryOnError: true});

  useEffect(() => {
    if(lastMessage){
      setSquare(JSON.parse(lastMessage.data))
    }
  },[lastMessage])

  useEffect(()=> {
    console.log('readystate: ', readyState)
    if(readyState == 1){
      sendMessage(
        JSON.stringify({
          up: upIsPressed, 
          down: downIsPressed, 
          left: leftIsPressed,
          right: rightIsPressed,
          start: startIsPressed,
          select: selectIsPressed,
          a: aIsPressed,
          b: bIsPressed,
          x: xIsPressed,
          y: yIsPressed,
        })
      )
    }
  }, [
    upIsPressed,
    downIsPressed,
    leftIsPressed,
    rightIsPressed,
    startIsPressed,
    selectIsPressed,
    aIsPressed,
    bIsPressed,
    xIsPressed,
    yIsPressed,
  ])

  function handleUpClick(event) {
    if(event.type == "touchstart") {
      setUpIsPressed(true);
    } else {
      setUpIsPressed(false);
    }
  }
  function handleDownClick(event) {
    if(event.type == "touchstart") {
      setDownIsPressed(true);
    } else {
      setDownIsPressed(false);
    }
  }
  function handleLeftClick(event) {
    if(event.type == "touchstart") {
      setLeftIsPressed(true);
    } else {
      setLeftIsPressed(false);
    }
  }
  function handleRightClick(event) {
    if(event.type == "touchstart") {
      setRightIsPressed(true);
    } else {
      setRightIsPressed(false);
    }
  }
  function handleStartClick(event) {
    if(event.type == "touchstart") {
      setStartIsPressed(true);
    } else {
      setStartIsPressed(false);
    }
  }
  function handleSelectClick(event) {
    if(event.type == "touchstart") {
      setSelectIsPressed(true);
    } else {
      setSelectIsPressed(false);
    }
  }
  function handleAClick(event) {
    if(event.type == "touchstart") {
      setAIsPressed(true);
    } else {
      setAIsPressed(false);
    }
  }
  function handleBClick(event) {
    if(event.type == "touchstart") {
      setBIsPressed(true);
    } else {
      setBIsPressed(false);
    }
  }
  function handleXClick(event) {
    if(event.type == "touchstart") {
      setXIsPressed(true);
    } else {
      setXIsPressed(false);
    }
  }
  function handleYClick(event) {
    setYIsPressed(event.type)
    if(event.type == "touchstart"){
      setYIsPressed(true);
    } else {
      setYIsPressed(false);
    }
  }

  if (mode ==  'controller'){
    return(
      <div className='App'>
        {orientation == 'portrait-primary' || orientation == 'portrait secondary' ? 
      (
        <div>please rotate your device to landscape</div>
      ) : (
        <>
          <Controller 
              handleUpClick={handleUpClick}
              handleDownClick={handleDownClick}
              handleLeftClick={handleLeftClick}
              handleRightClick={handleRightClick}
              handleStartClick={handleStartClick}
              handleSelectClick={handleSelectClick}
              handleAClick={handleAClick}
              handleBClick={handleBClick}
              handleYClick={handleYClick}
              handleXClick={handleXClick}
          />
        </>
      )}
      </div>
    )
  }
  else if (mode == 'screen'){
    return(
      <div>
        <h1>^ Move the Rectangle</h1>
        {square.select ? 
          <h2>
            Directional Pad: move <br/>
            A: expand<br/>
            B: contract<br/>
            X: rotate clockwise<br/>
            Y: rotate counterclockwise<br/>
            Start: reset<br/>
          </h2>: <h2>Press and hold select for instructions</h2>}
        <div
          style={{
            position: 'absolute',
            top: .1*square.y,
            left: .1*square.x,
            height: `${20+square.w*.1}px`,
            width: `${20+square.w*.1}px`,
            transform: `rotate(${square.r*.1}deg)`,
            backgroundColor: 'red',
          }}
        ></div>
      </div>
    )
  }
  else
  return (
    <div className="App">
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <h1>Choose a mode</h1>
      <button onClick={() =>  setMode('controller')}>Controller</button>
      <button onClick={() =>  setMode('screen')}>Screen</button>
    </div>
  );
}

export default App;
