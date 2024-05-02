"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/constants";
import Link from "next/link";

export default function Header() {
    const pathName = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);
    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${visible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <nav
                    className=" flex items-center justify-between pt-4 pb-2 bg-white lg:px-24 px-4"
                    aria-label="Global"
                >
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
                            alt="logo"
                            width={80}
                            height={70}
                        />
                    </Link>
                    <button
                        type="button"
                        className="lg:hidden -m-2.5 p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                    </button>
                    <div className="hidden lg:flex lg:gap-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={
                                    pathName === item.href
                                        ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-300 font-semibold"
                                        : "nav-link relative hover:font-semibold hover:bg-gradient-to-r from-blue-500 to-teal-300 bg-clip-text"
                                }
                            >
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </nav>
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed w-[80%] inset-y-0 right-0 z-50 overflow-y-auto bg-black  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="text-end">
                            <button
                                type="button"
                                className="-m-2.5 p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-8 w-8 text-white" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            // className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={
                                                pathName === item.href
                                                    ? "block rounded-lg px-3 py-2 text-base leading-7 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-300 font-semibold"
                                                    : "block rounded-lg px-3 py-2 text-base font-semibold leading-7  nav-link text-white relative hover:font-semibold hover:bg-gradient-to-r from-blue-500 to-teal-300 bg-clip-text"
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </>
    );
}
