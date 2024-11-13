"use client";
import { useSearchParams } from "next/navigation";
import {Suspense} from "react"
// const AnotherPage = ({ searchParams }: { searchParams: string }) => {
//   //console.log(searchParams.search); // Logs "search";
// };

function Search() {
  const searchParams = useSearchParams();
  const list = searchParams.get('list');
  //console.log(list);
  return <div>{list}</div>;
}

export default function Home() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Search />
    </Suspense>
  )
}