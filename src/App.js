import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { NavigationContext } from "./contexts";
import { Header, Footer, TitleLogo } from "./components";
import { Portfolio, AboutMe, Contact } from "./pages";
import { Box, MiniBox } from "./components/3DComponents";
import { resumeLink, blogLink, about } from "./components/Data";

import "./App.css";

const titles = ["Home", "Projects", "Contact"];

export default function App(props) {
	const [page, setPage] = useState(`Home`);

	const navigateWithParams = (title) => {
		setPage(`${title}`);
		console.log(title);
	};

	const navigateToResume = async () => window.open(`${resumeLink}`);
	const navigateToBlog = async () => window.open(`${blogLink}`);

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
						{/* <h5 className="por_desc_hl" onClick={navigateToBlog}>
							{about[0].heading}
						</h5> */}
						<div className="row">
							{/* <h4 className="resume_link" onClick={navigateToResume}>
								Download Resume
							</h4> */}
						</div>
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
