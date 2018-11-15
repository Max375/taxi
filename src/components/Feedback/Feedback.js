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
                        <input type="submit" value="Добавить в Избранное" />
                        <button className={'button-add-to-black-list'}>Добавить в черный список</button>
                    </div>
                </div>
                <FooterButton nameButton={'отправить отзыв'}/>
            </div>
        );
    }
}

export default Feedback;