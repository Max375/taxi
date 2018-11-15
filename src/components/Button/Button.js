import React, { Component } from 'react';
import './Button.css';
import loader from '../../assets/img/loader.svg';
import buttonMark from '../../assets/img/button_mark.png';

class Button extends Component {

    state = {
      isLoaded:  false,
    };

    onClickHandler = ()=>{
        this.setState({isLoaded: true});

        setTimeout(()=>{
            this.setState({isLoaded: false});
        },500)
    };

    render() {
        return (
            <button  onClick={this.onClickHandler}   className={this.props.withImage === true ? 'login-submit full-screen-button'  : 'login-submit'} >
                {this.state.isLoaded ? (<img src={loader} alt="" className={'loader'}/>)  : this.props.text}
            </button>
        );
    }
}
export default Button;


/*

{this.props.withImage === true && (<img src={buttonMark} alt=""/>)}




        let output = this.props.text;

        if (this.state.isLoaded){
            output = (<img src={loader} alt="" className={'loader'}/>);
        }

//////////////
{this.state.isLoaded ? (<img src={loader} alt="" className={'loader'}/>)  : this.props.text}

 */