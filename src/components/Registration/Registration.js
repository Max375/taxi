import React, { Component } from 'react';
import './Registration.css';
import Logo from '../Logo/Logo';
import Button from "../Button/Button";
import TransparentButton from "../TransparentButton/TransparentButton";

class Registration extends Component {

    render() {
        return (
            <div className="registration container">
                <div className="screen-wrapper screen-wrapper--invalid">
                    <Logo mainText={'Регистрация'} secondaryText={'Регистрация в системе'} />
                    <div className="error-text-container">
                        <div className="registration-error-text">Текст ошибки</div>
                    </div>
                    <input type="text" placeholder={'ваш имя'} className={'first-input input--invalid'}/>
                    <input type="text" placeholder={'номер телефона'} className={'second-input'}/>
                    <Button text={'Войти'} />
                    <TransparentButton nameButton={'Уже зарегистрированы?'} />
                </div>
            </div>
        );
    }
}

export default Registration;