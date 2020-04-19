import React, { Component } from "react";
interface IProps {
	value: string;
	onChange: (value: string) => void;
}

export default class NpmInput extends Component<IProps> {
	handleChange=(e: any): void=> {
		this.props.onChange(e.target.value);
	}

	render() {
		return (
			<input
				onChange={(e) => this.handleChange(e)}
				value={this.props.value}
			/>
		);
	}
}
