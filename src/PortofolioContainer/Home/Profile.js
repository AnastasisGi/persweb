import React from 'react';

export default function Profile() {
	const linkedInItem = {
		url: 'www.linkedin.com/in/anastasios-gkiokas-05b77060',
	};
	return (
		<div className="profile-container">
			<div className="profile-parent">
				<div className="profile-details">
					<div className="colz">
						<a href="#">
							<i className="fa fa-github-square"></i>
						</a>
						<a href={linkedInItem.url}>
							<i className="fa fa-linkedin-square"></i>
						</a>
						Profile
					</div>
				</div>
			</div>
		</div>
	);
}
