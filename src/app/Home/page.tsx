"use client";
import { useSearchParams } from "next/navigation";

const AnotherPage = ({ searchParams }: { searchParams: string }) => {
  console.log(searchParams.search); // Logs "search"
};

export default function Home() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("search"));
  const AAAA = searchParams.get('search');
  return <p>{AAAA}</p>;
}
