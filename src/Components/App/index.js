import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import TopMenu from '../TopMenu';
import Horoscope from '../Horoscope';
import Progress from '../Progress';
import fetcher from '../../fetcher';
import '../../assets/react-toolbox/theme.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            horoscopeIsActive: false,
            progresIsStarting: false,
            isLoaded: false,
            dataFetched: false,
            data: {}
        };
        this.actions = [
            { label: "Готов", onClick: this.handleToggle.bind(this) }
        ];
        this.data = {};
        this.signs = [
            'aries',
            'taurus',
            'gemini',
            'cancer',
            'leo',
            'virgo',
            'libra',
            'scorpio',
            'sagittarius',
            'capricorn',
            'aquarius',
            'pisces'
        ];
        this.getHoroscope().then(this.getTranslate.bind(this));
    }
    handleToggle() {
        this.setState({progresIsStarting: true});
    }
    setCompleteProgress() {
        this.setState({isLoaded: true});
        this.setState({horoscopeIsActive: true});
    }
    getHoroscope() {
        let dataPromises = [];

        for (let i = 0; i < this.signs.length; i++) {
            dataPromises.push(fetcher.getData(`http://sandipbgt.com/theastrologer/api/horoscope/${this.signs[i]}/today/`));
        }

        return Promise.all(dataPromises);
    }
    getTranslate(data) {
        let promises = [];

        for (let i = 0; i < data.length; i++) {
            (function(sign, i) {
                promises[i] = fetcher.getData(`http://www.transltr.org/api/translate?text=${data[i].horoscope}&to=ru&from=bs`)
                    .then((data) => {
                        this.data[sign] = {
                            text: data.translationText,
                            ruName: this.getRuSignName(sign),
                            enName: sign.toLowerCase()
                        };
                    });
            }.bind(this))(data[i].sunsign, i);
        }

        Promise.all(promises).then(() => {
            this.setState({data: this.orderedSigns(this.data)});
            this.setState({dataFetched: true});
        });
    }
    getRuSignName(name) {
        let sign = name.toLowerCase();

        switch(sign) {
            case 'aries':
                return 'Овен';
                break;
            case 'taurus':
                return 'Телец';
                break;
            case 'gemini':
                return 'Близнецы';
                break;
            case 'cancer':
                return 'Рак';
                break;
            case 'leo':
                return 'Лев';
                break;
            case 'virgo':
                return 'Дева';
                break;
            case 'libra':
                return 'Весы';
                break;
            case 'scorpio':
                return 'Скорпион';
                break;
            case 'sagittarius':
                return 'Стрелец';
                break;
            case 'capricorn':
                return 'Козерог';
                break;
            case 'aquarius':
                return 'Водолей';
                break;
            case 'pisces':
                return 'Рыбы';
                break;
            default:
                return 'Неизвестный';
                break;
        }
    }
    orderedSigns(data){
        let orderedSigns = [];

        Object.keys(data).map((key, index) => {
            for(let i = 0; i < this.signs.length; i++) {
                if (data[key].enName === this.signs[i]) {
                    orderedSigns[i] = data[key];
                }
            }
        });

        return orderedSigns;
    }
    render() {
        return (
            <div className="App">
                <AppBar title='АстроДрюша'>
                    <TopMenu/>
                </AppBar>
                {this.state.dataFetched && this.state.horoscopeIsActive ? <Horoscope data={this.state.data}/> : null}
                {this.state.progresIsStarting && !this.state.isLoaded ? <Progress setCompleteProgress={this.setCompleteProgress.bind(this)}/> : null}
                <Dialog
                    actions={this.actions}
                    active={!this.state.progresIsStarting}
                    onEscKeyDown={this.handleToggle.bind(this)}
                    onOverlayClick={this.handleToggle.bind(this)}
                    title='Подумайте, надо ли...'
                >
                    <p>Вы точно готовы узнать, что вас ждет сегодня?</p>
                </Dialog>
            </div>
        );
    }
}

export default App;
