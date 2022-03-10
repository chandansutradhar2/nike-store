import "./App.css";

function App() {
	const headerStyle = {
		display: "grid",
		gridTemplateColumns: "80% 20%",
		width: "100vw",
	};

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "80% 20%",
				width: "100vw",
			}}
		>
			<ul>
				<li>
					<a className="menu">Home</a>
				</li>
				<li>
					<a className="menu">Product</a>
				</li>
				<li>
					<a className="menu">About Us</a>
				</li>
			</ul>
			<div>
				<ul>
					<li>
						<a className="menu">Cart</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
