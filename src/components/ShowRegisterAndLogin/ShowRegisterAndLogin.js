import React, { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";

const ShowRegisterAndLogin = () => {
	const [show, setShow] = useState(0);
	return (
		<div
			style={{
				marginLeft: "20vw",
				marginTop: "6vh",
				// border: "red solid 5px",
				backgroundColor: "rgb(242, 239, 230)",
				paddingTop: "4vh",
				height: "90vh",
				borderRadius: "10%",
				width: "50vw",
			}}
		>
			<button
				style={{
					border: "none",
					backgroundColor: "transparent",
					padding: 10,
					marginLeft: "15vw",
					fontSize: 30,
					fontWeight: 800,
					marginBottom: 10,
					// width: 50,
					// borderWidth: show === 0 ? "0px 0px 5px 0px" : "0px 0px 0px 0px",
				}}
				onClick={() => setShow(0)}
			>
				Login
				<div
					style={{
						// border: "red solid 2px",
						backgroundColor: "red",
						width: show === 0 ? "100%" : "40%",
						marginLeft: show === 0 ? 0 : "30%",
						height: 5,
						marginTop: 10,
					}}
				></div>
			</button>
			<button
				style={{
					border: "none",
					backgroundColor: "transparent",
					padding: 10,
					marginLeft: "5vw",
					fontSize: 30,
					fontWeight: 800,
					marginBottom: 10,
					// borderWidth: show === 0 ? "0px 0px 0px 0px" : "0px 0px 5px 0px",
				}}
				onClick={() => setShow(1)}
			>
				Register
				<div
					style={{
						// border: "red solid 2px",
						backgroundColor: "red",
						width: show === 0 ? "40%" : "100%",
						marginLeft: show === 0 ? "30%" : 0,
						height: 5,
						marginTop: 10,
					}}
				></div>
			</button>
			{show === 0 ? <Login /> : <Register />}
		</div>
	);
};

export default ShowRegisterAndLogin;
