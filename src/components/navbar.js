import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import Logo from "../assets/logo1.png";
import Hamburger from "../assets/icon-hamburger.svg";
import Close from "../assets/icon-close.svg";

export default class Navbar extends Component {
	state = {
		on: false,
	};

	clickNav = () => {
		this.setState({
			on: !this.state.on,
		});
	};
	render() {
		return (
			<>
				<nav className="desktop-navbar">
					<div>
						<Link to="/">
							<img src={Logo} alt="" height="100" />
						</Link>
					</div>
					<ul>
						<Link to="/">
							<li>Home</li>
						</Link>
						<Link to="/about">
							<li>About</li>
						</Link>
						<Link to="/works">
							<li>Works</li>
						</Link>
						<Link to="/contact">
							<li>Contact</li>
						</Link>
					</ul>
				</nav>

				<div className="mobile-nav-track">
					<img src={Logo} alt="Logo" />
					<img src={Hamburger} alt="Hamburger icon" onClick={this.clickNav} />

					{this.state.on && (
						<div className="mobile-nav">
							<div>
								<img src={Close} alt="Close button" onClick={this.clickNav} />
							</div>

							<nav className="mobile-nav-bar">
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<hr />

									<li>
										<Link to="/about">About</Link>
									</li>
									<hr />

									<li>
										<Link to="/works">Works</Link>
									</li>
									<hr />

									<li>
										<Link to="/contact">Contact</Link>
									</li>
								</ul>
							</nav>
						</div>
					)}
				</div>
			</>
		);
	}
}
