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
	console.table("hi", dataOfUser);
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
			});
		}
		console.log(res);
	};
	// File One
	const uploadImage = async (e) => {
		const file = e.target.files[0];
		const base64Data = await convertToBase64(file);
		// console.log(base64Data);
		setDataOfUser({ ...dataOfUser, imageData: base64Data });
	};
	const convertToBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};
	return (
		<div style={{ marginTop: 30 }}>
			<form className="RegisterForm">
				<input
					type="text"
					name="firstName"
					className="firstName"
					value={dataOfUser.firstName}
					onChange={handelChange}
					placeholder="First name"
				/>
				<input
					type="text"
					name="lastName"
					className="lastName"
					value={dataOfUser.lastName}
					onChange={handelChange}
					placeholder="Last Name"
				/>
				<br />
				<input
					type="text"
					name="email"
					className="emailRegister"
					value={dataOfUser.email}
					onChange={handelChange}
					placeholder="Email"
				/>
				<br />
				<input
					type="password"
					name="password"
					className="password"
					value={dataOfUser.password}
					onChange={handelChange}
					placeholder="Password"
				/>
				<br />
				<input
					type="password"
					name="confirmPassword"
					className="confirmPassword"
					value={dataOfUser.confirmPassword}
					onChange={handelChange}
					placeholder="Confirm Password"
				/>
				<br />
				<input
					type="text"
					name="userWork"
					className="userWork"
					value={dataOfUser.userWork}
					onChange={handelChange}
					placeholder="User Work"
				/>
				<br />
				<input
					type="file"
					onChange={(e) => uploadImage(e)}
					className="fileInput"
				/>
				<br />
				<button onClick={handelClick} type="submit" className="buttons">
					Register
				</button>
			</form>
		</div>
	);
}

export default Register;
