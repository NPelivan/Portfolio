import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/style.scss";
import Webdev from "../assets/undraw_web_development.svg";
export default class Home extends Component {
	render() {
		return (
			<main className="home-main">
				<section>
					<article>
						<h1>
							Hi,
							<br /> I'm <span>Nikolina</span> <br /> Web designer & developer
						</h1>

						<p>Frontend developer/designer</p>

						<Link to="/contact">
							<button>Contact me</button>
						</Link>
					</article>

					<div>
						<img src={Webdev} alt="Web developer" />
					</div>
				</section>
			</main>
		);
	}
}
