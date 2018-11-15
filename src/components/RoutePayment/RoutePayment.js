import React, { Component } from 'react';
import './RoutePayment.css';
import HeaderTypeTwo from '../HeaderTypeTwo/HeaderTypeTwo';
import FooterButton from '../FooterButton/FooterButton';
import DataButton from '../DataButton/DataButton';
import Button from "../Button/Button";


class RoutePayment extends Component {
    // showLeftMenuCarType = () => {
    //     left-menu-car-type.style.display = "block";
    // };
    render() {
        return (
            <div className="route-payment container">
                <HeaderTypeTwo headerTitle={'Заказать такси'} />
                <div className={'route-payment-content'}>
                    <div className={'content-data-button-wrapper'}>
                        <div className={'badge badge-a'}></div>
                        <DataButton title={'откуда'} mainText={'ул. Мазурова, 12'}/>
                        <button className="number-of-route"></button>
                    </div>
                    <div className={'content-data-button-wrapper'}>
                        <div className={'badge badge-b'}></div>
                        <DataButton title={'куда'} mainText={'просп. Зависимости, 142'}/>
                        <button className="number-of-route close"></button>
                    </div>
                    <div className={'content-data-button-wrapper'}>
                        <div className={'badge badge-c'}></div>
                        <DataButton title={'куда'} mainText={'ул. Шабанова, 77'}/>
                    </div>
                    <div className={'content-data-button-wrapper'}>
                        <div className={'badge pen'}></div>
                        <DataButton title={'комментарий к заказу'} mainText={'Со стороны общаги'}/>
                    </div>
                    <div className={'content-data-button-wrapper'}>
                        <div className={'badge card'}></div>
                        <DataButton title={'способ оплаты'} mainText={'Карта ****6789'}/>
                    </div>
                    <div className="additional-buttons">
                        <button className={'shadowed-button'} onClick={this.showLeftMenuCarType}>
                            <div className="shadowed-button-title">класс поездки</div>
                            <div className="shadowed-button-text">Эконом</div>
                        </button>
                        <button className={'shadowed-button'}>
                            <div className="shadowed-button-title">дополнительно</div>
                            <div className="shadowed-button-text">Детское кресло</div>
                        </button>
                    </div>

                </div>

                <footer>
                    <div className="footer-text">Расстояние 25 км</div>
                    <div className="footer-text second">Рекомендуемая стоимость 250 у.е.</div>
                    <div className="price-container">
                        <button className={'button-minus'}>-0.5 Br</button>
                        <div className="calculated-price">11.5 Br</div>
                        <button className={'button-plus'}>+0.5 Br</button>
                    </div>

                    <FooterButton nameButton={'заказать'} />
                </footer>


                <div className="left-popup-menu car-type-popup">
                    <div className="left-popup-menu-content">
                        <div className="flex-top-wrapper">
                            <p className={'popup-title'}>Выбор класса поездки</p>
                            <input type="radio" id={'economic'} name={'car-class'} checked/>
                            <label htmlFor={'economic'}>
                                Эконом
                                <p>Renault, Lada, Hyundai</p>
                            </label>

                            <input type="radio" id={'comfort'} name={'car-class'}/>
                            <label htmlFor={'comfort'}>

                                Комфорт
                                <p>Nissan, Mercedes, BMW</p>
                            </label>

                            <input type="radio" id={'van'} name={'car-class'}/>
                            <label htmlFor={'van'}>
                                Минивен
                                <p>Для большой компании</p>
                            </label>
                            <input type="radio" id={''} name={'car-class'}/>
                            <label htmlFor={'van'}>
                                Минивен
                                <p>Для большой компании</p>
                            </label>
                            <input type="radio" id={''} name={'car-class'}/>
                            <label htmlFor={'van'}>
                                Минивен
                                <p>Для большой компании</p>
                            </label>
                            <input type="radio" id={''} name={'car-class'}/>
                            <label htmlFor={'van'}>
                                Минивен
                                <p>Для большой компании</p>
                            </label>
                            <input type="radio" id={''} name={'car-class'}/>
                            <label htmlFor={'van'}>
                                Минивен
                                <p>Для большой компании</p>
                            </label>
                        </div>
                        <div className="flex-bottom-wrapper">
                            <Button text={'применить'}/>
                        </div>
                    </div>
                </div>

                <div className="left-popup-menu card-payment-popup">
                    <div className="left-popup-menu-content">
                        <div className="flex-top-wrapper">
                            <p className={'popup-title'}>Выберите способ оплаты</p>
                            <input type="radio" id={'cash'} name={'choose-card'} checked/>
                            <label htmlFor={'cash'}>
                                Наличные
                            </label>

                            <input type="radio" id={'first-card'} name={'choose-card'}/>
                            <label htmlFor={'first-card'}>
                                Visa ****2590
                            </label>

                            <input type="radio" id={'second-card'} name={'choose-card'}/>
                            <label htmlFor={'second-card'}>
                                MasterCard ****6712
                            </label>
                        </div>

                        <div className="flex-bottom-wrapper">
                            <Button text={'применить'}/>
                            <button className={'button-add-card'}>добавить карту</button>
                        </div>
                    </div>
                </div>

                <div className="left-popup-menu additional-services">
                    <div className="left-popup-menu-content">
                        <div className="flex-top-wrapper">
                            <p className={'popup-title'}>Дополнительные услуги</p>
                            <input type="radio" id={'girl-driver'} name={''}/>
                            <label htmlFor={'girl-driver'}>
                               Девушка водитель
                            </label>

                            <input type="radio" id={'car-without-ad'} name={''}/>
                            <label htmlFor={'car-without-ad'}>
                                Авто без рекламы
                            </label>

                            <input type="radio" id={'lagguage'} name={''} checked/>
                            <label htmlFor={'lagguage'}>
                                Багаж
                            </label>

                            <input type="radio" id={'transporting-animals'} name={''}/>
                            <label htmlFor={'transporting-animals'}>
                                Перевозка животного
                            </label>

                            <input type="radio" id={'conditioner'} name={''} checked/>
                            <label htmlFor={'conditioner'}>
                                Кондиционер
                            </label>

                            <input type="radio" id={'english-speaker-driver'} name={''}/>
                            <label htmlFor={'english-speaker-driver'}>
                                Англоговорящий водитель
                            </label>

                            <input type="radio" id={'child-seat'} name={''}/>
                            <label htmlFor={'child-seat'}>
                                Детское кресло
                            </label>

                            <input type="radio" id={'taciturn-driver'} name={''}/>
                            <label htmlFor={'taciturn-driver'}>
                                Неразговорчивый водитель
                            </label>
                        </div>


                        <div className="flex-bottom-wrapper">
                            <Button text={'применить'}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default RoutePayment;