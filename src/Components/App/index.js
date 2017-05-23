import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import TopMenu from '../TopMenu';
import Horoscope from '../Horoscope';
import Progress from '../Progress';
import '../../assets/react-toolbox/theme.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            horoscopeIsActive: false,
            progresIsStarting: false,
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            isLoaded: false,
            data: []
        };
        this.actions = [
            { label: "Готов", onClick: this.handleToggle.bind(this) }
        ];
    }
    handleToggle() {
        this.setState({progresIsStarting: true});
    }
    setCompleteProgress() {
        this.setState({isLoaded: true});
        this.setState({horoscopeIsActive: true});
        this.setState({data: [1,2,3,4,5,6,7]});
    }
    render() {
        return (
            <div className="App">
                <AppBar title='АстроДрюша'>
                    <TopMenu/>
                </AppBar>
                {this.state.data.length && this.state.horoscopeIsActive ? <Horoscope data={this.state.data}/> : null}
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
