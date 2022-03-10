import React, { useState } from "react";
import "./Header.css";

export function Header() {
	const navigateTo = (ev) => {
		alert("clicked event recieved");
		console.log(ev);
	};

	return (
		<div style={{ display: "flex", justifyItems: "end", width: "100vw" }}>
			<ul>
				<li onClick={navigateTo}>
					<a>Help</a>
				</li>

				<li onClick={navigateTo}>
					<a>Join Us</a>
				</li>

				<li onClick={navigateTo}>
					<a>Sign In</a>
				</li>
			</ul>
		</div>
	);
	//return renderUI();
}
