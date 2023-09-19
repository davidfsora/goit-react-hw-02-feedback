import React, { Component } from 'react';

import Section from "./Section/Section.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Statistics/Statistics.jsx";
import Notification from "./Notification/Notification.jsx";
export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	handleFeedback = (type) => {
		this.setState((prevState) => ({
			[type]: prevState[type] + 1,
		}));
	};

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	};

	countPositiveFeedbackPercentage = () => {
		const totalFeedback = this.countTotalFeedback();
		if (totalFeedback === 0) return 0;
		return Math.round((this.state.good / totalFeedback) * 100);
	};

	render() {
		
		const totalFeedback = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();

		return (
			<div
				style={{
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: 40,
					color: '#010101',
					padding: '20px',
					backgroundColor: '#fff'
				}}
			>
				<Section
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						gap: '20px',
						padding: '20px'
					}}
					title="Please leave feedback">
						<FeedbackOptions
							options={['good', 'neutral', 'bad']}
							onLeaveFeedback={this.handleFeedback}
						/>

						{totalFeedback > 0 ? (
							<Statistics
								title="Statistics"	
								good={this.state.good}
								neutral={this.state.neutral}
								bad={this.state.bad}
								total={totalFeedback}
								positivePercentage={positivePercentage}
							/>
						) : (
							<Notification
								title="Statistics"
								message="There is no feedback" />
						)}
				</Section>
			</div>
		);
	};
};
