import clsx from 'clsx'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import Link from 'next/link'

export default function ClNavbar({ className }: { className?: string }) {
    return (
        <Navbar className={clsx("shadow-lg", className)}>
            <NavbarBrand as={Link} href="/">
                <img src="/logo.svg" className="-my-2.5 h-20 w-20" alt="Clever Location Logo" />
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#" active>
                    Home
                </NavbarLink>
                <NavbarLink as={Link} href="#">
                    About
                </NavbarLink>
                <NavbarLink href="#">Services</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    )
}
