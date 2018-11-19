import React, { Component } from 'react';
import './TaxiOrdering.css';
import HeaderTypeOne from '../HeaderTypeOne/HeaderTypeOne';
import signHyundaiBig from '../../assets/img/sign_hyundai_big.png';
import signToyotaiBig from '../../assets/img/sign_toyota_big.png';
import signNissanBig from '../../assets/img/sign_nissan_big.png';
import Button from "../Button/Button";
import CarInfo from "../CarInfo/CarInfo";
class TaxiOrdering extends Component {

    render() {
        return (
            <div className={'taxi-ordering container'}>
                <HeaderTypeOne headerTitle={'Заказ такси'} />
                <div className="calc-content without-footer">
                    <CarInfo yearOfManufacture={'2017'} carModel={'Hyundai Solaris'} carPoint={'4.91'} timeToArrival={'15'} costTrip={'12.0'}/>
                    <CarInfo yearOfManufacture={'2018'} carModel={'Toyota Camry'} carPoint={'4.81'} timeToArrival={'11'} costTrip={'11.5'}/>
                    <CarInfo yearOfManufacture={'2016'} carModel={'Nissan Almera'} carPoint={'4.45'} timeToArrival={'8'} costTrip={'14.5'}/>
                </div>
            </div>
        );
    }
}

export default TaxiOrdering;