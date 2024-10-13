"use client";

import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import React, { useState } from "react";
import ButtonToggle from "../UI/ButtonToggle";

export default function DetailSelection({ }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="hero bg-content-400 min-h-screen">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1>What would you like to track?</h1>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={"Term Hiring"}/>
          <ButtonToggle name={"Recruiter Name"}></ButtonToggle>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={"Currently Hiring"}/>
          <ButtonToggle name={"Booth Number"}></ButtonToggle>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={"Website URL"}/>
          <ButtonToggle name={"Recruiter Contact Info"}></ButtonToggle>
          <ButtonToggle name={"Date Visited"}></ButtonToggle>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={"Application Deadline"}/>
          <ButtonToggle name={"Employment Location"}></ButtonToggle>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={"Application Status"}/>
          <ButtonToggle name={"Custom Field"}></ButtonToggle>
          <ButtonToggle name={"Role"}></ButtonToggle>
        </div>
        <ButtonToggle name={"Select All"}></ButtonToggle>
        
        <button className="btn btn-primary">Add Fields</button>
      </div>
    </div>
  );
}
