import { useState, createRef, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from "../../ErrorDialog/ErrorComponent";

export function SignUp() {
	let navigate = useNavigate();

	const [user, setUser] = useState({
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		mobileNo: "",
	});

	const doSignUp = () => {
		alert("signup done");
	};
	return (
		<div style={{ width: "100vw", height: "100vh", justifyContent: "center" }}>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					maxWidth: "500px",
					justifyContent: "center",
				}}
			>
				<Form
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>First Name</Form.Label>
						<Form.Control
							type="text"
							value={user.firstName}
							onChange={(ev) => setUser(ev.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Last Name</Form.Label>
						<Form.Control
							type="text"
							value={user.lastName}
							onChange={(ev) => setUser(ev.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							value={user.email}
							placeholder="Enter email"
							onChange={(ev) => setUser(ev.target.value)}
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							value={user.password}
							placeholder="Password"
							onChange={(ev) => setUser(ev.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Mobile No</Form.Label>
						<Form.Control
							type="tel"
							value={user.mobileNo}
							onChange={(ev) => setUser(ev.target.value)}
						/>
						<Form.Text className="text-muted">10 digit mobile No</Form.Text>
					</Form.Group>

					<Button variant="primary" onClick={doSignUp}>
						Create Account
					</Button>
					<Button variant="link" onClick={() => navigate("/signin")}>
						Existing User? SignIn
					</Button>
				</Form>
				<ErrorComponent />
			</div>
		</div>
	);
}
