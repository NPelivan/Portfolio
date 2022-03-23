import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/style.scss";
import Webdev from "../assets/undraw_web_development.svg";
import TypingAnimation from "../components/typingAnimation";
export default class Home extends Component {
	render() {
		return (
			<main className="home-main">
				<section>
					<article>
						<h1>
							Hi,
							<br /> I'm <TypingAnimation /> <br /> Web designer & developer
						</h1>

						<p>Frontend developer/designer</p>

						<Link className="btn-link" to="/contact">
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
