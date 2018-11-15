import React, { Component } from 'react';
import './Menu.css';
import DriverMenu from '../../assets/img/driver_menu.png';


class Menu extends Component {

    render() {
        return (
            <div className="menu container">
                <div className="menu-header">
                    <img src={DriverMenu} alt=""/>
                    <div className={'driver-name'}>Антон Черышев</div>
                    <div className={'bonus-account'}>Бонусный счет: 50 руб.</div>
                    <div className={'mileage'}>25 поездок, всего 557 км</div>
                </div>

                <div className={'button-block'}>
                    <button className={'taxi-request'}>Заказ такси</button>
                    <button className={'trips-history'}>История поездок</button>
                    <button className={'favorite-addresses'}>Любимые адреса</button>
                    <button className={'payment-method more-space-bottom'}>Способ оплаты</button>

                    <div className={'stripe'}></div>

                    <button className={'settings with-border-top'}>Настройка</button>
                    <button className={'become-to-driver'}>Стать водителем</button>
                    <button className={'promo-code-btn'}>Промокод</button>
                    <button className={'tech-support'}>Техподдержка</button>
                    <button className={'exit'}>Выход</button>
                </div>

            </div>
        );
    }
}

export default Menu;