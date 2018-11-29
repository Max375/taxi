import React, { Component } from 'react';
import './Expectation.css';
import signHyundaiBig from '../../assets/img/sign_hyundai_big.png';


class Expectation extends React.Component {
    render() {
        return (
            <div className={'ordered-car-info'}>
                <div className={'ordered-car-info__top-row'}>
                    <div className={'top-row__left-coll'}>
                        <img src={signHyundaiBig} />
                        <div className={'year-of-manufacture'}>{this.props.yearOfManufacture} г.в.</div>
                    </div>
                    <div className={'top-row__right-coll'}>
                        <div className={'model-color-flex-wrapper'}>
                            <div className={'right-coll__car-model'}>{this.props.carModel}</div>
                            <div className={'right-coll__car-color'}>{this.props.carColor}</div>
                        </div>
                        <div className={'right-coll__car-rating'}>
                            <div className="little-star"></div>
                            <div className="little-star"></div>
                            <div className="little-star"></div>
                            <div className="little-star"></div>
                            <div className="little-star"></div>
                            <div className="right-coll__car-point">{this.props.carPoint}</div>
                        </div>

                        <div className="arrival-time">
                            Будет через: <span>{this.props.arrivalTime} мин.</span></div>
                    </div>
                </div>
                <div className={'ordered-car-info__bottom-row'}>
                    <button className={'button-call'}>позвонить</button>
                    <button className={'button-cancel'}>отменить</button>
                </div>
            </div>
        )
    }
}
export default Expectation;