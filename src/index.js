import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './Pages/landingPage'
import InfoPage from './Pages/infoPage'
import Store from './Store/store'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


//intigrating Redux store and router
const IndexApp = () => {
  return (
      <Provider store={Store}>
          <Router>
            <Switch>
            <Route path='/main-page' exact component={LandingPage} />
            <Route path='/info-page' exact component={InfoPage} />
            </Switch>
            <Redirect to='/main-page' exact />
          </Router>
      </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <IndexApp />
  </React.StrictMode>,
  document.getElementById('root')
);

