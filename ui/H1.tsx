import clsx from 'clsx';
import { ReactNode } from 'react';


export default function H1({ className, children }: { className?: string, children?: ReactNode }) {
    return (
        <h1 className={clsx('text-3xl sm:text-4xl xl:text-5xl font-semibold mb-10 text-black', className)}>
            {children}
        </h1>
    )
}
