import React from "react";

export class Search extends React.Component {
	constructor() {
		super();

		console.log("search constructor invoked");
	}
	componentDidMount() {
		console.log("search mounted into DOM");
	}

	componentDidUpdate() {
		console.log("search updated");
	}

	componentWillUnmount() {
		console.log("search unmounted");
	}

	render() {
		return <h4>Search Box </h4>;
	}
}
