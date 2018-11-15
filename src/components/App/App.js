import React, { Component } from 'react';
import './App.css';
import Login from "../Login/Login";
import EnterPin from "../EnterPin/EnterPin";
import Registration from "../Registration/Registration";
import RoutePayment from "../RoutePayment/RoutePayment";
import AddressSelect from "../AddressSelect/AddressSelect";
import CarInfo from "../CarInfo/CarInfo";
import WaitingForTaxi from "../WaitingForTaxi/WaitingForTaxi";
import Riding from "../Riding/Riding";
import TripCompleted from "../TripCompleted/TripCompleted";
import Feedback from "../Feedback/Feedback";
import Settings from "../Settings/Settings";
import PromoCode from "../PromoCode/PromoCode";
import Loading from "../Loading/Loading";
import Menu from "../Menu/Menu";

class App extends Component{

    render() {
    return (
        <Feedback/>
    );
  }
}

export default App;
