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
  const names = ['i forgot', 'Recruiter Name', 'Currently Hiring', 'Booth Number'
    , 'Website URL', 'Recruiter Contact Info', 'Date Visited', 'Application Deadline',
    'Employment Location', 'Application Status', 'Role', 'Custom Field'];
  function handleClick () {
    setChildValue(!childValue);
  };
  // const handleChange = useCallback(() => {
  //   setChildValue(!childValue);
  // }, [childValue]);
  function fieldClick(){
    console.log('adddddy')
 };
 
  return (
    <div className="hero bg-content-400 min-h-screen">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1>What would you like to track?</h1>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={names[0]} value= {childValue}   />
          <ButtonToggle name={names[1]} value= {childValue}/>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={names[2]} value= {childValue} />
          <ButtonToggle name={names[3]} value= {childValue} />
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={names[4]} value= {childValue} />
          <ButtonToggle name={names[5]} value= {childValue} />
          <ButtonToggle name={names[6]} value= {childValue} />
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={names[7]} value= {childValue} />
          <ButtonToggle name={names[8]} value= {childValue} />
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={names[9]} value= {childValue} />
          <ButtonToggle name={names[10]} value= {childValue}/>
          <ButtonToggle name={names[11]} value= {childValue}/> 
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
        <button className="btn btn-primary bg-lime-600 text-white border-none hover:text-lime-600 hover:bg-white"
          onClick={fieldClick}>
          <Link
            href={{
              pathname: "/Home",
              query: {
                search: AAAA,
                list: names
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