import React, { Component } from "react";
import Chatapp from "../assets/chat-app.png";
import ArticleMaster from "../assets/article-preview-component-master.png";
import CardSection from "../assets/four-card-feature-section.png";
import ManageLandingPage from "../assets/manage-landing-page-master.png";
import Countries from "../assets/countries.png";
import Mesnica from "../assets/mesnica.png";
import SignUpForm from "../assets/intro-component-with-sign-up-form.png";
import PricingComponent from "../assets/pricing-component-with-toggle-master.png";
import RandomColor from "../assets/random-color.png";
import EasyBank from "../assets/easybank-landing-page-master.png";
import BookmarkPage from "../assets/bookmark-landing-page-master.png";
import Carapp from "../assets/car-app.png";
import Newsapp from "../assets/news-app.png";

export default class Works extends Component {
	render() {
		return (
			<main className="works-main">
				<h1>Projects</h1>

				<section className="works-main__container">
					<article>
						<a href="https://chat-app-eta-eosin.vercel.app/" target="_blank">
							<img src={Chatapp} alt="Chat app" />
						</a>
						<div className="content">
							<h2>Chat-app</h2>
							<p>
								Chat app is an app created in React framework to let people chat
								with others. There is no need for usernames because it's a
								simple app with zero backend. I don't recommend for serious
								conversations <span>😅</span>
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
							<img src={ArticleMaster} alt="Article Preview Component Master" />
						</a>
						<div className="content">
							<h2>Article Preview Component Master</h2>
							<p>
								Simple card article created in ReactJS. It's a simple challenge
								which I took from Frontend Mentor (
								<a href="https://www.frontendmentor.io/" target="_blank">
									https://www.frontendmentor.io/
								</a>
								) for practice.
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
							<img src={CardSection} alt="Four Card Feature Section" />
						</a>
						<div className="content">
							<h2>Four Card Feature Section</h2>
							<p>
								This is my first challenge from Frontend Mentor (
								<a href="https://www.frontendmentor.io/" target="_blank">
									https://www.frontendmentor.io/
								</a>
								). I used only HTML and CSS for making this.
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
							<img src={ManageLandingPage} alt="Manage Landing Page Master" />
						</a>
						<div className="content">
							<h2>Manage Landing Page Master</h2>
							<p>
								Landing page created with HTML/CSS and some vanilla JavaScript
								and jQuery library. This is a challenge that I also took from
								Frontend Mentor page (
								<a href="https://www.frontendmentor.io/" target="_blank">
									https://www.frontendmentor.io/
								</a>
								). For creating a carousel I used Slick a jQuery plugin.
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
							<img src={Countries} alt="REST Countries" />
						</a>
						<div className="content">
							<h2>REST Countries</h2>
							<p>
								REST Countries is ReactJS challenge from Frontend Mentor (
								<a href="https://www.frontendmentor.io/" target="_blank">
									https://www.frontendmentor.io/
								</a>
								). For country data I used API (
								<a href="https://restcountries.eu/">
									https://restcountries.eu/
								</a>
								). It shows data for each country, like the name of the country,
								population, region and capital city. Users can search for either
								country and switch between dark and light mode.
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
							<img src={Mesnica} alt="Mesnica" />
						</a>
						<div className="content">
							<h2>Mesnica</h2>
							<p>
								Mesnica or Butchery in english. It's a website created in HTML
								and CSS. Everything written is only in Croatian and I use this
								to present my web design skill.
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
							<img src={SignUpForm} alt="Intro Component With Sign Up Form" />
						</a>
						<div className="content">
							<h2>Intro Component With Sign Up Form</h2>
							<p>
								Intro Component With Sign Up Form is a Frontend Mentor challenge
								(
								<a href="https://www.frontendmentor.io/" target="_blank">
									https://www.frontendmentor.io/
								</a>
								). For creating this I used HTML CSS and JavaScript (jQuery
								library). There is no backend only fronted part and it checks if
								the user has entered correct data.
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

					<article>
						<a
							href="https://pricing-component-with-toggle-master-mu.vercel.app/"
							target="_blank"
						>
							<img
								src={PricingComponent}
								alt="Pricing Component With Toggle Master"
							/>
						</a>
						<div className="content">
							<h2>Pricing Component With Toggle Master</h2>
							<p>
								Pricing Component With Toggle Master is a challenge from
								Frontend Mentor (
								<a href="https://www.frontendmentor.io/" target="_blank">
									https://www.frontendmentor.io/
								</a>
								). For this project I use HTML/CSS as well as JavaScript and
								jQuery.
							</p>
							<p>
								<a
									href="https://github.com/NPelivan/Pricing-component-with-toggle-master"
									target="_blank"
								>
									Show me the code
								</a>
							</p>
						</div>
					</article>

					<article>
						<a href="https://random-color-nine.vercel.app/" target="_blank">
							<img src={RandomColor} alt="Color Generator" />
						</a>
						<div className="content">
							<h2>Color Generator</h2>
							<p>
								Colour Generator is React project which generates colours from
								colour API. Users can shuffle colours and it shows colours with
								their hexadecimal number of color. It also shows previous color
								with a hexadecimal number of color.
							</p>
							<p>
								<a
									href="https://github.com/NPelivan/Random-color"
									target="_blank"
								>
									Show me the code
								</a>
							</p>
						</div>
					</article>

					<article>
						<a
							href="https://easybank-landing-page-master-chi.vercel.app/"
							target="_blank"
						>
							<img src={EasyBank} alt="Easybank Landing Page Master" />
						</a>
						<div className="content">
							<h2>Easybank Landing Page Master</h2>
							<p>
								Easy Landing Page Master is Frontend Mentor challenge (
								<a href="https://www.frontendmentor.io/" target="_blank">
									https://www.frontendmentor.io/
								</a>
								) created in HTML and Bootstrap and a little bit of CSS.
							</p>
							<p>
								<a
									href="https://github.com/NPelivan/easybank-landing-page-master"
									target="_blank"
								>
									Show me the code
								</a>
							</p>
						</div>
					</article>

					<article>
						<a
							href="https://bookmark-landing-page-master-npelivan.vercel.app/"
							target="_blank"
						>
							<img src={BookmarkPage} alt="Bookmark Landing Page Master" />
						</a>
						<div className="content">
							<h2>Bookmark Landing Page Master</h2>
							<p>
								Bookmark Landing Page Master is a Frontend Mentor challenge (
								<a href="https://www.frontendmentor.io/" target="_blank">
									https://www.frontendmentor.io/
								</a>
								) created in React. Real challenge was creating tabs and FAQ
								section.
							</p>
							<p>
								<a
									href="https://github.com/NPelivan/bookmark-landing-page-master"
									target="_blank"
								>
									Show me the code
								</a>
							</p>
						</div>
					</article>

					<article>
						<a
							href="http://car-app-git-main-npelivan.vercel.app/"
							target="_blank"
						>
							<img src={Carapp} alt="Car app" />
						</a>
						<div className="content">
							<h2>Car app</h2>
							<p>
								Car app is an app created in React. For state management I used
								Mobx. In this app users can sort cars A-Z, search cars by their
								name, view all car makes, add a new car, delete cars, or rename
								cars and they can use pagination to view all cars. I need to
								redesign this app.
							</p>
							<p>
								<a href="https://github.com/NPelivan/Car-app" target="_blank">
									Show me the code
								</a>
							</p>
						</div>
					</article>

					<article>
						<img src={Newsapp} alt="News app" />
						<div className="content">
							<h2>MyNews app</h2>
							<p>
								News app created in React where users can get latest news from
								around the world. To get news data I used NewsAPI.org. For
								styling I used SCSS. It has no live page bacause API key isn't
								free for use.
							</p>
							<p>
								<a href="https://github.com/NPelivan/News-app" target="_blank">
									Show me the code
								</a>
							</p>
						</div>
					</article>
				</section>
			</main>
		);
	}
}
