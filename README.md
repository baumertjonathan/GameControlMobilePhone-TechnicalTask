# GameControlMobilePhone-TechnicalTask

## Getting Started
This project uses [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) as package managers. 

You will need to install the necessary packages for both the Server and Client side. In the Server folder run `npm install` in the Client folder run `yarn`.

After packages have been installed you will need to get your mobile device and computer where you will be running the server on the same network. Then get your computers public ip address using `ipconfig` in a terminal you need the value labled `IPv4 Address` which should be located under the `Wireless LAN adapter Wi-Fi:` section. You will need this for two things, first place that value as a string in `Client/src/App.js` on line 8 so it looks like this: `const PUBLIC_IP = "000.000.0.00"`. Be sure to save.

### Starting the server

In the Server folder run `npm start` then leave that terminal be

### Starting the clients

In a seperate terminal navigate to the Client folder then run `yarn start` this may open a web browser directing you to localhost:3000, if it does not do it yourself by launching a web browser, and putting localhost:3000 in the address bar. 

Then on a mobile device open your browser and put the public ip you got earlier followed by ':3000'. It should look something like this at the end: `http://000.000.0.00:3000/' 

On your mobile phone select the 'Controller' option.
On your computer select the 'Screen' option.

![image](https://user-images.githubusercontent.com/39275549/195201299-73a1e7ad-5a57-4475-a908-cb03d55048e0.png)

![Screenshot_20221011-171945_Firefox (002)](https://user-images.githubusercontent.com/39275549/195201499-a85763dd-dcc6-44c1-9bee-2a7adb9a92d0.jpg)
