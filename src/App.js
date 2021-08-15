import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
	loggedInStore,
	useLoadingStore,
	useUserEmailStore,
} from "./GlobalState";
import { useEffect } from "react";
import axios from "axios";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import UserInfo from "./components/UserInfo/UserInfo";

function App() {
	const loggedIn = loggedInStore((state) => state.loggedIn);
	const setLoggedIn = loggedInStore((state) => state.setLoggedIn);
	const loading = useLoadingStore((state) => state.loading);
	const setLoading = useLoadingStore((state) => state.setLoading);
	const setEmailOfUser = useUserEmailStore((state) => state.setEmailOfUser);
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
			setEmailOfUser(res.data.email);
			setLoading(false);
			setLoggedIn(true);
		} else {
			setLoading(false);
			setLoggedIn(false);
		}
	};

	const main = () => {
		if (loggedIn === false) {
			return (
				<Router>
					<Switch>
						<Route exact path="/">
							<Register />
							<Login />
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
