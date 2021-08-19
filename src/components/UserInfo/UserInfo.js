import React from "react";
import { useUserData } from "../../GlobalState";
import abc from "../../Images/abc.png";
import axios from "axios";
import { useHistory } from "react-router";
import { loggedInStore } from "../../GlobalState";
const UserInfo = () => {
	const setLoggedIn = loggedInStore((state) => state.setLoggedIn);
	const userData = useUserData((state) => state.userData);
	let name = userData.firstName + userData.midName + userData.lastName;
	const history = useHistory();
	const logout = async () => {
		const url = `http://localhost:3012/api/user/logout`;
		const res = await axios.get(url, {
			withCredentials: true,
		});
		if (res.data === "loggedOut") {
			history.push("/");
			setLoggedIn(false);
		}
	};
	return (
		<div>
			<section
				style={{
					// border: "red solid 5px",
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
				}}
			>
				<div
					style={{
						width: "10vw",
						marginLeft: "30vw",
						marginTop: "10vh",
					}}
				>
					<img
						src={userData.imageData === "" ? abc : userData.imageData}
						style={{
							width: "200px",
							borderRadius: "50%",
							height: "200px",
							padding: 5,
							border: "red solid 3px",
						}}
						alt={name}
					/>
				</div>
				<div
					style={{
						// border: "red solid 3px",
						marginTop: "12vh",
						marginLeft: "-5vw",
						fontSize: 20,
					}}
				>
					<p>Name :- {name} </p>
					<p>Email :- {userData.email}</p>
					<p>Info :- {userData.userDescription}</p>
					<p>Work :- {userData.userWork}</p>
				</div>
			</section>
			<button onClick={logout}>Logout</button>
		</div>
	);
};

export default UserInfo;
