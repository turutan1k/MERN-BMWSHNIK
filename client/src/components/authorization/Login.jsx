import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import { useDispatch } from 'react-redux';
import {login} from "../../actions/user"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const checkLogin = () => {
        dispatch(login(email, password));
    }

    return (
        <div className='authorization'>
            <div className="authorization__header">Авторизация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/>
            <button className="authorization-btn" onClick={checkLogin}>Войти</button>
        </div>
    );
};

export default Login;