import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
	const [show, handleShow] = useState();

	const transitionNavbar = () => {
		if (window.scrollY > 100) handleShow(true);
		else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavbar);
		return () => window.removeEventListener("scroll", transitionNavbar);
	}, []);

	return (
		<div className={show ? "nav nav__black" : "nav"}>
			<div className="nav__contents">
				<Link to={"/"}>
					<img
						src="http://pngimg.com/uploads/netflix/netflix_PNG11.png"
						className="nav__logo"
						alt=""
					/>
				</Link>
				<Link to={"/profile"}>
					<img
						src="https://spng.pngfind.com/pngs/s/16-168465_aws-simple-icons-non-service-specific-user-default.png"
						alt=""
						className="nav__avatar"
				
					/>
				</Link>
			</div>
		</div>
	);
}

export default Nav;
