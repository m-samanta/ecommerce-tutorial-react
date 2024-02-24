import React from 'react';
import Banner1Img from "../assets/banner-1.jpg"

const Banner1 = () => {
    return (
        <section id="banner1">
            <div className="container">
                <div className="row">
                    <div className="banner">
                        <div className="banner__text">
                            <h2 className="banner__text__title">
                                Creative harmonious living
                            </h2>
                            <p className="banner__text__paragraph">
                            RAOUF Products are all made to standard sizes so that you can
                mix and match them freely.
                            </p>
                            <a href="/products" className="banner__text__btn">
                                Shop Now
                            </a>
                        </div>
                        <img src={Banner1Img} alt="" className="banner__img" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner1;
