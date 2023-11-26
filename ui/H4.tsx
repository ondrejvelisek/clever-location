import clsx from 'clsx';
import { ReactNode } from 'react';


export default function H4({ className, children }: { className?: string, children?: ReactNode }) {
    return (
        <h4 className={clsx('text-md sm:text-lg xl:text-xl font-semibold mb-2 text-black', className)}>
            {children}
        </h4>
    )
}
