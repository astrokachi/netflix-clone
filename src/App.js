import "./App.css";
import Login from "./Login";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Profile from "./Profile";
import "@stripe/stripe-js";

	
	

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userLogged) => {
			if (userLogged) {
				dispatch(
					login({
						uid: userLogged.uid,
						email: userLogged.email,
					})
				);
			} else {
				dispatch(logout());
			}
		});
		return unsubscribe;
	}, [dispatch]);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<Routes>
						<Route path="/profile" element={<Profile />} />
						<Route path="/" element={<HomeScreen />} />
					</Routes>
				)}
			</Router>
		</div>
	);
}

export default App;
