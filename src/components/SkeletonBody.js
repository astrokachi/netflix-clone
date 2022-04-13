import React from "react";
import "./SkeletonBody.css";

const SkeletonBody = () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	return (
		<div className="skeleton">
			<div className="skeleton__row">
				<>
					<div className="skeleton__rowTitle"></div>
					<div className={`skeleton__posters`}>
						{arr.map((item) => {
							return (
								<div className="flex">
									<div className="skeleton__img large"></div>
									<div className="skeleton__title"></div>
								</div>
							);
						})}
					</div>
				</>
				{arr.map((item) => (
					<>
						<div className="skeleton__rowTitle"></div>
						<div className={`skeleton__posters`}>
							{arr.map((item) => {
								return (
									<>
										<div className="skeleton__img"></div>
										<div className="skeleton__title"></div>
									</>
								);
							})}
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default SkeletonBody;
