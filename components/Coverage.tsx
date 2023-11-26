import H1 from '@/ui/H1';
import globe from '../public/Globe.png'
import Image from 'next/image';


export default function Coverage() {
    return (
        <>
            <H1>
                What countries do you cover?
            </H1>
            <div className="flex justify-between gap-10 flex-col sm:flex-row">
                <div className="flex-[50%]">
                    <p className="mb-5">
                        Each attribute has listed coverage property.
                        You can also search a filter by it. Mostly we focus on Europe.
                        But Some of the data are available world wide.
                    </p>
                    <p>
                        If the attribute is not available in your country, let us know.
                        It is very possible we will be able to add it to our attributes portfolio
                        and we will love feedback on what is the demand. [contact us]
                    </p>
                </div>
                <div className="flex-[50%]">
                    <div className="sm:-mb-6 sm:-mt-24 ml-20">
                        <Image src={globe} className="h-64 sm:h-80" alt="Globe world image" />
                    </div>
                </div>
            </div>
        </>
    )
}
