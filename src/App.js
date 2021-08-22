import React from 'react';
import { Switch,Route,Redirect } from "react-router-dom";
import { adminRoutes } from './routes'
import 'antd/dist/antd.css'
import Frames from './components/Frames'
import './App.css'

function App() {
  return (
    <Frames>
      <Switch>
        {
          adminRoutes.map(route => {
            return <Route key={route.path} path={route.path} exact={route.exact} render={routeProps => {
              return <route.component {...routeProps} />
            }}/>
          })
        }
        <Redirect to="/404"/>
      </Switch>
    </Frames>
  );
}

export default App;
