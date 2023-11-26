import clsx from 'clsx';
import { ReactNode } from 'react';


export default function Section({ className, children }: { className?: string, children?: ReactNode }) {
    return (
        <div className={clsx('py-16 md:py-20 lg:py-24 shadow px-2 sm:px-4', className)}>
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    )
}
