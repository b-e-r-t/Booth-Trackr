"use client";
import Select from "react-select";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

export default function EventSelection() {
  const companies = [
    { value: "Apple", label: "Apple" },
    { value: "Bank of America", label: "Bank of America" },
    { value: "Cisco", label: "Cisco" },
    { value: "Disney", label: "Disney" },
    { value: "Enterprise", label: "Enterprise" },
  ];
  const [companyList, setCompanyList] = useState([]);
  const handleChange = (selectedOption) => { 
    console.log(selectedOption);
    setCompanyList(selectedOption);
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
            options={companies}
            value={companyList}
            onChange={handleChange}
            isMulti={true}
          />
        </div>
        <button className="btn btn-primary bg-lime-600 text-white border-none hover:text-lime-600 hover:bg-white">
          <Link
            href={{
              pathname: "/DetailSelection",
              query: {
                search: companyList,
              },
            }}
          >
            Add Companies
          </Link>
        </button> 
        <div>Companies: {companyList.map(company => 
          <p key={company.value}>{company.label}</p>
        )}</div>
      </div>
    </div>
  );
}
