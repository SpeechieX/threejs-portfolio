import React, { useState, useEffect, useContext } from "react";
import {
	Accordion,
	useAccordionButton,
	AccordionContext,
	Card,
} from "react-bootstrap";
import { MiniBox } from "./../components/3DComponents";
import { data } from "./../components/Data";

export default function Portfolio() {
	return data.map((project) => (
		<div className="project_container" key={project.id}>
			<div className="minibox_column">
				<MiniBox />
			</div>

			<div className="project">
				<div class="resume_entry">
					<h3 className="project_title">{project.title}</h3>
				</div>
				<h3 className="project_project">{project.project}</h3>
				<p className="project_detail">{project.location}</p>
				<p className="project_info">{project.info}</p>
				<p className="project_tools">{project.tools}</p>
			</div>
		</div>
	));
}
