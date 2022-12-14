# GameControlMobilePhone-TechnicalTask

## Description
This project uses a Node server with [ws](https://www.npmjs.com/package/ws) to handle websockets.

The client end uses the React framework and [styled-components](https://styled-components.com/) for the majority of the styling.

### High-level how it works
The Server handles all the computations for the location, dimensions, and orientation of the graphic and sends that info over websockets to the Client.
The client sends a message to the server every time a button is pressed or released. This is used by the server to compute the new location/orientation/dimensions of the graphic. 

## Getting Started
This project uses [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) as package managers. 

You will need to install the necessary packages for both the Server and Client side. In the Server folder run `npm install` in the Client folder run `yarn`.

After packages have been installed you will need to get your mobile device and computer where you will be running the server on the same network. Then get your computers public ip address using `ipconfig` in a terminal you need the value labled `IPv4 Address` which should be located under the `Wireless LAN adapter Wi-Fi:` section. You will need this for two things, first place that value as a string in `Client/src/App.js` on line 8 so it looks like this: `const PUBLIC_IP = "000.000.0.00"`. Be sure to save.

### Starting the server

In the Server folder run `npm start` then leave that terminal be

### Starting the clients

In a seperate terminal navigate to the Client folder then run `yarn start` this may open a web browser directing you to localhost:3000, if it does not do it yourself by launching a web browser, and putting localhost:3000 in the address bar. 

Then on a mobile device open your browser and put the public ip you got earlier followed by ':3000'. It should look something like this at the end: `http://000.000.0.00:3000/`

On your mobile phone select the 'Controller' option.
On your computer select the 'Screen' option.

![Screenshot_20221011-171945_Firefox (002)](https://user-images.githubusercontent.com/39275549/195201499-a85763dd-dcc6-44c1-9bee-2a7adb9a92d0.jpg)

### Caveats

The controller uses 'onTouchStart' and 'onTouchEnd' which only trigger via touch screen devices. Also the [desktop versions of Safari and Opera do not support this](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event#browser_compatibility) functionality so even if you have a desktop with a touchscreen you cannot use those browsers. 
