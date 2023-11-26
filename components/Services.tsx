import H1 from '@/ui/H1';
import H2 from '@/ui/H2';
import { Button, TextInput, Textarea } from 'flowbite-react';


export default function Services() {
    return (
        <>
            <H1>
                Don&apos;t know which attributes to choose?
            </H1>
            <div className="flex justify-between gap-10 flex-col sm:flex-row">
                <div className="flex-[50%]">
                    <p className="mb-5">
                        Contact our professional services team which specialises in geographic analysis.
                    </p>
                    <p className="mb-5">
                        They daily help businesses to choose the right spot to expand, places to relocate or which one to close.
                        How to optimise your branch network and more. They are also ready to help interpret the attributes you receive
                        and recommend a final solution of your problem based on them.
                    </p>
                    <p>
                        They are ready to help you.
                    </p>
                </div>
                <div className="flex-[50%]">
                    <H2 className="text-xl sm:text-2xl xl:text-3xl mb-5">
                        Contact our Professional services
                    </H2>
                    <form className="flex max-w-md flex-col gap-4">
                        <div>
                            <TextInput id="email" type="email" placeholder="Your email..." required />
                        </div>
                        <div>
                            <Textarea id="message" placeholder="Leave a message..." required rows={4} defaultValue="Hi, I would like to know which attributes to choose." />
                        </div>
                        <Button type="submit">Send</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
