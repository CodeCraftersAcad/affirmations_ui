import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./store/reducers/user-reducers";


const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer
})

const userInfoFromLocalStorage = localStorage.getItem('ccaAffirmationsUser')
    ? JSON.parse(localStorage.getItem('ccaAffirmationsUser'))
    : null

const initialState = {
    userLogin: {userInfo: userInfoFromLocalStorage},
};

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store