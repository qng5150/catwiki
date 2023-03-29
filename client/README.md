# Getting Started
This is broken up into a client and server.
An example of the deployed application can be found at:
- client: https://qng-catty-site.onrender.com/
- server: https://qng-catty-api.onrender.com/

## Client
### Starting the client locally:
make sure you're in the client directory: <br/>
`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


Note "proxy": "http://localhost:3001",
This is used to proxy to the API locally.

### Running test
`yarn test `

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### building
`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Note: there are env files that setup the base api urls.

### Deployment
This has been setup on Render.
<br/>
#### Setting up for Render.
Use static site for the client.<br/>

- RootDirectory: client
- Build Command: yarn build
- Publish Directory: (client/)buid


## Server
### Starting the server locally:
In the root directory:<br/>
`yarn start`

### Running test
`yarn test `
TODO: implement fetch mock to be able to write test

### building
`yarn build`

### Deployment
This has been setup on Render.
<br/>
#### Setting up for Render.
Use node for the server in onrender.<br/>

- RootDirectory: server
- Build Command: yarn
- Start Command: node index.js

