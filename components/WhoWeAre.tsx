import H1 from '@/ui/H1';
import H2 from '@/ui/H2';
import { Button, TextInput, Textarea } from 'flowbite-react';


export default function WhoWeAre() {
    return (
        <>
            <H1>
                Who we are?
            </H1>
            <div className="flex justify-between gap-10 flex-col">
                <div className="">
                    <p className="mb-5">
                        We are CleverMaps. A group of geospatial data and map enthusiasts.
                        Based in Prague, Czech republic. Since 2014 we help businesses to answer the “Where?” question.
                        With our crafted data, various producst and skills.
                        We very believe the CleverLocation site will help to continue with this mission.
                    </p>
                </div>
                <div className="">
                    <img src="/Team.jpg" alt="Photo of our core team members" />
                </div>
            </div>
        </>
    )
}
