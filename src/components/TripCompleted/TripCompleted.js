import React, { Component } from 'react';
import './TripCompleted.css';
import HeaderTypeTwo from '../HeaderTypeTwo/HeaderTypeTwo';
import bigStar from '../../assets/img/big_star.png';
import bigStarEmpty from '../../assets/img/big_star_empty.png';
import Button from "../Button/Button";


class TripCompleted extends Component {

    render() {
        return (
            <div className={'trip-completed container'}>
                <HeaderTypeTwo headerTitle={'Поездка завершена'} />
                <div className="trip-completed-content">
                    <div className="flex-inner">
                        <div className="header-total-sum">
                            <p>Сумма к оплате</p>
                            25 Br
                            <p>Наличные</p>
                        </div>
                        <div className="distance-time">
                            <div className="distance-time-distance">
                                Расстояние: <span>15 км</span>
                            </div>
                            <div className="distance-time-time">
                                Время: <span>20 мин</span>
                            </div>
                        </div>
                        <p className={'h1'}>Оцените поездку</p>
                        <div className="stars-container">
                            <img src={bigStar}/>
                            <img src={bigStar}/>
                            <img src={bigStar}/>
                            <img src={bigStar}/>
                            <img src={bigStarEmpty}/>
                        </div>

                        <div className="press-down">
                            <Button text={'завершить'}/>
                            <button className={'button-leave-feedback'}>
                                <p>оставить отзыв</p>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default TripCompleted;