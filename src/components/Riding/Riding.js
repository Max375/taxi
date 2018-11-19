import React, { Component } from 'react';
import './Riding.css';
import HeaderTypeTwo from '../HeaderTypeTwo/HeaderTypeTwo';
import DrivingProcess from "../DrivingProcess/DrivingProcess";

class Riding extends Component {

    render() {
        return (
            <div className="riding container">
                <HeaderTypeTwo headerTitle={'Поездка'}/>
                <div className="calc-content without-footer">
                    <DrivingProcess leftToGo={'5'} taxiFare={'25'} firstAddress={'ул. Антинародная, 8'} secondAddress={'пр. Солнцеподобного, 88'} driverName={'Теодор'} rating={'5.0'} carModel={'Hyundai Solaris'}/>
                </div>
            </div>
        );
    }
}

export default Riding;