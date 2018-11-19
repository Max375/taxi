import React, { Component } from 'react';
import './PromoCode.css';
import HeaderTypeOne from '../HeaderTypeOne/HeaderTypeOne';
import promocodeCard from "../../assets/img/promocode_card.png";
import Button from "../Button/Button";

class PromoCode extends Component {
    render(){
        return(
            <div className={'promo-code container'}>
                <HeaderTypeOne headerTitle={'История поездок'}/>
                <div className="calc-content without-footer">
                    <div className={'enter-promo-code-wrapper'}>
                        <img src={promocodeCard} alt=""/>
                        <p className="h1">Ввести промокод</p>
                        <p className="text">Промокод позволяет получить бонусы, которые можно использовать для оплаты</p>
                        <input type="text" className={'enter-promo-code'} placeholder={'промокод'}/>
                        <Button text={'ввести'}/>
                    </div>
                    <div className="your-promo-code-wrapper">
                        <p className="h1">Ваш промокод</p>
                        <p className="text">Используйте этот промокод для того, чтобы приглашать друзей в наше приложение.
                            И Вы, и Ваш друг, получите бонус!</p>
                        <div className="your-promo-code">
                            375293353328
                        </div>
                    </div>

                    <p className="send-code-friends">Отправить код друзьям</p>
                    <div className="social-wrapper">
                        <button className={'social-network vk'}></button>
                        <button className={'social-network tw'}></button>
                        <button className={'social-network fb'}></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PromoCode;
