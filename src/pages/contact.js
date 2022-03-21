import React, { Component } from "react";
import ContactImg from "../assets/contact.svg";
import UpworkIcon from "../assets/icons8-upwork.svg";
import "../styles/components/_contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedinIn,
	faTwitterSquare,
	faGithubSquare,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export default class Contact extends Component {
	render() {
		return (
			<main className="contact-container">
				<h1>
					Let's make <span>something great</span> together.
				</h1>

				<div className="contact-info">
					<img src={ContactImg} alt="Contact" />

					<div className="contact-content">
						<p>
							Feel free to get in touch with me. I'm always open to discussing
							new projects, creative ideas or oportunities to be part of your
							visions.
						</p>

						<h3>You can contact me via:</h3>
						<a href="mailto:nikolina.pelivan1@gmail.com">
							<FontAwesomeIcon icon={faEnvelope} size="3x" />
						</a>
						<a
							href="https://www.upwork.com/freelancers/~01ca1053390cabc025"
							target="_blank"
						>
							<img src={UpworkIcon} alt="Upwork icon" />
						</a>
						<a
							href="https://www.linkedin.com/in/nikolina-pelivan-ba490b1a1/"
							target="_blank"
						>
							<FontAwesomeIcon icon={faLinkedinIn} size="3x" />
						</a>
						<a href="https://twitter.com/pelnikin" target="_blank">
							<FontAwesomeIcon icon={faTwitterSquare} size="3x" />
						</a>
						<a href="https://github.com/NPelivan" target="_blank">
							<FontAwesomeIcon icon={faGithubSquare} size="3x" />
						</a>
						<p>
							If you want to DM me add me on Discord as nikolina#3012{" "}
							<FontAwesomeIcon icon={faDiscord} />
						</p>
					</div>
				</div>
			</main>
		);
	}
}
