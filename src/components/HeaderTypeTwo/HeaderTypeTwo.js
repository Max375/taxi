import React, { Component } from 'react';
import './HeaderTypeTwo.css';


class HeaderTypeTwo extends React.Component {
    render() {
        return (
            <div className={'header-type-two'}>
                <button className={'header-burger-menu'}></button>
                <p className={'header__title'}> {this.props.headerTitle}</p>
            </div>

        )    }
}
export default HeaderTypeTwo;