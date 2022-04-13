import React from "react";
import "./SkeletonBanner.css";

const SkeletonBanner = () => {
	// const counter = 8;
	return (
		<div className="skeleton">
			<div className="skeleton__banner">
				<div className="skeleton__content">
					<div className="skeleton__bannerBlock block1"></div>
					<div className="skeleton__bannerBlock block2"></div>
					<div className="skeleton__bannerBlock block2"></div>
					<div className="skeleton__bannerBlock block3"></div>
					<div className="skeleton__bannerBlock block3"></div>
				</div>
				<div className="skeleton--fadeBottom" />
			</div>
			<div></div>
		</div>
	);
};

export default SkeletonBanner;
