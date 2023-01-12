import React, {useState} from 'react';
import './authorization.css';
import Input from '../../utils/input/Input'
import { registration } from '../../actions/user';

export const Registration = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [pwdError, setPwdError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const checkRegistration = () => {
        if (password !== confirmPassword) {
            setPwdError("Введенные пароли не совпадают");
        } else {
            registration(email,password)
        }
    }

    const handlePassword = (e) => {
        setPassword(e);
        setPwdError("");
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e);
        setPwdError("");
    }


    return (
        <div className='authorization'>
            <div className="authorization__header">Регистрация:</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email"/>
            <Input value={password} setValue={(event) => handlePassword(event)} type="password" placeholder="Введите пароль"/>
            <Input value={confirmPassword} setValue={(event) => handleConfirmPassword(event)} type="password" placeholder="Подтвердите пароль"/>
            { pwdError ? 
                <span className="pwdError">{pwdError}</span> :
                <></>
            }
            <button className="authorization-btn" onClick={checkRegistration}>Войти</button>
        </div>
    );
};

export default Registration;