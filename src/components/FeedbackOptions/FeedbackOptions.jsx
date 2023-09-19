import React, { Component } from 'react';
import { nanoid } from "nanoid";
import  styles  from "./FeedbackOptions.module.css";;

export default class FeedbackOptions extends Component {
	randomId = nanoid();
	render() {
		return (
			<div key={this.randomId}
			style={{
				display: 'flex',
				justifyContent: 'center',
				gap: '10px',
				padding: '20px'
			}}>
				{this.props.options.map((option) => (
					<button key={this.randomId} className={styles.button} onClick={() => this.props.onLeaveFeedback(option)}>
						{option}
					</button>
				))}
			</div>
		);
	}
}