import React, { useState } from "react";
import { useSelector } from "react-redux";
import Nav from "./components/Nav";
import { selectUser } from "./features/counter/userSlice";
import { auth } from "./firebase";
import "./Profile.css";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TabletMacOutlinedIcon from "@mui/icons-material/TabletMacOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import { loadStripe } from "@stripe/stripe-js";

function Profile() {
	const user = useSelector(selectUser);
	const [mobilehover, setMobileHover] = useState(false);
	const [basichover, setBasicHover] = useState(false);
	const [standardhover, setStandardHover] = useState(false);
	const [premiumhover, setPremiumHover] = useState(false);
	const [stripeError, setStripeError] = useState(null);

	const getStripe = async () => {
		const stripePromise = await loadStripe(
			process.env.REACT_APP_STRIPE_KEY ||
				"pk_test_51KggMGEactHv9QZFmZc7PkTwPLTU7jk7txvrjsnQiOVCyHLo3Cz5w2mFuKf78SspuqtUs304mgoCRXI1cGQW2x5B0002ZtppQA"
		);
		return stripePromise;
	};

	const items = [
		{
			price: "price_1KggX3EactHv9QZFhnqyR9pj",
			quantity: 1,
		},
		{
			price: "price_1KggWPEactHv9QZFxTVza54X",
			quantity: 1,
		},
		{
			price: "price_1KggVVEactHv9QZF6UFt3qCJ",
			quantity: 1,
		},
		{
			price: "price_1KggUQEactHv9QZFHDm5SUoR",
			quantity: 1,
		},
	];

	const checkOutOptions = {
		lineItems: [...items],
		mode: "subscription",
		successUrl: `${window.location.origin}/`,
		cancelUrl: `${window.location.origin}/`,
	};

	const redirectToCheckOut = async () => {
		const stripe = await getStripe();
		const { error } = await stripe.redirectToCheckout(checkOutOptions);
		console.log("stripe checkout error", error);
		if (error) setStripeError(error.message);
	};

	if (stripeError) alert(stripeError);

	return (
		<div className="profile">
			<Nav />
			<div className="profile--line" />
			<div className="profile__topBlock">
				<h3>STEP 1 OF 2</h3>
				<h1>Choose a plan that's right for you</h1>
				<div className="profile__innerBlock">
					<div className="profile__innerBlockItems">
						<CheckRoundedIcon
							className="profile__check"
							sx={{ color: "#e50914" }}
						/>
						<p>Watch all you want. Ad-free.</p>
					</div>
					<div className="profile__innerBlockItems">
						<CheckRoundedIcon
							className="profile__check"
							sx={{ color: "#e50914" }}
						/>
						<p>Recommendations for you.</p>
					</div>
					<div className="profile__innerBlockItems">
						<CheckRoundedIcon
							className="profile__check"
							sx={{ color: "#e50914" }}
						/>
						<p>Change or cancel plan at any time.</p>
					</div>
				</div>
			</div>
			<div className="profile__bottomContents">
				<div className="profile__plansIndicator">
					<h2
						className="profile__radioItem"
						onMouseEnter={() => setMobileHover(true)}
						onMouseLeave={() => setMobileHover(false)}
						onClick={redirectToCheckOut}
					>
						Mobile
					</h2>
					<h2
						className="profile__radioItem"
						onMouseEnter={() => setBasicHover(true)}
						onMouseLeave={() => setBasicHover(false)}
						onClick={redirectToCheckOut}
					>
						Basic
					</h2>
					<h2
						className="profile__radioItem"
						onMouseEnter={() => setStandardHover(true)}
						onMouseLeave={() => setStandardHover(false)}
						onClick={redirectToCheckOut}
					>
						Standard
					</h2>
					<h2
						className="profile__radioItem"
						onMouseEnter={() => setPremiumHover(true)}
						onMouseLeave={() => setPremiumHover(false)}
						onClick={redirectToCheckOut}
					>
						Premium
					</h2>
				</div>

				<table className="profile__bottomBlock">
					<tbody className="profile__tableBody">
						<trow className="profile__tableRow profile__row">
							<td className="profile__firstData">Monthly price</td>
							<td
								className={"profile__data 1"}
								style={
									!mobilehover
										? {
												color: "#e50914",
												opacity: "0.6",
												transition: "all ease-in-out 0.1s",
										  }
										: {
												color: "#e50914",
												opacity: "1",
												transition: "all ease-in-out 0.1s",
										  }
								}
							>
								₦1,200
							</td>
							<td
								className="profile__data 2"
								style={
									!basichover
										? {
												color: "#e50914",
												opacity: "0.6",
												transition: "all ease-in-out 0.1s",
										  }
										: {
												color: "#e50914",
												opacity: "1",
												transition: "all ease-in-out 0.1s",
										  }
								}
							>
								₦2,900{" "}
							</td>
							<td
								className="profile__data 3"
								style={
									!standardhover
										? {
												color: "#e50914",
												opacity: "0.6",
												transition: "all ease-in-out 0.1s",
										  }
										: {
												color: "#e50914",
												opacity: "1",
												transition: "all ease-in-out 0.1s",
										  }
								}
							>
								₦3,600
							</td>
							<td
								className="profile__data 4"
								style={
									!premiumhover
										? {
												color: "#e50914",
												opacity: "0.6",
												transition: "all ease-in-out 0.1s",
										  }
										: {
												color: "#e50914",
												opacity: "1",
												transition: "all ease-in-out 0.1s",
										  }
								}
							>
								₦4,400
							</td>
						</trow>
						<trow className="profile__tableRow profile__row">
							<td className="profile__firstData">Video quality</td>
							<td
								className={"profile__data 1"}
								style={
									!mobilehover
										? {
												color: "#e50914",
												opacity: "0.6",
												transition: "all ease-in-out 0.1s",
										  }
										: {
												color: "#e50914",
												opacity: "1",
												transition: "all ease-in-out 0.1s",
										  }
								}
							>
								Good
							</td>
							<td
								className="profile__data 2"
								style={
									!basichover
										? {
												color: "#e50914",
												opacity: "0.6",
												transition: "all ease-in-out 0.1s",
										  }
										: {
												color: "#e50914",
												opacity: "1",
												transition: "all ease-in-out 0.1s",
										  }
								}
							>
								Good
							</td>
							<td
								className="profile__data 3"
								style={
									!standardhover
										? {
												color: "#e50914",
												opacity: "0.6",
												transition: "all ease-in-out 0.1s",
										  }
										: {
												color: "#e50914",
												opacity: "1",
												transition: "all ease-in-out 0.1s",
										  }
								}
							>
								Better
							</td>
							<td
								className="profile__data 4"
								style={
									!premiumhover
										? {
												color: "#e50914",
												opacity: "0.6",
												transition: "all ease-in-out 0.1s",
										  }
										: {
												color: "#e50914",
												opacity: "1",
												transition: "all ease-in-out 0.1s",
										  }
								}
							>
								Best
							</td>
						</trow>
						<trow className="profile__tableRow profile__row">
							<td className="profile__firstData">Resolution</td>
							<td
								className={"profile__data 1"}
								style={
									!mobilehover
										? {
												color: "#e50914",
												opacity: "0.6",
												transition: "all ease-in-out 0.1s",
										  }
										: {
												color: "#e50914",
												opacity: "1",
												transition: "all ease-in-out 0.1s",
										  }
								}
							>
								480p
							</td>
							<td
								className="profile__data 2"
								style={
									!basichover
										? {
												color: "#e50914",
												opacity: "0.6",
												transition: "all ease-in-out 0.1s",
										  }
										: {
												color: "#e50914",
												opacity: "1",
												transition: "all ease-in-out 0.1s",
										  }
								}
							>
								480p
							</td>
							<td
								className="profile__data 3"
								style={
									!standardhover
										? {
												color: "#e50914",
												opacity: "0.6",
												transition: "all ease-in-out 0.1s",
										  }
										: {
												color: "#e50914",
												opacity: "1",
												transition: "all ease-in-out 0.1s",
										  }
								}
							>
								1080p
							</td>
							<td
								className="profile__data 4"
								style={
									!premiumhover
										? {
												color: "#e50914",
												opacity: "0.6",
												transition: "all ease-in-out 0.1s",
										  }
										: {
												color: "#e50914",
												opacity: "1",
												transition: "all ease-in-out 0.1s",
										  }
								}
							>
								4K+HDR
							</td>
						</trow>
						<trow className="profile__tableRow profile__row">
							<td className="profile__firstData">
								Devices you can use to watch
							</td>
							<td className="profile__data">
								<div className="profile__iconsFlex">
									<span>
										<PhoneIphoneIcon
											className="1"
											style={
												!mobilehover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
									<span>
										<TabletMacOutlinedIcon
											className="1"
											style={
												!mobilehover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
								</div>
							</td>
							<td className="profile__data">
								<div className="profile__iconsFlex">
									<span>
										<PhoneIphoneIcon
											className="2"
											style={
												!basichover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
									<span>
										<TabletMacOutlinedIcon
											className="2"
											style={
												!basichover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
									<span>
										<LaptopMacOutlinedIcon
											className="2"
											style={
												!basichover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
									<span>
										<TvOutlinedIcon
											className="2"
											style={
												!basichover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
								</div>
							</td>
							<td className="profile__data">
								<div className="profile__iconsFlex">
									<span>
										<PhoneIphoneIcon
											className="3"
											style={
												!standardhover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
									<span>
										<TabletMacOutlinedIcon
											className="3"
											style={
												!standardhover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
									<span>
										<LaptopMacOutlinedIcon
											className="3"
											style={
												!standardhover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
									<span>
										<TvOutlinedIcon
											className="3"
											style={
												!standardhover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
								</div>
							</td>
							<td className="profile__data">
								<div className="profile__iconsFlex">
									<span>
										<PhoneIphoneIcon
											className="4"
											style={
												!premiumhover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
									<span>
										<TabletMacOutlinedIcon
											className="4"
											style={
												!premiumhover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
									<span>
										<LaptopMacOutlinedIcon
											className="4"
											style={
												!premiumhover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
									<span>
										<TvOutlinedIcon
											className="4"
											style={
												!premiumhover
													? {
															color: "#e50914",
															opacity: "0.6",
															transition: "all ease-in-out 0.1s",
													  }
													: {
															color: "#e50914",
															opacity: "1",
															transition: "all ease-in-out 0.1s",
													  }
											}
										/>
									</span>
								</div>
							</td>
						</trow>
					</tbody>
				</table>
				<div className="profile__buttonCon">
					<button className="profile__signOut" onClick={() => auth.signOut()}>
						Sign Out
					</button>
				</div>
			</div>
		</div>
	);
}

export default Profile;
