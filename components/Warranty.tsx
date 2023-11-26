import H1 from '@/ui/H1';
import H2 from '@/ui/H2';
import { Button, TextInput, Textarea } from 'flowbite-react';


export default function Warranty() {
    return (
        <>
            <H1>
                You got what you order. We guarantee.
            </H1>
            <div className="flex justify-between gap-10 flex-col sm:flex-row">
                <div className="flex-[50%]">
                    <p className="mb-5">
                        We guarantee you receive ordered attributes backed by quality data
                        or we simply send your money back proportionally,
                        like the attribute or location would not be ordered.
                    </p>
                    <p className="mb-5">
                        Mostly it happens when the input file is corrupted.
                        e.g. some address is non-existing, wrongly formatted
                        or the location is outside of a covered area
                        or somewhere in the middle of the ocean.
                    </p>
                    <p>
                        It&apos;s worth saying we will contact you beforehand with a request
                        to provide us the fixed input locations. But the decision is up to you.
                    </p>
                </div>
                <div className="flex-[50%]">
                    <div className="">
                        <img src="/umbrella.png" className="h-64 sm:h-80" alt="Croissant picture representing cheap pricing" />
                    </div>
                </div>
            </div>
        </>
    )
}
