import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/style.scss";

export default class Home extends Component {
	render() {
		return (
			<main>
				<h1>
					Hi,
					<br /> I'm Nikolina <br /> Web designer & developer
				</h1>

				<p>Frontend developer</p>

				<Link to="/contact">
					<button>Contact me</button>
				</Link>
			</main>
		);
	}
}
