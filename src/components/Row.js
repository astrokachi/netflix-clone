import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import SkeletonBody from "./SkeletonBody";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");
	const [loading, setLoading] = useState(true);

	const baseUrl = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			await setLoading(false);
			return request;
		};

		fetchData();
	}, [fetchUrl]);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.name || "")
				.then((url) => {
					console.log(url);
					const urlParams = new URLSearchParams(new URL(url).search);
					console.log(urlParams);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className="">
			{loading ? (
				<SkeletonBody />
			) : (
				<div className="row">
					<h2 className="row__title">{title}</h2>

					<div className="row__posters">
						{movies.map((movie) =>
							(isLargeRow && movie?.poster_path) ||
							(!isLargeRow && movie?.backdrop_path) ? (
								<div key={movie.id} className="row__content ">
									<div
										className={`row__container ${
											isLargeRow && "row__largeContainer"
										}`}
									>
										<img
											onClick={() => handleClick(movie)}
											className={`row__poster ${
												isLargeRow && "row__posterLarge"
											}`}
											src={`${baseUrl}${
												isLargeRow ? movie.poster_path : movie.backdrop_path
											}`}
											alt={movie?.name}
											key={movie.id}
										/>
									</div>
									<div className="row__movieTitle">
										{movie.name || movie.original_name || movie.title}
									</div>
								</div>
							) : (
								""
							)
						)}
					</div>
					{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
				</div>
			)}
		</div>
	);
};

export default Row;
