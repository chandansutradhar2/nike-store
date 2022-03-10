import "./App.css";
import { Menubar } from "./Menubar/Menubar";
import { Header } from "./Header/Header";
function App() {
	const headerStyle = {
		display: "grid",
		gridTemplateColumns: "80% 20%",
		width: "100vw",
	};

	return (
		<>
			<Header />
			<Menubar />
		</>
	);
}

export default App;
