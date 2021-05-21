import React, { Component } from "react";
import Chatapp from "../assets/chat-app.png";
import ArticleMaster from "../assets/article-preview-component-master.png";
import CardSection from "../assets/four-card-feature-section.png";
import ManageLandingPage from "../assets/manage-landing-page-master.png";
import Countries from "../assets/countries.png";
import Mesnica from "../assets/mesnica.png";
import SignUpForm from "../assets/intro-component-with-sign-up-form.png";

export default class Works extends Component {
	render() {
		return (
			<main>
				<article>
					<a href="https://chat-app-eta-eosin.vercel.app/" target="_blank">
						<img src={Chatapp} alt="Chat app" height="300" />
					</a>
					<div>
						<h2>Chat-app</h2>
						<p>
							Nostrud laborum nulla sit tempor labore in cillum esse duis sunt.
							Deserunt qui deserunt nisi in. Excepteur sunt ad eu nulla amet
							cupidatat voluptate proident voluptate quis velit proident veniam
							fugiat. Adipisicing aute ad veniam tempor aliqua velit labore
							cillum.
						</p>
						<p>
							<a href="https://github.com/NPelivan/Chat-app" target="_blank">
								Show me the code
							</a>
						</p>
					</div>
				</article>

				<article>
					<a
						href="https://article-preview-component-master-rho.vercel.app/"
						target="_blank"
					>
						<img
							src={ArticleMaster}
							alt="Article Preview Component Master"
							height="300"
						/>
					</a>
					<div>
						<h2>Article Preview Component Master</h2>
						<p>
							Nostrud laborum nulla sit tempor labore in cillum esse duis sunt.
							Deserunt qui deserunt nisi in. Excepteur sunt ad eu nulla amet
							cupidatat voluptate proident voluptate quis velit proident veniam
							fugiat. Adipisicing aute ad veniam tempor aliqua velit labore
							cillum.
						</p>
						<p>
							<a
								href="https://github.com/NPelivan/article-preview-component-master"
								target="_blank"
							>
								Show me the code
							</a>
						</p>
					</div>
				</article>

				<article>
					<a
						href="https://four-card-feature-section-one-iota.vercel.app/"
						target="_blank"
					>
						<img
							src={CardSection}
							alt="Four Card Feature Section"
							height="300"
						/>
					</a>
					<div>
						<h2>Four Card Feature Section</h2>
						<p>
							Nostrud laborum nulla sit tempor labore in cillum esse duis sunt.
							Deserunt qui deserunt nisi in. Excepteur sunt ad eu nulla amet
							cupidatat voluptate proident voluptate quis velit proident veniam
							fugiat. Adipisicing aute ad veniam tempor aliqua velit labore
							cillum.
						</p>
						<p>
							<a
								href="https://github.com/NPelivan/four-card-feature-section"
								target="_blank"
							>
								Show me the code
							</a>
						</p>
					</div>
				</article>

				<article>
					<a
						href="https://manage-landing-page-master-theta.vercel.app/"
						target="_blank"
					>
						<img
							src={ManageLandingPage}
							alt="Manage Landing Page Master"
							height="300"
						/>
					</a>
					<div>
						<h2>Manage Landing Page Master</h2>
						<p>
							Nostrud laborum nulla sit tempor labore in cillum esse duis sunt.
							Deserunt qui deserunt nisi in. Excepteur sunt ad eu nulla amet
							cupidatat voluptate proident voluptate quis velit proident veniam
							fugiat. Adipisicing aute ad veniam tempor aliqua velit labore
							cillum.
						</p>
						<p>
							<a
								href="https://github.com/NPelivan/manage-landing-page-master"
								target="_blank"
							>
								Show me the code
							</a>
						</p>
					</div>
				</article>

				<article>
					<a href="https://countries-rho.vercel.app/" target="_blank">
						<img src={Countries} alt="REST Countries" height="300" />
					</a>
					<div>
						<h2>REST Countries</h2>
						<p>
							Nostrud laborum nulla sit tempor labore in cillum esse duis sunt.
							Deserunt qui deserunt nisi in. Excepteur sunt ad eu nulla amet
							cupidatat voluptate proident voluptate quis velit proident veniam
							fugiat. Adipisicing aute ad veniam tempor aliqua velit labore
							cillum.
						</p>
						<p>
							<a href="https://github.com/NPelivan/Countries" target="_blank">
								Show me the code
							</a>
						</p>
					</div>
				</article>

				<article>
					<a href="https://mesnica-mu.vercel.app/" target="_blank">
						<img src={Mesnica} alt="Mesnica" height="300" />
					</a>
					<div>
						<h2>Mesnica</h2>
						<p>
							Nostrud laborum nulla sit tempor labore in cillum esse duis sunt.
							Deserunt qui deserunt nisi in. Excepteur sunt ad eu nulla amet
							cupidatat voluptate proident voluptate quis velit proident veniam
							fugiat. Adipisicing aute ad veniam tempor aliqua velit labore
							cillum.
						</p>
						<p>
							<a href="https://github.com/NPelivan/Mesnica" target="_blank">
								Show me the code
							</a>
						</p>
					</div>
				</article>

				<article>
					<a
						href="https://intro-component-with-sign-up-form-pi.vercel.app/"
						target="_blank"
					>
						<img
							src={SignUpForm}
							alt="Intro Component With Sign Up Form"
							height="300"
						/>
					</a>
					<div>
						<h2>Intro Component With Sign Up Form</h2>
						<p>
							Nostrud laborum nulla sit tempor labore in cillum esse duis sunt.
							Deserunt qui deserunt nisi in. Excepteur sunt ad eu nulla amet
							cupidatat voluptate proident voluptate quis velit proident veniam
							fugiat. Adipisicing aute ad veniam tempor aliqua velit labore
							cillum.
						</p>
						<p>
							<a
								href="https://github.com/NPelivan/Intro-component-with-sign-up-form"
								target="_blank"
							>
								Show me the code
							</a>
						</p>
					</div>
				</article>
			</main>
		);
	}
}
