import React, { useRef } from "react";
import { auth } from "../firebase";
import "./Signup.css";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

function Signup() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	async function register(e) {
		e.preventDefault();
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				emailRef.current.value,
				passwordRef.current.value
			);
			console.log(user);
		} catch (error) {
			console.log(error);
		}
	}

	async function signIn(e) {
		e.preventDefault();

		try {
			const user = await signInWithEmailAndPassword(
				auth,
				emailRef.current.value,
				passwordRef.current.value
			);
			console.log(user);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="signup">
			<form className="signup__form">
				<h1 className="signup__text">Sign In</h1>
				<input ref={emailRef} type="email" placeholder="Email" />
				<input ref={passwordRef} placeholder="Password" type="password" />
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<h4>
					<span className="signup__grey">New to Netflix? </span>
					<span className="signup__link" onClick={register}>
						Sign up now.
					</span>
				</h4>
			</form>
		</div>
	);
}

export default Signup;
