import clsx from 'clsx';
import { Card } from 'flowbite-react';
import Link from 'next/link';


export default function MoreCard({ className }: { className?: string }) {
    return (
        <Card
            className={clsx('min-w-[300px] shadow-none justify-between', className)}
        >
            <div className="-m-6 pb-6">
                <img src="/Arrow.png" alt="More items, arrow picture" />
            </div>
            <Link href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Search for more
                </h5>
            </Link>
            <div className="mb-5 mt-2.5 flex items-center">

            </div>
            <div className="flex items-center w-max justify-between">
                <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 w-max text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    More
                </a>
            </div>
        </Card>
    )
}
