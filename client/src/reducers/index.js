import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import forumReducer from "./forumReducer";


const rootReducer = combineReducers({
    user: userReducer,
    forum: forumReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))