import React, { Component } from 'react';
import './Expectation.css';
import signHyundaiBig from '../../assets/img/sign_hyundai_big.png';


class Expectation extends React.Component {
    render() {
        return (
            <div className={'expectation'}>
                <div className={'expectation__top-row'}>
                    <div className={'top-row__left-coll'}>
                        <img src={signHyundaiBig} />
                        <div className={'year-of-manufacture'}>{this.props.yearOfManufacture} г.в.</div>
                    </div>
                    <div className={'top-row__right-coll'}>
                        <div className={'waiting-time-wrapper'}>
                            <div className={'expecting-time'}>Вас ожидает</div>
                            <div className="expecting-time-value">00:43</div>
                        </div>
                        <div className={'model-color-flex-wrapper'}>
                            <div className={'right-coll__car-model'}>{this.props.carModel}</div>
                            <div className={'right-coll__car-color'}>{this.props.carColor}</div>
                        </div>
                        <div className="rating-number-wrapper">
                            <div className={'right-coll__car-rating'}>
                                <div className="little-star"></div>
                                <div className="little-star"></div>
                                <div className="little-star"></div>
                                <div className="little-star"></div>
                                <div className="little-star"></div>
                                <div className="right-coll__car-point">{this.props.carPoint}</div>
                            </div>
                            <div className="state-number">6605 PB7</div>
                        </div>
                    </div>
                </div>

                <div className="buttons-time-left">
                    <button>Уже выхожу</button>
                    <button>1 минута</button>
                    <button>3 минуты</button>
                    <button>5 минут</button>
                </div>


                <div className={'expectation__bottom-row'}>
                    <button className={'button-call'}>позвонить</button>
                    <button className={'button-cancel'}>отменить</button>
                </div>
            </div>
        )
    }
}
export default Expectation;