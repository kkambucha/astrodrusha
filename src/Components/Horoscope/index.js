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
                        Object.keys(this.props.data).map((key, index) => {
                            console.log(key);
                            console.log(this.props.data[key]);
                            return <div key={index.toString()}><HoroscopeItem enName={this.props.data[key].enName} ruName={this.props.data[key].ruName} text={this.props.data[key].text}></HoroscopeItem></div>
                        })
                    }
                </Slider>
            </div>
        );
    }
}

export default Horoscope;