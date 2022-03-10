import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export function Header(props) {
	console.log(props);

	const navigateTo = (routeUrl) => {
		alert(routeUrl + " event recieved");
		console.log(routeUrl);
	};

	return (
		<div style={{ display: "flex", justifyItems: "end", width: "100vw" }}>
			<ul>
				<li onClick={() => navigateTo("nikeglobal.com/troubeticket-center")}>
					<a>Help</a>
				</li>
				<li
					onClick={() => {
						navigateTo("nikeclone.com/career");
						console.log("Join us clicked");
					}}
				>
					<a>Join Us</a>
				</li>

				{props.isLoggedIn ? (
					<li
						onClick={() => {
							navigateTo("signout");
						}}
					>
						<a>Sign Out</a>
					</li>
				) : (
					<li>
						<Link to="/signin">SignIn</Link>
					</li>
				)}
			</ul>
		</div>
	);

	//return renderUI();
}
