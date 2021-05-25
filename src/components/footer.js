import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
	render() {
		return (
			<footer>
				&copy; 2021
				<p>
					Made with <FontAwesomeIcon icon={faHeart} /> by Nikolina
				</p>
			</footer>
		);
	}
}
