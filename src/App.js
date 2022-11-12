import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { NavigationContext } from "./contexts";
import { Header, Footer, TitleLogo } from "./components";
import { Portfolio, AboutMe, Contact } from "./pages";
import { Box } from "./components/3DComponents";
import { resumeLink } from "./components/Data";

import "./App.css";

const titles = ["Home", "Projects", "About", "Contact"];

export default function App(props) {
	const [page, setPage] = useState(`Home`);

	const navigateWithParams = (title) => {
		setPage(`${title}`);
		console.log(title);
	};

	const navigateToResume = async () => window.open(`${resumeLink}`);

	return (
		<NavigationContext.Provider value={page}>
			<div className="App">
				<TitleLogo />
				{page === `Home` ? (
					<div className="canvas_wrapper">
						<Canvas>
							<ambientLight />
							<pointLight position={[10, 10, 10]} />
							<Box position={[0, 0, 0]} />
						</Canvas>
					</div>
				) : page === `About` ? (
					<div className="about_container">
						<AboutMe />
					</div>
				) : page === `Projects` ? (
					<div className="portfolio_container">
						<h4 className="resume_link" onClick={navigateToResume}>
							Click Here for Resume
						</h4>
						<Portfolio />
					</div>
				) : page === `Contact` ? (
					<Contact />
				) : (
					<h1>Loading..</h1>
				)}
				<div className="Header">
					{titles.map((title) => (
						<h3
							className="navigation_links"
							onClick={() => navigateWithParams(title)}
						>
							{title}
						</h3>
					))}
				</div>
				<Footer />
			</div>
		</NavigationContext.Provider>
	);
}
