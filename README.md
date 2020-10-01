# jwt-frontend

Another application created for show some of my frontend skills.
This site is just a form containing one label. After submit the username field with any name, it redirects to the "unlocked" page, and will stay authenticated with json web token while it is valid.
To remove the token from local storage, just click the "Sign out" button and be redirected again to "locked" page.

## Live

[jwt-frontend](https://thidiamond-jwt-auth.netlify.app/)

## Technologies Used

This project isn't focused in design, but in solving a real problem, make user to stay logged to application, so I used React Context API to share the state into the app, logic to create all the functional structure, and axios to connect to my API and get the token, or validate if alredy exists.

- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://github.com/axios/axios)
- [Netlify](https://www.netlify.com/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
