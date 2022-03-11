import "./App.css";
import { Menubar } from "./Menubar/Menubar";
import { Header } from "./Header/Header";
import { SignIn } from "./Auth/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { SignUp } from "./Auth/SignUp/Signup";
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
			<BrowserRouter>
				<Header isLoggedIn={false} onSignInEvent={signInHandler} />
				<Menubar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="signup" element={<SignUp />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
