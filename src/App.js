import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hook from './components/Hook';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Fragment, useEffect } from 'react';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/Home';
import Navbar from './components/header/Navbar';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from '../src/redux/actions/auth';


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  useEffect(() => {
    console.log('useEffect')
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Home} />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>

  );
}

export default App;
