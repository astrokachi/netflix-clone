import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../Request";
import SkeletonBanner from "./SkeletonBanner";

function Banner() {
	const [movie, setMovie] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			await setLoading(false);
			return request;
		};

		fetchData();
	}, []);

	const truncate = (string, n) => {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	};

	return (
		<>
			{loading ? (
				<SkeletonBanner></SkeletonBanner>
			) : (
				<>
					<header
						className="banner"
						style={{
							backgroundSize: "cover",
							backgroundPosition: "center center",
							backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
						}}
					>
						<div className="banner__contents">
							<h1 className="banner__title">
								{movie?.name || movie?.title || movie.original_name}
							</h1>
							<div className="banner__buttons">
								<button className="banner__button">Play</button>
								<button className="banner__button">My list</button>
							</div>
							<h1 className="banner__description">
								{truncate(movie?.overview, 200)}
							</h1>
						</div>

						<div className="banner--fadeBottom" />
					</header>
				</>
			)}
		</>
	);
}

export default Banner;
