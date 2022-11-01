import React, { useState, useEffect, useContext } from "react";
import {
	Accordion,
	useAccordionButton,
	AccordionContext,
	Card,
} from "react-bootstrap";

const data = [
	{
		id: 1,
		title: "United Nations",
		project: "Ecosafe API",
		location: "Democratic Republic of Laos",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
	},
	{
		id: 2,
		title: "OniRonin NFT Project",
		info: "Info Here",
	},
	{
		id: 3,
		title: "GoTeddy Food Delivery App",
		info: "Info Here afaffafdsfewtiajkf",
	},
];

export default function Portfolio() {
	return (
		<div className="project_container">
			<div className="project">
				<div class="resume_entry">
					<h4 className="project_title">{data[0].title}</h4>
				</div>
				<h5 className="project_project">{data[0].project}</h5>
				<p className="project_detail">{data[0].location}</p>
				<p className="project_info">{data[0].info}</p>
			</div>
		</div>
	);
}
