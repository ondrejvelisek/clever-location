import AttributeCard from '@/ui/AttributeCard';
import H1 from '@/ui/H1';
import MoreCard from '@/ui/MoreCard';
import { Button, TextInput, Textarea } from 'flowbite-react';
import Link from 'next/link';


export default function StartBrowsing() {
    return (
        <>
            <H1>
                Start browsing attributes
            </H1>
            <div className="flex justify-between gap-5 flex-col">
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
                <div>
                    <div className="max-w-[360px] mx-auto">
                        <Button size="xl" color="failure" as={Link} href="/browse">Browse all attributes</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
