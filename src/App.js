import "./App.css";
import { Menubar } from "./Menubar/Menubar";
import { Header } from "./Header/Header";
import { SignIn } from "./Auth/SignIn/SignIn";
function App() {
	let show = false;
	const headerStyle = {
		display: "grid",
		gridTemplateColumns: "80% 20%",
		width: "100vw",
	};

	const signOutHandler = () => {
		alert("signout event recieved");
	};

	const signInHandler = (data) => {
		alert("signIN event recieved" + data);
		show = true;
	};

	return (
		<>
			<Header isLoggedIn={false} onSignInEvent={signInHandler} />
			<Menubar />
			{show ? <SignIn /> : null}
		</>
	);
}

export default App;
