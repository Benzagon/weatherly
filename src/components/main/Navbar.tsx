import Link from 'next/link';

export default function Navbar() {
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    return (
        <div className="z-50 fixed w-screen h-fit bg-white flex justify-center items-center drop-shadow-sm py-6 px-8 gap-4 text-center">
            <Link className='text-blue-500 hover:underline underline-offset-4 w-16' href={url + ''|| ''}>Home</Link>
            <Link className='text-blue-500 hover:underline underline-offset-4 w-16' href={url + 'favorites' || ''}>Favorites</Link>
        </div>
    )
}