# React Shop Test

My third attempt at creating a store app. Based on the Dennis Archakov Blog stream.
Used teqnologies:
- ReactJS + Hooks
- React Router
- Redux
- Redux thunk
- json-server
- Axios
- classnames

Available Scripts
npm install
- mounting the project directory.

npm run server
npm run dev
- Runs the app in the development mode.
Open http://localhost:3001 to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

npm run build
- Builds the app for production to the build folder (./dist).
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes. Your app is ready to be deployed!

Problems:
:( Builds the app for production to the ./dist folder doesn't work :(

:( Redirection server with proxy doesn't work :( need:
    1) in package.json add string "proxy": "http://localhost:3002",
    2) in .store/actions/goods.js change .get(`http://localhost:3002/goods?...` => .get(`/goods?...` 