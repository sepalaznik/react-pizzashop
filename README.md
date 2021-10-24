# React Shop Example No 3

https://github.com/sepalaznik/react-pizzashop.git

Sergei Palaznik, 2021

My third attempt at creating a store app. Based on the Dennis Archakov Blog stream "React Pizza".

Used teqnologies:
- ReactJS + Hooks
- React Router
- Redux
- Redux thunk
- json-server
- Axios
- classnames
- deploy with Heroku

Available Scripts
### npm run dev-json
- In parallel runs the fake json-server and the app in the development mode.
Open "http://localhost:3000" to view app in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

### npm run dev
- Runs the app in the development mode on the port "http://localhost:3000".
For work this app need runs the fake json-server as the second process.

### npm run json-server
### npm run server
- Runs the fake json-server for work with the build, or to test the app in development mode.
Open "http://localhost:3001/goods" to view it in the browser.

### npm run build
- Builds the app for production to the build folder (./dist).
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes. Your app is ready to be deployed!
For the build to work correctly, need runs the fake json-server.
