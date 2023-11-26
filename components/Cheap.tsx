import H1 from '@/ui/H1';
import croissant from '../public/croissant.png'
import Image from 'next/image';


export default function Cheap() {
    return (
        <>
            <H1>
                Why is it so cheap?
            </H1>
            <div className="flex justify-between gap-10 flex-col sm:flex-row">
                <div className="flex-[50%]">
                    <p className="mb-5">
                        Underlying datasets we are using to calculate attributes may be very expensive.
                        It costs from thousands to tens of thousands euros. But you do not need whole datasets.
                        You need just a tiny part of it to evaluate a few locations.
                        We bought data instead of you and basically let you share expenses with other customers.
                    </p>
                    <p>
                        Why buy a bakery if you need just a croissant? Let us run a bakery and pay just for what is useful to your business.
                    </p>
                </div>
                <div className="flex-[50%] sm:-mb-10 sm:-mt-32">
                    <Image src={croissant} className="h-64 sm:h-80" alt="Croissant picture representing cheap pricing" />
                </div>
            </div>
        </>
    )
}
