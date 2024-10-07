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

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://bertozarate95:boothtrackr.2.@gcloud0.w6ua4zp.mongodb.net/?retryWrites=true&w=majority&appName=gcloud0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//run().catch(console.dir);
