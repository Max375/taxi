import React, { Component } from 'react';
import './DataButton.css';

class DataButton extends React.Component {
    render() {
        return (
            <button className={'data-button'}>
                <div className="title">{this.props.title}</div>
                <div className="main-text">{this.props.mainText}</div>
            </button>
        );
    }
}
export default DataButton;