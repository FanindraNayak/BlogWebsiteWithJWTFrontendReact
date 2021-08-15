import React, { useState } from "react";
import axios from "axios";
import "./register.css";
function Register() {
	const [dataOfUser, setDataOfUser] = useState({
		firstName: "",
		midName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		userWork: "",
		imageData: "",
		userDescription: "",
	});

	const handelChange = (e) => {
		setDataOfUser({ ...dataOfUser, [e.target.name]: e.target.value });
	};
	const handelClick = async (e) => {
		e.preventDefault();
		// console.log("his");
		const url = `http://localhost:3012/api/user/register`;
		const res = await axios.post(url, dataOfUser);
		if (res.data === "User Created") {
			setDataOfUser({
				firstName: "",
				midName: "",
				lastName: "",
				email: "",
				password: "",
				confirmPassword: "",
				userWork: "",
				imageData: "",
				userDescription: "",
			});
		}
		console.log(res);
	};
	const labes = (name) => {
		return <label>{name}</label>;
	};

	return (
		<div style={{ marginTop: 30 }}>
			<form>
				{labes("First Name")}
				<input
					type="text"
					name="firstName"
					className="firstName"
					value={dataOfUser.firstName}
					onChange={handelChange}
				/>
				<br />
				<br />
				{labes("Mid Name")}
				<input
					type="text"
					value={dataOfUser.midName}
					name="midName"
					className="midName"
					onChange={handelChange}
				/>
				<br />
				<br />
				{labes("Last Name")}
				<input
					type="text"
					value={dataOfUser.lastName}
					name="lastName"
					className="lastName"
					onChange={handelChange}
				/>
				<br />
				<br />
				{labes("Email")}
				<input
					type="text"
					value={dataOfUser.email}
					name="email"
					className="email"
					onChange={handelChange}
				/>
				<br />
				<br />
				{labes("Password")}
				<input
					type="password"
					value={dataOfUser.password}
					name="password"
					className="password"
					onChange={handelChange}
				/>
				<br />
				<br />
				{labes("Confirm Password")}
				<input
					type="password"
					value={dataOfUser.confirmPassword}
					name="confirmPassword"
					className="confirmPassword"
					onChange={handelChange}
				/>
				<br />
				<br />
				{labes("User Work")}
				<input
					type="text"
					value={dataOfUser.userWork}
					name="userWork"
					className="userWork"
					onChange={handelChange}
				/>
				<br />
				<br />
				{labes("Image")}
				<input
					type="text"
					value={dataOfUser.imageData}
					name="imageData"
					className="imageData"
					onChange={handelChange}
				/>
				<br />
				<br />
				{labes("User Description")}
				<input
					type="text"
					value={dataOfUser.userDescription}
					name="userDescription"
					className="userDescription"
					onChange={handelChange}
				/>
				<br />
				<br />
				<br />
				<button colorScheme="teal" variant="outline" onClick={handelClick}>
					Registration
				</button>
			</form>
		</div>
	);
}

export default Register;
