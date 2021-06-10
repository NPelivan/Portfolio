import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo1.png";

export default class Navbar extends Component {
	render() {
		return (
			<nav>
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
		);
	}
}
