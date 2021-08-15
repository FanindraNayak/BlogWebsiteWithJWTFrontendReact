import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUserEmailStore } from "../../GlobalState";
const UserInfo = () => {
	const emailOfUser = useUserEmailStore((state) => state.emailOfUser);
	const [userInfo, setUserInfo] = useState({});
	useEffect(() => {
		getUserInformation();
	}, []);
	const getUserInformation = async () => {
		const url = `http://localhost:3012/api/user/getOneUser/${emailOfUser}`;
		const res = await axios.get(url, {
			withCredentials: true,
		});
		console.log(res);
	};
	return (
		<div>
			<h1>userInfo</h1>
		</div>
	);
};

export default UserInfo;
