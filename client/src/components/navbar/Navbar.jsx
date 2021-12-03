import React from 'react';
import './navbar.css';//Импорт стилей
import Login from '../../assets/img/header/login.png';
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { logout, } from '../../reducers/userReducer';
import { useDispatch } from 'react-redux';

export function Header () {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    const logOut = () => {
            dispatch(logout());}

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__inner">
                    <NavLink to="/"><div className="header__logo">BMWSHNIK</div></NavLink>
                    <nav className="header__nav">
                        <NavLink to="/"><a className="nav__link">Главная</a></NavLink>
                        <NavLink to="/models"><a className="nav__link">Модели</a></NavLink>
                        <NavLink to="/news"><a className="nav__link">Новости</a></NavLink>
                        <NavLink to="/shop"><a className="nav__link">Магазин</a></NavLink>
                        <NavLink to="/forum"><a className="nav__link">Форум</a></NavLink>
                        <NavLink to="/contacts"><a className="nav__link">Контакты</a></NavLink>
                        <NavLink to="/login"><a className="nav__link">Войти</a></NavLink>
                        <img className="nav__login" src={Login} alt="Войти"/>
                    </nav>
                </div>
            </div>
        </header>
    );
};