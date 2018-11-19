import React, { Component } from 'react';
import './TripHistory.css';
import HeaderTypeOne from '../HeaderTypeOne/HeaderTypeOne';
import reFresh from '../../assets/img/refresh.png';

class TripHistory  extends Component {
    render(){
        return(
            <div className={'trip-history container'}>
                <HeaderTypeOne headerTitle={'История поездок'}/>
                <div className="calc-content without-footer">
                    <div className="trip-information">
                        <div className="time-route">
                            <div className="date-time">
                                <p className="date">2018.08.21, 14:59</p>
                                <p className="time">15 мин</p>
                            </div>
                            <div className="route">
                                <div className="route">
                                    <div className="route-point-a">
                                        <span className={'dot'}><p className="dashed-line"></p></span>
                                        ул. Народная, 8
                                    </div>
                                    <div className="route-point-b">
                                        <span className={'dot'}></span>
                                        пр. Социалистический, 67
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <p>150 руб</p>
                            <img src={reFresh} alt=""/>
                        </div>
                    </div>

                    <div className="trip-information">
                        <div className="time-route">
                            <div className="date-time">
                                <p className="date">2018.08.21, 14:59</p>
                                <p className="time">15 мин</p>
                            </div>
                            <div className="route">
                                <div className="route-point-a">
                                    <span className={'dot'}><p className="dashed-line"></p></span>
                                    ул. Народная, 8
                                </div>
                                <div className="route-point-b">
                                    <span className={'dot'}></span>
                                    ул. Санкциональная, 8
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <p>1750 руб</p>
                            <img src={reFresh} alt=""/>
                        </div>
                    </div>

                    <div className="trip-information">
                        <div className="time-route">
                            <div className="date-time">
                                <p className="date">2018.08.21, 14:59</p>
                                <p className="time">15 мин</p>
                            </div>
                            <div className="route">
                                <div className="route-point-a">
                                    <span className={'dot'}><p className="dashed-line"></p></span>
                                    пр. Ленина, 12
                                </div>
                                <div className="route-point-b">
                                    <span className={'dot'}></span>
                                    ул. Водоканальная, 98
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <p>250 руб</p>
                            <img src={reFresh} alt=""/>
                        </div>
                    </div>

                    <div className="trip-information">
                        <div className="time-route">
                            <div className="date-time">
                                <p className="date">2018.08.21, 14:59</p>
                                <p className="time">15 мин</p>
                            </div>
                            <div className="route">
                                <div className="route-point-a">
                                    <span className={'dot'}><p className="dashed-line"></p></span>
                                    ул. Народная, 8
                                </div>
                                <div className="route-point-b">
                                    <span className={'dot'}></span>
                                    ул. Санкциональная, 8
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <p>250 руб</p>
                            <img src={reFresh} alt=""/>
                        </div>
                    </div>

                    <div className="trip-information">
                        <div className="time-route">
                            <div className="date-time">
                                <p className="date">2018.08.21, 14:59</p>
                                <p className="time">15 мин</p>
                            </div>
                            <div className="route">
                                <div className="route-point-a">
                                    <span className={'dot'}><p className="dashed-line"></p></span>
                                    ул. Народная, 8
                                </div>
                                <div className="route-point-b">
                                    <span className={'dot'}></span>
                                    ул. Санкциональная, 8
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <p>250 руб</p>
                            <img src={reFresh} alt=""/>
                        </div>
                    </div>

                    <div className="trip-information">
                        <div className="time-route">
                            <div className="date-time">
                                <p className="date">2018.08.21, 14:59</p>
                                <p className="time">15 мин</p>
                            </div>
                            <div className="route">
                                <div className="route-point-a">
                                    <span className={'dot'}><p className="dashed-line"></p></span>
                                    ул. Народная, 8
                                </div>
                                <div className="route-point-b">
                                    <span className={'dot'}></span>
                                    ул. Санкциональная, 8
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <p>250 руб</p>
                            <img src={reFresh} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TripHistory;
