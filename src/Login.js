import React, { useState } from "react";
import Signup from "./components/Signup";
import "./Login.css";

function Login() {
	const [signIn, setSignIn] = useState(false);
	const [registerUser, setRegisterUser] = useState(null);
	const [value, setValue] = useState('')

	return (
		<div className="login">
			<div className="login__background">
				<img
					className="login__logo"
					src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt=""
				/>
				<button
					className="login__button"
					onClick={() => {
						setSignIn(true);
						setRegisterUser(true);
					}}
				>
					Sign In
				</button>
			</div>
			<div
				className="login__body"
				style={signIn ? { top: "20%" } : { top: "30%" }}
			>
				{signIn ? (
					<Signup
						registerUser={registerUser}
						setRegisterUser={setRegisterUser}
						value={value}
						setValue={setValue}
					/>
				) : (
					<>
						<h1>Unlimited films, TV programmes and more.</h1>
						<h2>Watch anywhere. Cancel at any time.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>

						<div className="login__input">
							<form>
								<input type="email" placeholder="Email holder" value={value} onChange={(e) => setValue(e.target.value)} />
								<button
									className="login__getStarted"
									onClick={() => {
										setSignIn(true);
										
									}}
								>
									GET STARTED
								</button>
							</form>
						</div>
					</>
				)}
			</div>
			<div className="login--gradient" />
		</div>
	);
}

export default Login;
