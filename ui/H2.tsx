import clsx from 'clsx';
import { ReactNode } from 'react';


export default function H2({ className, children }: { className?: string, children?: ReactNode }) {
    return (
        <h2 className={clsx('text-xl sm:text-2xl xl:text-3xl font-semibold mb-6 text-black', className)}>
            {children}
        </h2>
    )
}
