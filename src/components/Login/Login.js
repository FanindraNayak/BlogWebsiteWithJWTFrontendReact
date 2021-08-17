import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
	const handelChange = (e) => {
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
			// Changing Url after user is logged in
			console.log("kasdfjckldxnm");
			history.push("/");
			setLoggedIn(true);
		} else {
			setLoginData({
				email: "",
				password: "",
			});
		}
	};

	return (
		<div className="loginForm">
			<form className="form">
				<input
					className="email"
					type="text"
					value={loginData.email}
					name="email"
					onChange={handelChange}
					placeholder="Email"
				/>
				<br />
				<input
					className="password"
					type="Password"
					value={loginData.password}
					name="password"
					onChange={handelChange}
					placeholder="Password"
				/>
				<br />
				<button className="button" type="submit" onClick={onLoginClick}>
					Login
				</button>
				<p className="mt-2"></p>
			</form>
		</div>
	);
}

export default Login;
