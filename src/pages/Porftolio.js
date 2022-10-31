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
    title: "United Nations Ecosafe API",
    info: "Info Here",
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
    <div>
      <div className="project"></div>
      <div className="project"></div>
      <div className="project"></div>
      <div className="project"></div>
    </div>
  );
}
