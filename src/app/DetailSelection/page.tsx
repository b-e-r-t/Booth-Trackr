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
        {/* <div className="flex justify-center items-center flex-row gap-4">
          <button
            onClick={handleClick}
            style={{ backgroundColor: active ? "black" : "white" }}
            className="btn btn-active btn-primary"
          >
            Term Hiring
          </button>
          <button
            onClick={handleClick}
            style={{ backgroundColor: active ? "black" : "white" }}
            className="btn btn-active btn-primary"
          >
            Recuiter Name
          </button>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <button className="btn btn-active btn-primary">
            Currently Hiring?
          </button>
          <button className="btn btn-active btn-primary">Booth Number</button>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <button className="btn btn-active btn-primary">Website URL</button>
          <button className="btn btn-active btn-primary">
            Recruiter Contact Info
          </button>
          <button className="btn btn-active btn-primary">Date Visited</button>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <button className="btn btn-active btn-primary">
            Application Deadline
          </button>
          <button className="btn btn-active btn-primary">
            Employment Location
          </button>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <button className="btn btn-active btn-primary">
            Application Status
          </button>
          <button className="btn btn-active btn-primary">Custom Field</button>
          <button className="btn btn-active btn-primary">Role</button>
        </div>
        <button className="btn btn-active btn-primary">Select All</button>

        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 active:bg-red-800">
          Add Fields
        </button> */}
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
