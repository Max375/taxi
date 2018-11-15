import React, { Component } from 'react';
import './TransparentButton.css';

class TransparentButton extends React.Component {
    render() {
        return <button className={'transparent-button'}>{this.props.nameButton}</button>;
    }
}
export default TransparentButton;