import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export function SignIn() {
	let navigate = useNavigate();

	const doLogin = () => {
		//todo login process
		navigate("/");
	};
	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Remember Me" />
			</Form.Group>
			<Button variant="primary" onClick={doLogin}>
				Login
			</Button>
		</Form>
	);
}
