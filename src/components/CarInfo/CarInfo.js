import React, { Component } from 'react';
import './CarInfo.css';
import signHyundaiBig from '../../assets/img/sign_hyundai_big.png';
import signToyotaiBig from '../../assets/img/sign_toyota_big.png';
import signNissanBig from '../../assets/img/sign_nissan_big.png';
import littleStar from '../../assets/img/star_purple_little.png';

class CarInfo extends Component {

    render() {
        return (
            <div className={'car-info'}>
                <div className={'car-info__left-coll'}>
                    <img src={signHyundaiBig} />
                    <div className={'year-of-manufacture'}>{this.props.yearOfManufacture} г.в.</div>
                </div>
                <div className={'car-info__right-coll'}>
                    <div className={'right-coll__car-model'}>{this.props.carModel}</div>
                    <div className={'right-coll__car-rating'}>
                        <img src={littleStar} alt=""/>
                        <img src={littleStar} alt=""/>
                        <img src={littleStar} alt=""/>
                        <img src={littleStar} alt=""/>
                        <img src={littleStar} alt=""/>
                        <div className="right-coll__car-point">{this.props.carPoint}</div>
                    </div>
                    <div className="time-cost-flex-wrapper">
                        <div className="time">{this.props.timeToArrival} мин.</div>
                        <div className="right-coll__cost-trip">{this.props.costTrip} Br</div>
                    </div>
                    <button className={'accept-btn'}>
                        <span></span>принять
                    </button>
                </div>
            </div>
        );
    }
}

export default CarInfo;
