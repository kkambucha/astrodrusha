import React, { Component } from 'react';
import Slider from 'react-slick';
import HoroscopeItem from './HoroscopeItem';
import Dropdown from 'react-toolbox/lib/dropdown/Dropdown';
import getRuSignName from '../../libs/translateSigns';
import './Horoscope.css';

class Horoscope extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideSelected: 0
        };
        this.selectValues = [];
        for (let i = 0; i < props.signsNames.length; i++) {
            this.selectValues[i] = {
                value: i,
                label: getRuSignName(props.signsNames[i])
            };
        }
        console.log(this.selectValues);
    }

    slide(slideNumber) {
        this.setState({slideSelected: slideNumber}, () => {
            this.refs.slider.slickGoTo(this.state.slideSelected);
        });
    }

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
                <Dropdown
                    source={this.selectValues}
                    onChange={this.slide.bind(this)}
                    value={this.state.slideSelected}
                />
                <Slider ref='slider' {...settings}>
                    {
                        Object.keys(this.props.data).map((key, index) => {
                            return <div key={index.toString()}><HoroscopeItem enName={this.props.data[key].enName} ruName={this.props.data[key].ruName} text={this.props.data[key].text}></HoroscopeItem></div>
                        })
                    }
                </Slider>
            </div>
        );
    }
}

export default Horoscope;