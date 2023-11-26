import clsx from 'clsx';
import { ReactNode } from 'react';


export default function H3({ className, children }: { className?: string, children?: ReactNode }) {
    return (
        <h3 className={clsx('text-lg sm:text-xl xl:text-2xl font-semibold mb-4 text-black', className)}>
            {children}
        </h3>
    )
}
