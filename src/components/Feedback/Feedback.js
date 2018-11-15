import React, { Component } from 'react';
import './Feedback.css';
import HeaderTypeOne from '../HeaderTypeOne/HeaderTypeOne';
import FooterButton from '../FooterButton/FooterButton';

class Feedback extends Component {

    render() {
        return (
            <div className={'feedback container'}>
                <HeaderTypeOne headerTitle={'Отзыв о поездке'}/>
                <div className="feedback-content">
                    <div className="flex-top">
                        <p className={'h2'}>Текст отзыва</p>
                        <textarea>Поездкой крайне доволен! Вежливый водитель и интересный собеседник. обсуждали текущее положение дел в хип-хоп культуре. Рекомендую!</textarea>
                    </div>
                    <div className="flex-bottom">
                        <input type="radio" id={'add-to-favorites'} name={'driver-assesment'}/>
                        <label htmlFor="add-to-favorites">Добавить в Избранное</label>
                        <input type="radio" id={'add-to-black-list'} name={'driver-assesment'}/>
                        <label htmlFor="add-to-black-list">Добавить в черный список</label>
                    </div>
                </div>
                <FooterButton nameButton={'отправить отзыв'}/>
            </div>
        );
    }
}

export default Feedback;