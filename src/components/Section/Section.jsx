import React, { Component } from 'react';
import { nanoid } from "nanoid";

export default class Section extends Component {
	randomId = nanoid();
	render() {
		return (
			<div key={this.ramdomId}>
				<h2 key={this.ramdomId}>{this.props.title}</h2>
				{this.props.children}
			</div>
		);
	}
}