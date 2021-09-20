import {BrowserRouter as Router, Route} from 'react-router-dom'
import UserRegisterContainer from "../User/UserRegisterContainer";
import UserLoginContainer from "../User/UserLoginContainer";

function App() {
    return (
        <Router>
            <main>
                <Route path={'/user/register'} exact component={UserRegisterContainer}/>
                <Route path={'/user/login'} exact component={UserLoginContainer}/>
            </main>
        </Router>
    );
}

export default App;
