import React, { Component } from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import AquariusImg from '../../assets/img/aquarius.jpg';
import AriesImg from '../../assets/img/aries.jpg';
import CancerImg from '../../assets/img/cancer.jpg';
import CapricornImg from '../../assets/img/capricorn.jpg';
import GeminiImg from '../../assets/img/gemini.jpg';
import LeoImg from '../../assets/img/leo.jpg';
import LibraImg from '../../assets/img/libra.jpg';
import PiscesImg from '../../assets/img/pisces.jpg';
import SagittariusImg from '../../assets/img/sagittarius.jpg';
import ScorpioImg from '../../assets/img/scorpio.jpg';
import TaurusImg from '../../assets/img/taurus.jpg';
import VirgoImg from '../../assets/img/virgo.jpg';
import './Horoscope.css';

class HoroscopeItem extends Component {
    constructor(props) {
        super(props);
        switch(this.props.enName) {
            case 'aries':
                this.image = AriesImg;
                break;
            case 'taurus':
                this.image = TaurusImg;
                break;
            case 'gemini':
                this.image = GeminiImg;
                break;
            case 'cancer':
                this.image = CancerImg;
                break;
            case 'leo':
                this.image = LeoImg;
                break;
            case 'virgo':
                this.image = VirgoImg;
                break;
            case 'libra':
                this.image = LibraImg;
                break;
            case 'scorpio':
                this.image = ScorpioImg;
                break;
            case 'sagittarius':
                this.image = SagittariusImg;
                break;
            case 'capricorn':
                this.image = CapricornImg;
                break;
            case 'aquarius':
                this.image = AquariusImg;
                break;
            case 'pisces':
                this.image = PiscesImg;
                break;
            default:
                this.image = AriesImg;
                break;
        }
    }
    render() {
        return (
        <div className="b-horoscope__item">
            <Card style={{width: '350px', margin: '0 auto'}}>
                <CardTitle
                    title={this.props.ruName}
                    subtitle={this.props.enName}
                />
                <CardMedia
                    aspectRatio="square"
                    image={this.image}
                    className="b-horoscope__image"
                />
                <CardText>{this.props.text}</CardText>
            </Card>
        </div>
        );
    }
}

export default HoroscopeItem;