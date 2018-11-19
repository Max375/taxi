import React, { Component } from 'react';
import './MyAddresses.css';
import HeaderTypeTwo from '../HeaderTypeTwo/HeaderTypeTwo';
import FooterButton from '../FooterButton/FooterButton';
import selectStar from '../../assets/img/select_star.png'


class MyAddresses extends Component {

    render() {
        return (
            <div className={'my-addresses container'}>
                <HeaderTypeTwo headerTitle={'Мои адреса'} />
                <div className="calc-content">
                    <div className="saved-address">
                        <div className="star-area">
                            <img src={selectStar} alt=""/>
                        </div>
                        <div className="address-area">
                            <div className="your-address-name">Дом</div>
                            <div className="map-point">ул. Костюшки, 39</div>
                        </div>
                    </div>

                    <div className="saved-address">
                        <div className="star-area">
                            <img src={selectStar} alt=""/>
                        </div>
                        <div className="address-area">
                            <div className="your-address-name">Работа</div>
                            <div className="map-point">ул. Крымнашская, 15</div>
                        </div>
                    </div>
                </div>
                <FooterButton nameButton={'Добавить адрес'}/>
            </div>
        );
    }
}

export default MyAddresses;