import React, { useState } from "react";
import "./Header.css";

export function Header() {
	return (
		<div style={{ display: "flex", justifyItems: "end", width: "100vw" }}>
			<ul>
				<li>
					<a>Help</a>
				</li>

				<li>
					<a>Join Us</a>
				</li>

				<li>
					<a>Sign In</a>
				</li>
			</ul>
		</div>
	);
	//return renderUI();
}
