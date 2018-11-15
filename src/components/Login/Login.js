import React, { Component } from 'react';
import './Login.css';
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import TransparentButton from "../TransparentButton/TransparentButton";

class Login extends Component {

    render() {
        return (
            <div className="login container">
                <div className="screen-wrapper">
                    <Logo mainText={'Вход'} secondaryText={'Вход в приложение'} />

                    <div className="entrance entrance--invalid">
                        <div className="entrance-error-text">Текст ошибки</div>
                        <input type="text" placeholder={'ваш телефон'}/>
                        <Button text={'Войти'} />
                        <TransparentButton nameButton={'Регистрация'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

