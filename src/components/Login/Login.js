import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { loggedInStore } from "../../GlobalState";

function Login() {
	// axios.defaults.withCredentials = true;
	const setLoggedIn = loggedInStore((state) => state.setLoggedIn);
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});
	const onChange = (e) => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	};

	const history = useHistory();

	const onLoginClick = async (e) => {
		e.preventDefault();
		const url = `http://localhost:3012/api/user/login`;
		const res = await axios.post(url, loginData, {
			withCredentials: true,
		});
		if (res.data === "Logged In") {
			setLoggedIn(true);
			// Changing Url after user is logged in
			history.push("/");
		}
	};

	return (
		<div className="loginForm">
			<h1>Login</h1>
			<form>
				<div className="group">
					<input
						type="text"
						name="email"
						placeholder="Enter user email"
						value={loginData.email}
						onChange={onChange}
					/>
				</div>

				<div className="group">
					<input
						type="password"
						name="password"
						placeholder="Enter password"
						value={loginData.password}
						onChange={onChange}
					/>
				</div>
			</form>
			<button onClick={onLoginClick}>Login</button>
			<p className="mt-2">
				Don't have account? <Link to="/signup">Signup</Link>
			</p>
		</div>
	);
}

export default Login;
