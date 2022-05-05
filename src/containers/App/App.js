import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
// components
import UserLoginContainer from '../User/UserLoginContainer';
import UserRegisterContainer from '../User/UserRegisterContainer';
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import AddQuotes from '../AddQuotes/AddQuotes';
import UserQuotes from '../UserQuotes/UserQuotes';
// context
import AppContext from '../../store/AppContext';

function App() {
  // state
  const [user, setUser] = useState({});
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    if (localStorage.getItem("affirm_user")) {
      setUser(JSON.parse(localStorage.getItem("affirm_user")));
      setJwt(JSON.parse(localStorage.getItem("affirm_user")).token);
    }
  }, []);
  return (
    <Router>
      <AppContext.Provider value={{ user, setUser, jwt, setJwt }}>
        <Navbar />
        <Switch>
          <Route path={'/register'} exact component={UserRegisterContainer} />
          <Route path={'/login'} exact component={UserLoginContainer} />
          <Route path={'/quotes'} exact component={UserQuotes} />
          <Route path={'/quotes/:userId'} exact component={AddQuotes} />
        </Switch>
        <Footer />
      </AppContext.Provider>
    </Router>
  );
}

export default App;
