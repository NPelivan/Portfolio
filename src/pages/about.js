import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nature1 from "../assets/nature1.jpeg";
import Nature2 from "../assets/nature4.jpeg";
import Aboutme from "../assets/undraw_about_me.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
							develop, enhance, test and deploy websites & apps with the end
							goal of creating a user-friendly site layout and function. I'm a
							well-organised person, problem solver, freelancer with high
							attention to detail.
						</p>

						<p className="block-item">
							I don't like to define myself by the work I've done. I define
							myself by the work I want to do. Every day I challenge myself to
							do project small or big because there is always something new to
							learn.
						</p>

						<p className="block-item">
							If you are a business seeking a web preseance or a employer
							looking to hire, you can get in touch with me{" "}
							<Link to="/contact">here</Link>.
						</p>
					</div>
				</section>

				<section className="skill-container">
					<h2>What do you bring to the table?</h2>
					<p>It is my skils that make me a better developer.</p>
					<span>Skills:</span>
					<ul>
						<li>
							<FontAwesomeIcon icon={faPlus} />
							HTML
						</li>
						<li>
							<FontAwesomeIcon icon={faPlus} />
							CSS
						</li>
						<li>
							<FontAwesomeIcon icon={faPlus} />
							SCSS
						</li>
						<li>
							<FontAwesomeIcon icon={faPlus} />
							Bootstrap
						</li>
						<li>
							<FontAwesomeIcon icon={faPlus} />
							JavaScript
						</li>
						<li>
							<FontAwesomeIcon icon={faPlus} />
							jQuery
						</li>
						<li>
							<FontAwesomeIcon icon={faPlus} />
							Pugjs
						</li>
						<li>
							<FontAwesomeIcon icon={faPlus} />
							Reactjs
						</li>
						<li>
							<FontAwesomeIcon icon={faPlus} />
							Mobx (state management)
						</li>
						<li>
							<FontAwesomeIcon icon={faPlus} />
							Git
						</li>
						<li>
							<FontAwesomeIcon icon={faPlus} />
							Figma (design)
						</li>
						<li>
							<FontAwesomeIcon icon={faPlus} />
							Photoshop (design)
						</li>
					</ul>
				</section>

				<section className="hobby-container">
					<h2>Hobbys</h2>
					<p>
						Since my early childhood, I have enjoyed drawing and doing creative
						things. I love to photograph nature, playing games, reading books. I
						could also say that I program as a hobby.
					</p>

					<div className="image-container">
						<img src={Nature1} alt="Sea with cloudy sky" loading="lazy" />

						<img
							src={Nature2}
							alt="Old remains of old roman city"
							loading="lazy"
						/>
					</div>
				</section>
			</main>
		);
	}
}
