import Image from "next/image";
import Link from "next/link";
import React from 'react'

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Keep track of job booths, with ease
          </h1>
          <p className="py-6">
            Forget about your notes app and create a list of all the attending
            companies at your next job fair along with ready-made tools to make
            tracking easy.
          </p>
          <button className="btn btn-primary bg-lime-600 text-white border-none hover:text-lime-600 hover:bg-white">
            <Link href="/EventSelection">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
}


