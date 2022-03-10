import "./App.css";
import { Menubar } from "./Menubar/Menubar";
import { Header } from "./Header/Header";
import { SignIn } from "./Auth/SignIn/SignIn";
function App() {
	const headerStyle = {
		display: "grid",
		gridTemplateColumns: "80% 20%",
		width: "100vw",
	};

	return (
		<>
			<Header
				isLoggedIn={false}
				showHelpLink={true}
				supportUrl={"http://nike.com/support"}
			/>
			<Menubar />
			<SignIn />
		</>
	);
}

export default App;
