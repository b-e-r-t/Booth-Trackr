"use client";
import Link from "next/link";
import Select, { components, MultiValueGenericProps } from "react-select";

const companies = [
  { value: 1, label: "Apple" },
  { value: 2, label: "Bank of America" },
  { value: 3, label: "Cisco" },
  { value: 4, label: "Disney" },
  { value: 5, label: "Enterprise" },
];

const MultiValueLabel = (props: MultiValueGenericProps) => {
  return <components.MultiValueLabel {...props} />;
};

export default function EventSelection() {
  return (
    <div className="hero bg-content-400 min-h-screen">
      <div className="flex justify-center items-center flex-col">
        <div className="">
          <h1>Select Companies to Track</h1>
        </div>
        <div className="px-2">
          <Select
            closeMenuOnSelect={false}
            components={{ MultiValueLabel }}
            styles={{
              multiValue: (base) => ({
                ...base,
              }),
            }}
            isMulti
            options={companies}
          />
        </div>
        <button className="btn btn-primary bg-lime-600 text-white border-none hover:text-lime-600 hover:bg-white">
          <Link href="/DetailSelection">Add Companies</Link>
        </button>
      </div>
    </div>
  );
}
