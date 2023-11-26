import clsx from 'clsx';
import { Card } from 'flowbite-react';
import Link from 'next/link';
import thumbnail from '../public/thumbnail.png'
import Image from 'next/image'


export default function AttributeCard({ className }: { className?: string }) {
    return (
        <Card
            className={clsx('min-w-[300px] justify-between', className)}
        >
            <div className="-m-6 pb-6">
                <Image src={thumbnail} alt="Ilustrative image of attribute" />
            </div>
            <Link href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Distance to the closest bus stop
                </h5>
            </Link>
            <div className="mb-5 mt-2.5 flex items-center">

            </div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Add to cart
                </a>
            </div>
        </Card>
    )
}
