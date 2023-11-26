import AttributeCard from '@/ui/AttributeCard';
import H1 from '@/ui/H1';
import MoreCard from '@/ui/MoreCard';
import { Button, TextInput, Textarea } from 'flowbite-react';


export default function FeaturedAttributes() {
    return (
        <>
            <H1>
                What attributes do you provide?
            </H1>
            <div className="flex justify-between gap-5 flex-col">
                <p>
                    Many. Really. Vehicle traffic, demography, people movement, public transport, points of interest, proximity, driving distance and more.
                    The best way is to start browsing our attributes catalog.
                </p>
                <div className="relative">
                    <div className="overflow-x-auto p-4 relative items-stretch">
                        <div className="flex gap-5 flex-row">
                            <AttributeCard />
                            <AttributeCard />
                            <AttributeCard />
                            <AttributeCard />
                            <AttributeCard />
                            <MoreCard />
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 bottom-3 w-5 bg-gradient-to-r from-white to-transparent" />
                    <div className="absolute top-0 right-0 bottom-3 w-5 bg-gradient-to-l from-white to-transparent" />
                </div>
                <p>
                    All the listed attributes are available. We do not list attributes which we are not able to provide.
                    If you can&apos;t find what you are looking for or it is not available in a your country, let us know.
                    It is very possible we will be able to add it to our attributes portfolio and we will love feedback on what is the demand.
                    [contact us]
                </p>
            </div>
        </>
    )
}
