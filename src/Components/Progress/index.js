import React, { Component } from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar/ProgressBar';
import './Progress.css';

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            buffer: 10,
            message: 'Загрузка данных...'
        };
    }

    componentWillMount () {
        this.simulateProgress();
    }

    simulateProgress () {
        this.progressTimer = setTimeout(() => {
            if (this.state.progress < 100) {
                this.increaseProgress();
                if (this.state.progress > this.state.buffer) this.increaseBuffer();
            }
            if (this.state.progress < 100) {
                this.simulateProgress();
            } else {
                clearTimeout(this.progressTimer);
                this.props.setCompleteProgress();
            }
        }, (Math.random() * 1 + 1) * 800); // было 1300 норм
    }

    increaseProgress () {
        this.setState({
            progress: Math.random() * 20 + this.state.progress
        });

        if (this.state.progress > 17 && this.state.progress < 32) {
            this.setState({message: 'Агрегирование...'});
        }
        if (this.state.progress > 34 && this.state.progress < 48) {
            this.setState({message: 'Корреляция...'});
        }
        if (this.state.progress > 49 && this.state.progress < 73) {
            this.setState({message: 'Пропускаем через нейро-сети...'});
        }
        if (this.state.progress > 75) {
            this.setState({message: 'Подготовка отображения...'});
        }
    }

    increaseBuffer () {
        this.setState({
            buffer: Math.random() * (100 - this.state.progress) + this.state.progress
        });
    }
    render() {
        return (
            <div className="b-progress">
                <div className="b-progress__msg">{this.state.message}</div>
                <br/>
                <ProgressBar min={0} max={100} mode='determinate' value={this.state.progress} buffer={this.state.buffer}/>
            </div>

        );
    }
}

export default Progress;