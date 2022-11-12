import React, { useState, useEffect } from "react";
import { about } from "../components/Data";

export default function AboutMe() {
	return (
		<div className="AboutContainer">
			<div className="">
				<h1 className="bio_name">Erik HR</h1>
				<h4 className="bio_name">Creative, Visionary</h4>
			</div>
			<div className="flex_container">
				<div class="row">
					<div class="stack">
						<h5 className="bio_content">{about[0].heading}</h5>
						<h5 className="bio_desc">{about[0].description}</h5>
					</div>
					<div class="stack">
						<h5 className="bio_content">{about[1].heading}</h5>
						<h5 className="bio_desc">{about[1].description}</h5>
					</div>
				</div>
				<div class="row">
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
		</div>
	);
}
