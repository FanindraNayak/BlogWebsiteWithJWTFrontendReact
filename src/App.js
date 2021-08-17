import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLoadingStore, useUserData, loggedInStore } from "./GlobalState";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import UserInfo from "./components/UserInfo/UserInfo";
import UserPosts from "./components/UserPosts/UserPosts";
import IndividualPosts from "./components/IndividualPosts/IndividualPosts";
import CreateAPost from "./components/CreateAPost/CreateAPost";
import ShowRegisterAndLogin from "./components/ShowRegisterAndLogin/ShowRegisterAndLogin";

function App() {
	const loggedIn = loggedInStore((state) => state.loggedIn);
	const setLoggedIn = loggedInStore((state) => state.setLoggedIn);
	const loading = useLoadingStore((state) => state.loading);
	const setLoading = useLoadingStore((state) => state.setLoading);
	const setUserData = useUserData((state) => state.setUserData);
	useEffect(() => {
		userLoginOrNot();
	}, []);
	const userLoginOrNot = async () => {
		setLoading(true);
		const url = `http://localhost:3012/api/user/getCurrentUser`;
		const res = await axios.get(url, {
			withCredentials: true,
		});
		if (res.data.message === "present") {
			getUserInformation(res.data.email);
			setLoading(false);
			setLoggedIn(true);
		} else {
			setLoading(false);
			setLoggedIn(false);
		}
	};

	const getUserInformation = async (emailOfUser) => {
		const url = `http://localhost:3012/api/user/getOneUser/${emailOfUser}`;
		const res = await axios.get(url, {
			withCredentials: true,
		});
		setUserData(res.data);
	};
	const main = () => {
		if (loggedIn === false) {
			return (
				<Router>
					<Switch>
						<Route exact path="/">
							<ShowRegisterAndLogin />
						</Route>
					</Switch>
				</Router>
			);
		} else {
			return (
				<Router>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about/me">
							<UserInfo />
						</Route>
						<Route exact path="/user/posts">
							<UserPosts />
						</Route>
						<Route exact path="/posts/IndividualPost/:id">
							<IndividualPosts />
						</Route>
						<Route exact path="/user/create/post">
							<CreateAPost />
						</Route>
					</Switch>
				</Router>
			);
		}
	};
	return (
		<div className="App">{loading === true ? <h1>loading</h1> : main()}</div>
	);
}

export default App;
