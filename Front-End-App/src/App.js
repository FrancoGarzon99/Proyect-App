import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContainSignIn from './Components/ViewSignIn/ContainSignIn';
import ContainSignUp from './Components/ViewSignUp/ContainSignUp';
import Home from './Components/Home/Home';
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/iniciar-session" component={ContainSignIn} />
        <Route path="/registrarme" component={ContainSignUp} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
