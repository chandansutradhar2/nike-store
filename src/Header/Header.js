import React, { useState } from "react";
import "./Header.css";

export function Header() {
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

				<li
					onClick={() => {
						navigateTo("signin");
					}}
				>
					<a>Sign In</a>
				</li>
			</ul>
		</div>
	);

	//return renderUI();
}
