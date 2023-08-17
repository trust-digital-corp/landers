/*
  http://bit.ly/2DTXGpe - `@babel/polyfill` has been deprecated.
  If you need to polyfill certain JS features, uncomment the two imports below.
*/
// import 'core-js/stable'
// import 'regenerator-runtime/runtime' // Needed to polyfill async / await.
const baseUri = 'home' //document.baseURI
// Import our top-level sass file.
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/font-awesome/css/font-awesome.min.css'
import './assets/simple-line-icons/css/simple-line-icons.css'
import './styles/jquery-ui.css'
// Dynamically import the appropriate CSS file based on the URI
let data;
switch (true) {
  case baseUri.includes('home'):
    import('./styles/home-custom.css'); // Import home-specific CSS
    data = require('./content/home.json');
    break;
  case baseUri.includes('auto'):
  import('./styles/auto-custom.css'); // Import home-specific CSS
  data = require('./content/auto.json');
  break;
  default:
    import('./styles/auto-custom.css'); // Import auto-specific CSS
    break;
}

// Import React.
import React from 'react'
import ReactDOM from 'react-dom'

// Import our components.
import Home from './components/Home'
import NotFound from './components/NotFound'
import Terms from './components/Terms'
import PrivacyPolicy from './components/PrivacyPolicy'

// Import React Router things.
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'

// Top-level classes on the body. Feel free to remove / change.
// document.body.className = 'bg-black-80 fw4 white-80'


// Mount our app.
ReactDOM.render(
  <Router>
      
      <Header data={data} />
    <Switch>
    <Route exact path="/">
        <Home data={data} /> {/* Pass the data as a prop to Home */}
      </Route>
      <Route exact path="/terms">
        <Terms data={data} />
      </Route>
      <Route exact path="/privacy-policy">
        <PrivacyPolicy data={data} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.querySelector('#app'),
)
