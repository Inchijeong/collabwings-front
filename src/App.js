import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Home = React.lazy(() => import('./views/pages/home/Home'));
const Workspaces = React.lazy(() => import('./views/pages/workspaces/Workspaces'));
// const Project = React.lazy(() => import('./views/pages/project/Project'));
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            {/* <Route path="/" name="Layout" render={props => <TheLayout {...props}/>} /> */}
            <Route path="/channel/:channel" name="Layout" render={props => <TheLayout {...props}/>} />
            <Route path="/base" name="Layout" render={props => <TheLayout {...props}/>} />
            <Route path="/buttons" name="Layout" render={props => <TheLayout {...props}/>} />
            <Route path="/charts" name="Layout" render={props => <TheLayout {...props}/>} />
            <Route path="/dashboard" name="Dashboard" render={props => <TheLayout {...props}/>} />
            <Route path="/icons" name="Layout" render={props => <TheLayout {...props}/>} />
            <Route path="/notifications" name="Layout" render={props => <TheLayout {...props}/>} />
            <Route path="/pages" name="Layout" render={props => <TheLayout {...props}/>} />
            <Route path="/theme" name="Layout" render={props => <TheLayout {...props}/>} />
            <Route path="/users" name="Layout" render={props => <TheLayout {...props}/>} />
            <Route path="/widgets" name="Layout" render={props => <TheLayout {...props}/>} />
            <Route exact path="/workspaces" name="Workspaces" render={props => <Workspaces {...props}/>} />
            <Route exact path="/project/:project" name="Project" render={props => <TheLayout {...props}/>} />
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
