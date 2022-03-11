import axios from "axios";
import { envConfig } from "../Utlity/env.config";

export function Home() {
	const token = localStorage.getItem("token");
	if (token) {
		axios
			.get(envConfig.apiUrl + "product/getAllProduct", {
				headers: {
					token: token,
				},
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return <h2>Home Component</h2>;
}
