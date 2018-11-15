import React, { Component } from 'react';
import './Loading.css';
import loadingLogo from '../../assets/img/loading_logo.png';

class Loading extends Component {

    render() {
        return (
            <div className={'loading container'}>
                <div className={'logo-loading'}>
                    <img src={loadingLogo} alt=""/>
                </div>

                <div className="spinner-wrapper">
                    <div className="lds-default">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;