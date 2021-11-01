import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
// components
import UserLoginContainer from '../User/UserLoginContainer';
import UserRegisterContainer from '../User/UserRegisterContainer';
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import AddQuotes from '../AddQuotes/AddQuotes';
// context
import AppContext from '../../store/AppContext';

function App() {
  // state
  const [user, setUser] = useState({});
  const [jwt, setJwt] = useState("");
  // useeffect
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
          <Route path={'/user/register'} exact component={UserRegisterContainer} />
          <Route path={'/user/login'} exact component={UserLoginContainer} />
          <Route path={'/user/quotes'} exact component={AddQuotes} />
          <Route path={'/user/quotes/:userId'} exact component={AddQuotes} />
        </Switch>
        <Footer />
      </AppContext.Provider>
    </Router>
  );
}

export default App;
