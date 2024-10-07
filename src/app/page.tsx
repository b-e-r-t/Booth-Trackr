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
        <div className="p-7 max-w-sm mx-auto bg-white rounded-xl shadow-md items-center space-x-4">
        <div className='flex-shrink-9'>
          <img className="h-13 w-12" src="/boothlogo.png" alt="ChitChat Logo"/>
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
        
    )

}

