import React, { Component } from 'react';
import './EnterPin.css';
import Logo from '../Logo/Logo';
import Button from "../Button/Button";
import TransparentButton from "../TransparentButton/TransparentButton";

class EnterPin extends Component {

    render() {
        return (
            <div className="enter-pin container">
                <div className="screen-wrapper">
                    <Logo mainText={'Подтверждение'} secondaryText={null} />
                    <p className="clarification">
                        Мы выслали Вам СМС сообщением код для входа в приложение
                    </p>

                    <div className="inputs-wrapper inputs-wrapper--invalid">
                        <div className={'inputs-wrapper-error-text'}>Текст ошибки</div>
                        <div className="inputs-wrapper-wp">
                            <input type="text" placeholder={"x"}/>
                            <input type="text" placeholder={"x"}/>
                            <input type="text" placeholder={"x"}/>
                            <input type="text" placeholder={"x"}/>
                        </div>
                    </div>
                    <Button text={'Войти'} />
                    <TransparentButton nameButton={'Выслать код повторно'} />
                </div>
            </div>
        );
    }
}

export default EnterPin;