"use client";
import Link from "next/link";
import Select, { components, MultiValue, MultiValueGenericProps, OnChangeValue } from "react-select";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

// const MultiValueLabel = (props: MultiValueGenericProps) => {
//   return <components.MultiValueLabel {...props} />;
// };

const AnotherPage = ({ searchParams }: { searchParams: string }) => {
  console.log(searchParams.search); // Logs "search"
};

export default function EventSelection() {
  const companies = [
    { value: 1, label: "Apple" },
    { value: 2, label: "Bank of America" },
    { value: 3, label: "Cisco" },
    { value: 4, label: "Disney" },
    { value: 5, label: "Enterprise" },
  ];
  const [companyList, setCompanyList] = useState([]);
  const handleChange = (selectedOption) => { 
    console.log(selectedOption);
    setCompanyList(selectedOption);
  };

  const submit = () => {
    console.log("Company listfdasfsdafsdafas");
    console.log("Company list: " + companyList);
  }

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
            // components={{ MultiValueLabel }}
            // styles={{
            //   multiValue: (base) => ({
            //     ...base,
            //   }),
            // }}
          />
        </div>
        <button className="btn btn-primary bg-lime-600 text-white border-none hover:text-lime-600 hover:bg-white" onSubmit={submit}>
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
      </div>
    </div>
  );
}
