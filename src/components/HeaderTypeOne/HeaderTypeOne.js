import React, { Component } from 'react';
import './HeaderTypeOne.css';


class HeaderTypeOne extends React.Component {
    render() {
        return (
            <div className={'header-type-one'}>
                <button className={'header-arrow-back'}></button>
                <p className={'header-type-one__title'}> {this.props.headerTitle}</p>
            </div>

        )
    }
}
export default HeaderTypeOne;