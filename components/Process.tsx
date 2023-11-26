'use client'

import H1 from '@/ui/H1';
import {
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTitle
} from 'flowbite-react';
import { HiDownload, HiOutlineCurrencyEuro, HiSearch, HiUpload } from "react-icons/hi";


export default function Process() {
    return (
        <>
            <H1>
                How does it work?
            </H1>
            <Timeline className="ml-3">
                <TimelineItem>
                    <TimelinePoint icon={HiSearch} />
                    <TimelineContent>
                        <TimelineTitle>Browse attributes and select those which are relevant to you.</TimelineTitle>
                        <TimelineBody>
                            Its like browsing an online store. If you are not sure which one to choose for your business,
                            do not hesitate to contact our professional services team which specialise at geographic analysis and are ready to help you.
                            [Link to Contact form below]
                        </TimelineBody>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelinePoint icon={HiUpload} />
                    <TimelineContent>
                        <TimelineTitle>Give us a list of locations you want to evaluate.</TimelineTitle>
                        <TimelineBody>
                            In a form of coordinates (latitude & longitude), addresses or plus codes.
                            Upload them as an excel file, csv file or fill them manually on this website.
                            [Link to More on input data]
                        </TimelineBody>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelinePoint icon={HiOutlineCurrencyEuro} />
                    <TimelineContent>
                        <TimelineTitle>Check the price and place an order.</TimelineTitle>
                        <TimelineBody>
                            The price is based on a number of locations you want to enrich and a number of attributes you selected.
                            The price of attributes are not the same. It depends on the underlying data and complexity of calculations.
                            We send you payment instructions. [Link to More on pricing and payement]
                        </TimelineBody>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelinePoint icon={HiDownload} />
                    <TimelineContent>
                        <TimelineTitle>Receive locations enriched with selected attributes.</TimelineTitle>
                        <TimelineBody>
                            Let us check your uploaded locations and calculate your selected attributes. It usually takes up to 48 hours.
                            You receive excel file, csv file or pdf file. Depends of your choice.
                            [Link to more in output. What you get]
                        </TimelineBody>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}
