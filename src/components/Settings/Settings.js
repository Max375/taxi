import React, { Component } from 'react';
import './Settings.css';
import HeaderTypeOne from '../HeaderTypeOne/HeaderTypeOne';

class Settings extends Component {

    render() {
        return (
            <div className={'settings container'}>
                <HeaderTypeOne headerTitle={'Отзыв о поездке'}/>
                <div className="calc-content without-footer">
                    <p className="h2">Общие настройки</p>

                    <input type="checkbox" id={'traffic-jam'} />
                    <label htmlFor={'traffic-jam'} className={'checkbox-type-one'}>
                        Пробки на карте
                    </label>

                    <input type="checkbox" id={'expensive-cars'}/>
                    <label htmlFor={'expensive-cars'} className={'checkbox-type-one'}>
                        Только дорогие авто
                    </label>

                    <input type="checkbox" id={'update-automatically'} />
                    <label htmlFor={'update-automatically'} className={'checkbox-type-one'}>
                        Обновлять автоматически
                    </label>

                    <p className="h2 step-down">Уведомления</p>
                    <input type="checkbox" id={'turn-on-notifications'}/>
                    <label htmlFor={'turn-on-notifications'} className={'checkbox-type-one'}>
                        Включить уведомления
                    </label>


                    <p className={'h3'}>Виды уведомлений</p>
                    <input type="checkbox" id={'messages-from-driver'}/>
                    <label htmlFor={'messages-from-driver'} className={'checkbox-type-two'}>
                        Сообщения от водителя
                    </label>

                    <input type="checkbox" id={'notifications-about-arriving'}/>
                    <label htmlFor={'notifications-about-arriving'} className={'checkbox-type-two'}>
                        Уведомления о прибытии
                    </label>

                    <input type="checkbox" id={'car-is-almost-here'}/>
                    <label htmlFor={'car-is-almost-here'} className={'checkbox-type-two'}>
                        Машина подъезжает
                    </label>

                    <input type="checkbox" id={'notification-car-delay'}/>
                    <label htmlFor={'notification-car-delay'} className={'checkbox-type-two'}>
                        Уведомления о задержки авто
                    </label>

                    <input type="checkbox" id={'notifications-of-app'}/>
                    <label htmlFor={'notifications-of-app'} className={'checkbox-type-two'}>
                        Оповещения приложения
                    </label>
                </div>
            </div>
        );
    }
}

export default Settings;