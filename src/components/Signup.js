import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./Signup.css";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

function Signup({ registerUser, setRegisterUser, value, setValue }) {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const [error, setError] = useState(null);
	const [signError, setSignError] = useState(null);

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
			setError(true);
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
			setSignError(true);
			console.log(error);
		}
	}

	return (
		<div className="signup">
			{registerUser ? (
				<form className="signup__form">
					<h1 className="signup__text">Sign In</h1>
					<input
						ref={emailRef}
						type="email"
						placeholder="Email"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<input ref={passwordRef} placeholder="Password" type="password" />
					<button type="submit" onClick={signIn}>
						Sign In
					</button>
					{signError ? <h6>You've inputed an invalid email/password</h6> : null}
					<h4>
						<span className="signup__grey">New to Netflix? </span>

						<span
							className="signup__link"
							onClick={() => setRegisterUser(false)}
						>
							Sign up now.
						</span>
					</h4>
				</form>
			) : (
				<form className="signup__form">
					<h1 className="signup__text">Sign Up</h1>
					<input
						ref={emailRef}
						type="email"
						placeholder="Email"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<input ref={passwordRef} placeholder="Password" type="password" />
					<button
						type="submit"
						onSubmit={() => setRegisterUser(true)}
						onClick={register}
					>
						Sign Up
					</button>
					{error ? (
						<h6>
							This email is already registered or you've inputed an invalid
							email/password
						</h6>
					) : null}
					<h4>
						<span className="signup__grey">Already have an account? </span>

						<span
							className="signup__link"
							onClick={() => setRegisterUser(true)}
						>
							Sign in.
						</span>
					</h4>
				</form>
			)}
		</div>
	);
}

export default Signup;
