import React, { Component } from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';

class HoroscopeItem extends Component {
    render() {
        return (
        <div className="b-horoscope__item">
            <Card style={{width: '350px', margin: '0 auto'}}>
                <CardTitle
                    title={this.props.ruName}
                    subtitle={this.props.enName}
                />
                <CardMedia
                    aspectRatio="wide"
                    image="http://placekitten.com/g/400/200"
                />
                <CardText>{this.props.text}</CardText>
            </Card>
        </div>
        );
    }
}

export default HoroscopeItem;