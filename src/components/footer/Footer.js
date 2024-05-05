"use client"
import useLight from "@/customhooks/useLight";
import { pdflinks, sitemap, socialLinksData } from "@/lib/constants";
import Image from "next/image";

const Footer = () => {
    const currentTheme = useLight();

    return (
        <footer className="pt-8 text-center sm:text-inherit">
            <div className="sm:flex sm:items-start sm:justify-between sm:px-24 pb-12">
                <div className="flex flex-col items-center space-y-4">
                    <div className="text-teal-600">
                        <Image
                            src={currentTheme === 'dark' ? "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=96&q=75" : "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"}
                            alt="logo"
                            width={80}
                            height={70}
                            loading="lazy"
                        />
                    </div>
                    <p className="max-w-xs ">Tomorrow&lsquo;s Vision, Today!</p>
                    <ul className="mt-8 flex gap-6">
                        {socialLinksData.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.url}
                                    className=" transition hover:text-blue-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>{link.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {sitemap.map((category, index) => (
                    <div key={index}>
                        <p className="font-semibold text-base  py-8 sm:py-0">
                            {category.title}
                        </p>
                        <ul className="mt-6 space-y-4 text-sm">
                            {category.links.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.url}
                                        className="  transition hover:opacity-75 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-300 hover:font-semibold"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className={`md:flex items-center justify-between ${currentTheme === "dark" ? "bg-[#1b1c1e]" : "bg-[#272e5c]"}  py-8  sm:px-24`}>
                <div className="text-gray-500">
                    2023 <span className="text-white">LENS, Inc.</span> All rights
                    reserved.
                </div>
                <div className="sm:flex items-center pt-4">
                    {pdflinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={index === 0 ? "pr-4" : ""}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
