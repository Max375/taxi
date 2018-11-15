import React, { Component } from 'react';
import './DrivingProcess.css';
import signHyundaiLittle from '../../assets/img/sign_hyundai_little.png';
import driverPhoto from '../../assets/img/driver_konstantin.png';
import Button from "../Button/Button";

class DrivingProcess extends React.Component{
    render(){
        return (
            <div className={'driver-process'}>
                <div className="driver-process-top-row">
                    <div className="top-row-coll">
                        <div className="title">{this.props.leftToGo} мин.</div>
                        <p>Осталось ехать</p>
                    </div>
                    <div className="top-row-coll">
                        <div className="title">{this.props.taxiFare} Br</div>
                        <p>Стоимость поездки</p>
                    </div>
                </div>

                <div className="driver-process__bottom-row">
                    <div className="route-point first-address">{this.props.firstAddress}</div>
                    <div className="route-point second-address">{this.props.secondAddress}</div>
                    
                    <div className="driver-rating-model-block">
                        <img src={driverPhoto} alt=""/>
                        <div className="name-rating-model-subblock">
                            <div className="driver-name">{this.props.driverName}</div>
                            <div className={'car-rating'}>
                                <div className="little-star"></div>
                                <div className="little-star"></div>
                                <div className="little-star"></div>
                                <div className="little-star"></div>
                                <div className="little-star"></div>
                                <div className="car-point">{this.props.rating}</div>
                            </div>
                            <div className="car-sign-model-subblock">
                                <img src={signHyundaiLittle} alt=""/>
                                <div className="car-model">{this.props.carModel}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button text={'оценить поездку'}/>
            </div>
            )
    }
}
export default DrivingProcess;

