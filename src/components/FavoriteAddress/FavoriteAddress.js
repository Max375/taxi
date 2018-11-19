import React, { Component } from 'react';
import './FavoriteAddress.css';
import HeaderTypeTwo from '../HeaderTypeTwo/HeaderTypeTwo';
import FooterButton from '../FooterButton/FooterButton';


class FavoriteAddress extends Component {

    render() {
        return (
            <div className={'favorite-address container'}>
                <HeaderTypeTwo headerTitle={'Избранный адрес'} />
                <div className="calc-content">
                    <div className="adding-point">Красноармейская, 1</div>

                </div>
                <FooterButton nameButton={'Добавить'}/>
            </div>
        );
    }
}

export default FavoriteAddress;