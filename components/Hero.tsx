import clsx from 'clsx'
import { Button } from 'flowbite-react'
import Link from 'next/link'

export default function Hero({ className }: { className?: string }) {
    return (
        <div className={clsx('text-xl text-neutral-500', className)}>
            <p className="">
                Don&apos;t guess. It&apos;s risky.
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-6xl xl:text-7xl font-extrabold mt-1 mb-2 text-black">
                Find out<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-rose-900">best locations</span><br />
                for your business.
            </h1>
            <p className="mb-5">
                Based on hard data. Be confident in your decisions.
            </p>
            <p className="mb-5 text-neutral-500">
                We enrich your locations with hundreds of attributes based on their surroundings.
                Vehicle traffic. Demography. People movement. Public transport. Points of interest. Proximity. Driving distance.
            </p>

            <div className="flex flex-wrap gap-2">
                <Button as={Link} size="xl" color="failure" href="/browse">Browse attributes</Button>
                <Button size="xl" color="gray">How does it work?</Button>
            </div>
        </div>
    )
}
