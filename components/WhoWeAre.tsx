import H1 from '@/ui/H1';
import team from '../public/Team.jpg'
import Image from 'next/image'


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
                    <Image src={team} alt="A team of CleverMaps" />
                </div>
            </div>
        </>
    )
}
