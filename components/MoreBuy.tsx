import H1 from '@/ui/H1';
import H2 from '@/ui/H2';
import { Button, TextInput, Textarea } from 'flowbite-react';


export default function MoreBuy() {
    return (
        <>
            <H1>
                More you buy, less you pay
            </H1>
            <div className="flex justify-between gap-10 flex-col sm:flex-row">
                <div className="flex-[50%]">
                    <p className="mb-5">
                        The price is based on a number of locations you want to enrich and a number of
                        attributes you selected.
                        But the price of attributes decreases when you add more rows or order more attributes.
                        This is the reason why prices in attributes catalog are reduced when you
                        add attribute to a basket.
                        Because of It, it is good to set up expected number of locations you will be enriching.
                        To see the real price you will be paying.
                        [set the number of locations]
                    </p>
                    <p>
                        If you need to know precisely what the price is consisted of, look in the basket.
                        [link to the basket].
                    </p>
                </div>
                <div className="flex-[50%]">
                    <div className="flex gap-3">
                        <div className="flex flex-col gap-3">
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                            <div className="w-16 h-10 bg-stone-400 rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
