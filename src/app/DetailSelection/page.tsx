"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import React, { useState, useCallback, useEffect } from "react";
//import ButtonToggle from "../UI/ButtonToggle";

// const AnotherPage = ({ searchParams }: { searchParams: string }) => {
//   console.log(searchParams.search); // Logs "search"
// };

export default function DetailSelection({}) {
  const searchParams = useSearchParams();
 // console.log(searchParams.get('search')); // Logs "search"
  const AAAA = searchParams.get('search');

  const [childValue, setChildValue] = useState(false);

  function handleClick () {
    setChildValue(!childValue);
  };
  // const handleChange = useCallback(() => {
  //   setChildValue(!childValue);
  // }, [childValue]);
 
 
  return (
    <div className="hero bg-content-400 min-h-screen">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1>What would you like to track?</h1>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={'i forgot'} value= {childValue}   />
          <ButtonToggle name={"Recruiter Name"} value= {childValue}/>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={"Currently Hiring"} value= {childValue} />
          <ButtonToggle name={"Booth Number"} value= {childValue} />
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={"Website URL"} value= {childValue} />
          <ButtonToggle name={"Recruiter Contact Info"} value= {childValue} />
          <ButtonToggle name={"Date Visited"} value= {childValue} />
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={"Application Deadline"} value= {childValue} />
          <ButtonToggle name={"Employment Location"} value= {childValue} />
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={"Application Status"} value= {childValue} />
          <ButtonToggle name={"Custom Field"} value= {childValue}/>
          <ButtonToggle name={"Role"} value= {childValue}/> 
        </div>
        <button
      onClick={handleClick}
      style={{ backgroundColor: childValue ? "black" : "white",
        color: childValue ? "white" : "black",

      }}
      className="btn btn-active btn-primary"
    >
      {'Select All'}
    </button>
    
        {/* Doesn't work, please implement! */}
        <button className="btn btn-primary bg-lime-600 text-white border-none hover:text-lime-600 hover:bg-white">
          <Link
            href={{
              pathname: "/Home",
              query: {
                search: AAAA,
              }
            }}
          >
            Add Fields
          </Link>
        </button>
      </div>
    </div>
  );
}

function ButtonToggle({name, value}: { name: string, value:boolean }) {
  //console.log(swich);
  const [active, setActive] = useState(false);
  useEffect (()=>{
    if(value != active)
      handleClick();

  },[value])

  const handleClick = () => {
    setActive(!active);
  };


  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: active ? "black" : "white",
        color: active ? "white" : "black"
      }}
      className="btn btn-active btn-primary"
    >
      {name}
    </button>
  );
}