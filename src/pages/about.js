import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nature1 from "../assets/nature1.jpeg";
import Nature2 from "../assets/nature2.jpeg";
import Nature3 from "../assets/nature3.jpeg";
import Aboutme from "../assets/undraw_about_me.svg";

import "../styles/components/_about.scss";

export default class About extends Component {
	render() {
		return (
			<main className="about-main">
				<h1>About me</h1>

				<section>
					<div>
						<img src={Aboutme} alt="About me" />
					</div>

					<div className="text-container">
						<p className="block-item">
							I'm Frontend developer & designer located in Croatia. I design,
							develop, enhance, test and deploy web sites & apps with an end
							goal of creating user-frendly site layout and function. I'm well
							organised person, problem solver, freelancer with high attention
							to detail.
						</p>

						<p className="block-item">
							I don't like to define myself by work I've done. I define myself
							by the work I want to do. Every day I challenge myself to do
							project small or big because there is always something new to
							learn.
						</p>

						<p className="block-item">
							If you are a business seeking a web preseance or a employer
							looking to hire, you can get in touch with me{" "}
							<Link to="/contact">here</Link>.
						</p>
					</div>
				</section>

				<h2>What do you bring to the table?</h2>
				<p>It is my skils that make me a better developer.</p>
				<span>Skills:</span>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>SCSS</li>
					<li>Bootstrap</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Pugjs</li>
					<li>Reactjs</li>
					<li>Mobx (state management)</li>
					<li>Git</li>
					<li>Figma (design)</li>
					<li>Photoshop (design)</li>
				</ul>

				<p>
					Since my early childhood I have enjoyed drawing and doing creative
					things. I love to photograph nature, playing games, reading books. I
					could also say that I program for a hobby.
				</p>

				<img src={Nature1} alt="Sea with cloudy sky" height="100" />
				<img
					src={Nature2}
					alt="Beautiful view of city with cloudy sky and sun is trying to penetrate the clouds"
					height="100"
				/>
				<img src={Nature3} alt="Where the sky touches the sea" height="100" />
			</main>
		);
	}
}
