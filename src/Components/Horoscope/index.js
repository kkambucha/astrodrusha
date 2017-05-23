import React, { Component } from 'react';
import Slider from 'react-slick';
import HoroscopeItem from './HoroscopeItem';
import './Horoscope.css';

class Horoscope extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="b-horoscope">
                <Slider {...settings}>
                    {
                        this.props.data.map(item => {
                            return <div key={item.toString()}><HoroscopeItem item={item}></HoroscopeItem></div>
                        })
                    }
                </Slider>
            </div>
        );
    }
}

export default Horoscope;