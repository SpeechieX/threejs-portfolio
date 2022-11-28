import React, { useState, useEffect } from "react";
import { about, blogLink } from "../components/Data";

export default function AboutMe() {
	const navigateToBlog = async () => window.open(`${blogLink}`);
	return (
		<div className="AboutContainer">
			<div className="">
				<h1 className="bio_name">Erik HR</h1>
				<h4 className="bio_name">Creative Developer</h4>
			</div>
			<div className="flex_container">
				<div class="stack">
					<h5 className="bio_desc_hl" onClick={navigateToBlog}>
						{about[0].heading}
					</h5>
					<h5 className="bio_desc">{about[0].description}</h5>
				</div>
				<div class="stack">
					<h5 className="bio_content">{about[1].heading}</h5>
					<h5 className="bio_desc">{about[1].description}</h5>
				</div>
				<div class="stack">
					<h5 className="bio_content">{about[2].heading}</h5>
					<h5 className="bio_desc">{about[2].description}</h5>
					<h5 className="bio_desc_hl">{about[2].extra}</h5>
				</div>
				<div class="stack">
					<h5 className="bio_content">{about[3].heading}</h5>
					<h5 className="bio_desc">{about[3].description}</h5>
				</div>
			</div>
		</div>
	);
}
