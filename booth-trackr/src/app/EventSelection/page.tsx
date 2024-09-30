import Image from 'next/image'
import { BsChevronRight } from "react-icons/bs";
import Link from 'next/link'

export default function EventSelection() {
    return (
        <div className="hero bg-content-400 min-h-screen">
            <div className="grid grid-cols-1 content-end justify-items-center gap-4">
                <div className="card card-side bg-base-100 shadow-xl content-center">
                    <figure>
                    <Image
                        src="/shpeLogo.png"
                        width={50}
                        height={50}
                        alt="Picture of the author"
                    />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">SHPE National Convention 2024</h2>
                    </div>
                    <div className="content-center card-action">
                        <button className="btn">
                            <Link href="/CompanySelection"><BsChevronRight/></Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

