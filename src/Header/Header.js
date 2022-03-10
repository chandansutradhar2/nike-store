import React, { useState } from "react";
import { SignIn } from "../Auth/SignIn/SignIn";
import { Button } from "react-bootstrap";

export function Header() {
	const headerStyle = {
		backgroundColor: "gray",
	};

	const isAdmin = false;

	const navigateTo = () => {};

	// const renderUI = () => {
	// 	if (isAdmin) {
	// 		return <h2 style={headerStyle}>Admin Header</h2>;
	// 	} else {
	// 		return <h2 style={headerStyle}>Guest Header</h2>;
	// 	}
	// };

	//interpolation for method calls as well as passing data to JSX
	return (
		<div className="demo">
			<Button variant="primary">SignIn</Button>
		</div>
	);
	//return renderUI();
}
