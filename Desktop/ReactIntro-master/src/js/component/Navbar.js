import React from "react";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar text-white bg-dark fixed-top">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-item nav-link active" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-item nav-link" href="#">
							About
						</a>
						<a className="nav-item nav-link" href="#">
							Services
						</a>
						<a className="nav-item nav-link" href="#">
							Contact
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
