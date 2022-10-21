import { Component } from 'react';
import ClockDisplay from './ClockDisplay';
import style from './Timer.module.css';

class Timer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isTimerStarted: false,
			time: 0,
		};
	}

	handleStartTimer = () => {
		if (this.state.isTimerStarted) { // isTimerStarted est true => On veut arrêter le timer

			clearInterval(this.timerId);

			this.props.saveTime(this.state.time);

			this.setState({
				isTimerStarted: false,
				time: 0,
			});
		} else { // isTimerStarted est false => On veut démarrer le timer
			this.setState({
				isTimerStarted: true,
			});
			this.timerId = setInterval(() => {
				this.setState(({ time }) => {
					return {
						time: time + 1,
					};
				});
			}, 1000);
		}
	}

	render() {
		return (
			<>
				<ClockDisplay time={ this.state.time } className={ style['clock-timer'] } />
				<button className={ `${style['clock-btn']} ${style[`clock-btn-${ this.state.isTimerStarted ? 'stop' : 'start' }`]}` } onClick={ this.handleStartTimer }>{ this.state.isTimerStarted ? 'Stop' : 'Start' }</button>
			</>
		);
	}
}

export default Timer;