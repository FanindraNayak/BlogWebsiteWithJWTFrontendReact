import React from "react";
import { useUserData } from "../../GlobalState";
import abc from "../../Images/abc.png";
const UserInfo = () => {
	const userData = useUserData((state) => state.userData);
	let name = userData.firstName + userData.midName + userData.lastName;
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
		</div>
	);
};

export default UserInfo;
