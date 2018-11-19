import React, { Component } from 'react';
import './AddressSelect.css';
import HeaderTypeOne from "../HeaderTypeOne/HeaderTypeOne";
import FooterButton from "../FooterButton/FooterButton";
import Select from "../Select/Select";
const PROXY = 'https://test.kak-pravilno.by/taxi/proxy.php';
const addressAutocomplete = function (input) {


    const body = JSON.stringify({
        data: {
            input: input.trim().replace(/\s/g,'+'),
        }
    });



    return fetch(PROXY,{
        method: 'POST',
        body: body
    })
        .then((res) => {
            if(res.status !== 200) throw {status: res.status, error: res.text()};
            return res.json();
        })
        .then(data =>{
            return data;
        });
};

const autoComplete = (inputValue,callback)=>{
    addressAutocomplete(inputValue)
        .then((data)=>{
            if (data.status !== "OK") throw {message: "Response is empty", status: 404};
            let points = Array.from(data.predictions).map(el=>{
                if (el.structured_formatting.secondary_text.indexOf("Minsk, Belarus")) return undefined;
                return {
                    value: el.structured_formatting.main_text,
                    label: el.structured_formatting.main_text,
                    geocode: true
                }
            });
            points = points.filter(point => point !== undefined);
            callback(points);
        })
        .catch(e=>{
            callback([]);
        });
};


class AddressSelect extends Component {

    render() {
        return (
            <div className="address-select container">
                <HeaderTypeOne headerTitle={'Отзыв о поездке'} />
                <div className="calc-content">
                    <Select
                        options = {[]}
                        constOptions = {[{value: 'map',label: 'map', geocode: false}]}
                        loadOptions={autoComplete}
                    />
                </div>
                <FooterButton nameButton={'Выбрать'} />
            </div>
        );
    }
}

export default AddressSelect;