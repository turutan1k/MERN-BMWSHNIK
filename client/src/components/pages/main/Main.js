import React from 'react';
import './main.css';
import {NavLink} from 'react-router-dom'
import ImageSlider from "../../slider/ImageSlider";
import {SliderData} from '../../slider/SliderData';
import '../../slider/slider.css';
import ImgItem1 from "../../../assets/img/about/series.jpg";
import ImgItem2 from "../../../assets/img/about/m.jpg";
import ImgItem3 from "../../../assets/img/about/i.jpg";
import ImgItem4 from "../../../assets/img/about/z.jpg";
import ImgItem5 from "../../../assets/img/about/x.jpg";
import ImgItem6 from "../../../assets/img/about/xm.jpg";
import NewsItem1 from "../../../assets/img/news/1.jpg";
import NewsItem2 from "../../../assets/img/news/2.jpg";
import NewsItem3 from "../../../assets/img/news/3.jpg";
import NewsItem4 from "../../../assets/img/news/4.jpg";
import ShopItem1 from "../../../assets/img/shop/emblem.jpg";


import App from './../../App';
export const Main = () => {
    return (
        <div className="main">
                    <ImageSlider slides={SliderData}/>
            <section className="section">
                <div className="container">
                    <div className="section__header">
                        <div className="section-title">
                            <h1>bmwshnik</h1>
                            <h3 className="about-title">Автомобильный форум</h3>
                        </div>
                        <div className="section-subtitle">
                            <h2 className="about-subtitle">О проекте</h2>
                            <p className="about-text">Основан в 2021 году. Дебютирующее сообщество в СНГ. Объединение владельцев и любителей автомобилей марки BMW.
                                Получение советов по эксплуатации и диагностике BMW. 
                                Последние новости из мира BMW. Свежая Информация модельного ряда. История.
                                Размещение объявлений. Приобретение аксессуаров. Услуга доставки. Гарантийные обязательства.</p>
                        </div>
                    </div>
                </div>
                <div className="section__main">
                    <div className="container">
                        <div className="main-title">
                            <h2><NavLink to="/models"><a className="link-title">Модели</a></NavLink></h2>
                        </div>
                        <div className="main-subtitle">
                            <h3>Выберите модель автомобиля, характеристики которой Вам хотелось бы изучить</h3>
                        </div>
                        <div className="models">
                            <div className="models-item">
                                <div className="models-img">
                                <img src={ImgItem1}/>
                                </div>
                            </div>
                            <div className="models-item">
                                <div className="models-img">
                                    <img src={ImgItem2}/>
                                </div>
                            </div>
                            <div className="models-item">
                                <div className="models-img">
                                    <img src={ImgItem3}/>
                                </div>
                            </div>
                            <div className="models-item">
                                <div className="models-img">
                                    <img src={ImgItem4}/>
                                </div>
                            </div>
                            <div className="models-item">
                                <div className="models-img">
                                    <img src={ImgItem5}/>
                                </div>
                            </div>
                            <div className="models-item">
                                <div className="models-img">
                                    <img src={ImgItem6}/>
                                </div>
                            </div>
                        </div>    
                    </div>                
                </div>
            <div className="section__news">
                <div className="container">
                        <div className="news-title">
                            <h2><NavLink to="/news"><a className="link-title">Новости</a></NavLink></h2>
                        </div>
                        <div className="news-subtitle">
                            <h3>Просматривайте последние новости вашей любимой марки BMW прямо из нашего Instagram</h3>
                        </div>
                        <div className="news">
                            <div className="news-item">
                                <div className="news-img">
                                    <img src={NewsItem1}/>
                                </div>
                            </div>
                            <div className="news-item">
                                <div className="news-img">
                                    <img src={NewsItem2}/>
                                </div>
                            </div>
                            <div className="news-item">
                                <div className="news-img">
                                    <img src={NewsItem3}/>
                                </div>
                            </div>
                            <div className="news-item">
                                <div className="news-img">
                                    <img src={NewsItem4}/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        
        <div className="section__shop">
                <div className="container">
                        <div className="shop-title">
                            <h2><NavLink to="/shop"><a className="link-title">Магазин</a></NavLink></h2>
                        </div>
                        <div className="shop-subtitle">
                            <h3>Приобретите интересующий вас аксессуар для своей модели автомобиля</h3>
                        </div>
                    <div className="shop">
                        <div className="shop-inner">
                            <div className="shop-item">
                                <div className="shop-img">
                                    <img src={ShopItem1}/>
                                </div>
                                <div className="item">
                                    <h3 className="item-title">Эмблема для капота / багажника</h3>
                                    <h4 className="item-subtitle">10 BYN</h4>
                                </div>
                            </div>
                        </div>
                        <div className="shop-inner">
                            <div className="shop-item">
                                <div className="shop-img">
                                    <img src={ShopItem1}/>
                                </div>
                                    <div className="item">
                                        <h3 className="item-title">Эмблема для капота / багажника</h3>
                                        <h4 className="item-subtitle">10 BYN</h4>
                                    </div>
                            </div>
                        </div>
                        <div className="shop-inner">
                            <div className="shop-item">
                                <div className="shop-img">
                                    <img src={ShopItem1}/>
                                </div>
                                <div className="item">
                                <h3 className="item-title">Эмблема для капота / багажника</h3>
                                <h4 className="item-subtitle">10 BYN</h4>
                                </div>
                            </div>
                        </div>
                        <div className="shop-inner">
                            <div className="shop-item">
                                <div className="shop-img">
                                    <img src={ShopItem1}/>
                                </div>
                                <div className="item">
                                <h3 className="item-title">Эмблема для капота / багажника</h3>
                                <h4 className="item-subtitle">10 BYN</h4>
                                </div>
                            </div>
                        </div>
                        <div className="shop-inner">
                            <div className="shop-item">
                                <div className="shop-img">
                                    <img src={ShopItem1}/>
                                </div>
                                <div className="item">
                                    <h3 className="item-title">Эмблема для капота / багажника</h3>
                                    <h4 className="item-subtitle">10 BYN</h4>
                                </div>
                            </div>
                        </div>
                        <div className="shop-inner">
                            <div className="shop-item">
                                <div className="shop-img">
                                    <img src={ShopItem1}/>
                                </div>
                                    <div className="item">
                                        <h3 className="item-title">Эмблема для капота / багажника</h3>
                                        <h4 className="item-subtitle">10 BYN</h4>
                                    </div>
                            </div>
                        </div>
                        <div className="shop-inner">
                            <div className="shop-item">
                                <div className="shop-img">
                                    <img src={ShopItem1}/>
                                </div>
                                <div className="item">
                                <h3 className="item-title">Эмблема для капота / багажника</h3>
                                <h4 className="item-subtitle">10 BYN</h4>
                                </div>
                            </div>
                        </div>
                        <div className="shop-inner">
                            <div className="shop-item">
                                <div className="shop-img">
                                    <img src={ShopItem1}/>
                                </div>
                                <div className="item">
                                <h3 className="item-title">Эмблема для капота / багажника</h3>
                                <h4 className="item-subtitle">10 BYN</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </section>
    </div>
    );
};

export default Main;
