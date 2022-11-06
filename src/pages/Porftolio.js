import React, { useState, useEffect, useContext } from "react";
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
  Card,
} from "react-bootstrap";
import { MiniBox } from "./../components/3DComponents";

const data = [
  {
    id: 1,
    title: "United Nations",
    project: "Ecosafe API",
    location: "Democratic Republic of Laos",
    info: "In partnership with the United Nations Development Program, I created an in-app toggle feature called “Ecosafe” allowing users to request plastic-free, sustainable packaging with their food delivery orders. The initiative also was used to enlighten citizens on sustainability methods and reducing plastic waste. This microservice produced geospatial data.",
    tools: "React-Native, Node, PubNub, MongoDB.",
  },
  {
    id: 2,
    title: "Bighead",
    project: "OniRonin.io",
    location: "Vancouver, British Columbia",
    info: "Worked as the lead frontend developer for the current and second version of the OniRonin.io website, allowing users to mint and upgrade NFT’s from the OniRonin collection on the Ethereum Mainnet.",
    tools: "Svelte, Truffle, Ethers, Hardhat, AWS.",
  },
  {
    id: 3,
    title: "GoTeddy Food Delivery for iOS and Android",
    project: "GoTeddy Application Framework",
    location: "Democratic Republic of Laos",
    info: "GoTeddy is a world class mobile application bringing food delivery, shipping services and more to the nation of Lao PDR. ",
    tools: "React, React-Native, Node, Go, Ruby, MongoDB.",
    link: "https://apps.apple.com/us/app/goteddy-online-delivery/id1451566104",
  },
  {
    id: 4,
    title: "Maruhan Japan Bank Lao",
    project: "Checkout With Maruhan Payment Gateway for iOS",
    location: "Democratic Republic of Laos",
    info: "Designed, Built and Tested Payment Integration for Maruhan Japan Bank Lao into the GoTeddy Application Framework.",
    tools: "React-Native, Node.",
  },
  {
    id: 5,
    title: "PEPE1943",
    project: "PEPE1943.COM",
    location: "Los Angeles, California",
    info: "Built a full scale E-Commerce site and Blog for a emerging streetwear inspired brand. ",
    tools: "React, Node, MongoDB.",
  },
];

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
