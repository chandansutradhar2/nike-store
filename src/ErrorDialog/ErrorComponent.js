import React from "react";

export class ErrorComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errorMsg: "",
			errorControl: "",
			lineNo: "",
			errorColor: "",
		};
	}

	setError(error) {
		this.setState({
			errorMsg: error.msg,
			errorControl: error.control,
			lineNo: error.lineNo,
			errorColor: error.Color,
		});
	}

	render() {
		return (
			<>
				<p>{this.state.errorMsg}</p>
			</>
		);
	}
}
