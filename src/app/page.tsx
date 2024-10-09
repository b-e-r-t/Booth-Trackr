import Link from 'next/link'
import Image from "next/image";

export default function Home (){
    return (
        /*
        <main className= 'container mx-auto p-4'>
            <h1 className="text-balance text-4xl mx-auto fixed h-40 flex font-bold tracking-tight text-gray-100 sm:text-6xl ">
              BOOTHTRACKR
            </h1>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <Image 
            src = "/boothlogo.png" 
            alt = "booth logo"
            width={500}
            height={54}
            /> 
            </div>
        </main>
        */
      <main className='w-full h-screen flex flex-col items-center justify-center '>
        <h1 className='text-gray-0 text-5xl py-8 font-mono' >BOOTHTRAKR</h1>
        <div className=" grid grid-cols-3 gap-x-3 place-items-center p-8 bg-black rounded-xl shadow-md">
            <img className=' animate-bounce w-32' src="/boothlogo.png" alt="ChitChat Logo"/>
            <img className=' animate-bounce w-32' src="/boothlogo.png" alt="ChitChat Logo"/>
            <img className=' animate-bounce w-32' src="/boothlogo.png" alt="ChitChat Logo"/>
        </div>
          <p className="text-gray-300 text-center pb-6">TRACK THEM ALL</p>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">ENTER</button>
      </main>
      
        
    )

}

