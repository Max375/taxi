import React, { Component } from 'react';
import './WaitingForTaxi.css';
import HeaderTypeTwo from '../HeaderTypeTwo/HeaderTypeTwo';
import OrderedCarInfo from '../OrderedCarInfo/OrderedCarInfo';
import Button from "../Button/Button";

class WaitingForTaxi extends Component {

    render() {
        return (
            <div className="waiting-for-taxi container">
                <HeaderTypeTwo headerTitle={'Ожидание такси'}/>
                <div className="waiting-for-taxi__content">
                    <OrderedCarInfo yearOfManufacture={'2017'} carModel={'Hyundai Accent'} carColor={'белый'} carPoint={'5.0'} arrivalTime={'15'}/>
                </div>
                <div className="left-popup-menu">
                    <div className="left-popup-menu-content">
                        <div className="press-down">
                        <p className={'popup-title'}>Причина отмены поездки</p>
                        <div>
                            <input type="radio" id={'ordered-by-mistake'} name={'car-class'} checked/>
                            <label htmlFor={'ordered-by-mistake'}>
                                Заказал по ошибке
                            </label>
                        </div>

                        <div>
                            <input type="radio" id={'too-long-waiting'} name={'car-class'}/>
                            <label htmlFor={'too-long-waiting'}>
                                Слишком долго ждать
                            </label>
                        </div>

                        <div>
                            <input type="radio" id={'wish-of-driver'} name={'car-class'}/>
                            <label htmlFor={'wish-of-driver'}>
                                По просьбе водителя
                            </label>
                        </div>

                        <div>
                            <input type="radio" id={'taxi-didnt-arrived'} name={'car-class'}/>
                            <label htmlFor={'taxi-didnt-arrived'}>
                                Такси не приехало
                            </label>
                        </div>

                        <div>
                            <input type="radio" id={'changed-my-mind'} name={'car-class'}/>
                            <label htmlFor={'changed-my-mind'} className={'push-button-bottom'}>
                                Передумал ехать
                            </label>
                        </div>
                        <Button text={'отменить поездку'}/>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default WaitingForTaxi;