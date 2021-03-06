import React, { Component } from 'react';
import './App.css';
import Login from "../Login/Login";
import EnterPin from "../EnterPin/EnterPin";
import Registration from "../Registration/Registration";
import RoutePayment from "../RoutePayment/RoutePayment";
import AddressSelect from "../AddressSelect/AddressSelect";
import TaxiOrdering from "../TaxiOrdering/TaxiOrdering";
import WaitingForTaxi from "../WaitingForTaxi/WaitingForTaxi";
import Riding from "../Riding/Riding";
import TripCompleted from "../TripCompleted/TripCompleted";
import CarInfo from "../CarInfo/CarInfo";
import Settings from "../Settings/Settings";
import PromoCode from "../PromoCode/PromoCode";
import Loading from "../Loading/Loading";
import Menu from "../Menu/Menu";
import MyAddresses from "../MyAddresses/MyAddresses";
import FavoriteAddress from "../FavoriteAddress/FavoriteAddress";
import TripHistory from "../TripHistory/TripHistory";
import SavedPoint from "../SavedPoint/SavedPoint";

class App extends Component{

    render() {
    return (
        <WaitingForTaxi/>
    );
  }
}

export default App;
