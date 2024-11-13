"use client";
//@ts-ignore
import { useSearchParams} from 'next/navigation';
import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import React, { useState, useEffect, Suspense } from "react";
import { LargeNumberLike } from "crypto";
//import ButtonToggle from "../UI/ButtonToggle";

// const AnotherPage = ({ searchParams }: { searchParams: string }) => {
//   console.log(searchParams.search); // Logs "search"
// };

export default function DetailSelection({}) {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Search />
    </Suspense>
  )
}


 function Search({}) {
  const searchParams = useSearchParams();
 // console.log(searchParams.get('search')); // Logs "search"
  //const AAAA = searchParams.get('search');

  const [childValue, setChildValue] = useState(false);
  const names = ['i forgot', 'Recruiter Name', 'Currently Hiring', 'Booth Number'
    , 'Website URL', 'Recruiter Contact Info', 'Date Visited', 'Application Deadline',
    'Employment Location', 'Application Status', 'Role', 'Custom Field'];
  const [selects, setSelections ] = useState([
    {id: 0, select: false}, {id: 1, select: false},{id: 2, select: false},{id: 3, select: false},
    {id: 4, select: false},{id: 5, select: false},{id: 6, select: false},{id: 7, select: false},
    {id: 8, select: false},{id: 9, select: false},{id: 10, select: false},{id:11, select: false},
  ]);
  const [x , setX] = useState([]);

  function handleClick () {
    setChildValue(!childValue);
  };
  // const handleChange = useCallback(() => {
  //   setChildValue(!childValue);
  // }, [childValue]);

const handleIndexFromChild = (index:number) => {
  //setSelections(selects.map(s => s.id === index ? {...s, select: !s.select}: s));
    setSelections(prevSelects => {
      const newSelects = [...prevSelects];
      const id = prevSelects.findIndex(item => item.id == index);

      if (id !== -1){
        newSelects[id]= {...newSelects[id], select: !newSelects[id].select}
      }
      return newSelects;
    })
  }




//   function fieldClick(){
//     for (const select of selects ){
//        setX([...x, select.select]);
//     }
//  };

async function fieldClick() {
  const updatedSelects = await Promise.all(selects.map(async (select) => {
    await setX(prevX => [...prevX, select.select]);
    return select;
  }));
  
  // If you need to do something after all async operations are complete
  console.log('All selects processed:', updatedSelects);
}
 
  return (
    <div className="hero bg-content-400 min-h-screen">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1>What would you like to track?</h1>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={names[0]} value= {childValue} index={0} sendData={handleIndexFromChild} />
          <ButtonToggle name={names[1]} value= {childValue} index={1} sendData={handleIndexFromChild}/>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={names[2]} value= {childValue} index={2} sendData={handleIndexFromChild}/>
          <ButtonToggle name={names[3]} value= {childValue} index={3} sendData={handleIndexFromChild}/>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={names[4]} value= {childValue} index={4} sendData={handleIndexFromChild}/>
          <ButtonToggle name={names[5]} value= {childValue} index={5} sendData={handleIndexFromChild}/>
          <ButtonToggle name={names[6]} value= {childValue} index={6} sendData={handleIndexFromChild}/>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={names[7]} value= {childValue} index={7} sendData={handleIndexFromChild}/>
          <ButtonToggle name={names[8]} value= {childValue} index={8} sendData={handleIndexFromChild}/>
        </div>
        <div className="flex justify-center items-center flex-row gap-4">
          <ButtonToggle name={names[9]} value= {childValue} index={9} sendData={handleIndexFromChild}/>
          <ButtonToggle name={names[10]} value= {childValue} index={10} sendData={handleIndexFromChild}/>
          <ButtonToggle name={names[11]} value= {childValue} index={11} sendData={handleIndexFromChild}/> 
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
            <Suspense>
          <Link
            href={{
              pathname: "/Home",
              query: {
                //search: AAAA,
               list: x,
              }
            }}
            //prefetch={false}
          >
            Add Fields
          </Link>
          </Suspense>
        </button>
      </div>
    </div>
  );
}

function ButtonToggle({name, value, index, sendData}: { name: string, value:boolean, index: number, sendData }) {
  const [active, setActive] = useState(false);
  // useEffect handles the buttons selection, if the parent useState hook for 'value' is changed it cause the
  // this function's 'active' hook to update and rerender. 'value' only changes when the select all is clicked.
  useEffect (()=>{
    if(value != active){
      handleClick();
    }
  },[value])

  
  const handleClick = () => {
    sendData(index);
    console.log(index);
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