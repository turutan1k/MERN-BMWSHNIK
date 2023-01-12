import React, { useEffect } from "react";
import {Header} from './navbar/Navbar';
import './app.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Registration} from "./authorization/Registration";
import {Login} from "./authorization/Login";
import { connect, useDispatch, useSelector } from 'react-redux';
import {auth} from '../actions/user';
import {Main} from "./pages/main/Main";
import {News} from "./pages/news/News";
import {Models} from "./pages/models/Models";
import {Forum} from "./pages/forum/Forum";




export default function App(){
  
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
            <Header />
              {!isAuth && 
                <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/models" component={Models}/>
                <Route exact path="/forum" component={Forum}/>
                <Route exact path="/registration" component={Registration}/>
                <Route exact path="/login" component={Login}/>
                </Switch>
              }
    </BrowserRouter>
  );
}