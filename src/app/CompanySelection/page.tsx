"use client";
import Select from "react-select";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function CompanySelection() {
  const [selectedOption, setSelectedOption] = useState();
  const [options, setOptions] = useState([]);

  // Fetch company list from json file using Fetch API and map it to options variable
  useEffect(() => {
    const getOptions = async () => {
      try {
        const response = await fetch('./output.json');
        const options = await response.json();
        console.log(options);
        setOptions(
          options.map(({ booth, company }) => ({
            label: company,
            value: booth,
          }))
        );
      } catch (error) {
        // ignore
      }
    };
    getOptions();
  }, []);

  const handleChange = (selectedOption) => {
    console.log(selectedOption);
    setSelectedOption(selectedOption);
  };

  return (
    <div className="hero bg-content-400 min-h-screen">
      <div className="flex justify-center items-center flex-col">
        <div className="">
          <h1>Select Companies to Track</h1>
        </div>
        <div className="px-2">
          <Select
            closeMenuOnSelect={false}
            options={options}
            onChange={handleChange}
            isMulti={true}
          />
        </div>
        <button className="btn btn-primary bg-lime-600 text-white border-none hover:text-lime-600 hover:bg-white">
          <Link
            href={{
              pathname: "/DetailSelection",
              query: {
                search: selectedOption,
              },
            }}
          >
            Add Companies
          </Link>
        </button>
      </div>
    </div>
  );
}
