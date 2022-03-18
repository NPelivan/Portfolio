import React, { Component } from "react";
import ContactImg from "../assets/contact.svg";
import UpworkIcon from "../assets/icons8-upwork.svg";
import "../styles/components/_contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedIn,
	faTwitter,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default class Contact extends Component {
	render() {
		return (
			<main className="contact-container">
				<h1>
					Let's make <span>something great</span> together.
				</h1>

				<img src={ContactImg} alt="Contact" />

				<div className="contact-content">
					<p>
						Feel free to get in touch with me. I'm always open to discussing new
						projects, creative ideas or oportunities to be part of your visions.
					</p>
					<a href="mailto:nikolina.pelivan1@gmail.com">
						<FontAwesomeIcon icon={faEnvelope} />
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
						<FontAwesomeIcon icon={faLinkedIn} />
					</a>
					<a href="https://twitter.com/pelnikin" target="_blank">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a href="https://github.com/NPelivan" target="_blank">
						<FontAwesomeIcon icon={faGithub} />
					</a>
					<p>If you want to DM me add me on Discord as nikolina#3012</p>
				</div>
			</main>
		);
	}
}
