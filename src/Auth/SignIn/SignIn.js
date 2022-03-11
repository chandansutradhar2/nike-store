import { useState, createRef, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from "../../ErrorDialog/ErrorComponent";
import axios from "axios";
import { envConfig } from "../../Utlity/env.config";

export function SignIn() {
	const remeberMe = useRef(false);
	const [email, setEmail] = useState("enter email");
	const [password, setPassword] = useState("");

	let navigate = useNavigate();

	console.log("SignIn Function loaded");
	const doLogin = () => {
		//todo login process
		if (email.length > 0 && password.length > 0) {
			axios
				.post(envConfig.apiUrl + "user/authenticate", {
					email: email,
					password: password,
				})
				.then((res) => {
					alert("login success");
				})
				.catch((err) => {
					alert("login error");
				});
		} else {
			console.log("enter email/password");
		}
	};

	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						value={email}
						placeholder="Enter email"
						onChange={(ev) => setEmail(ev.target.value)}
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						value={password}
						placeholder="Password"
						onChange={(ev) => setPassword(ev.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Remember Me" ref={remeberMe} />
				</Form.Group>
				<Button variant="primary" onClick={doLogin}>
					Login
				</Button>
				<Button variant="link" onClick={() => navigate("/signup")}>
					New User? SignUp
				</Button>
			</Form>
			<ErrorComponent />
		</div>
	);
}
