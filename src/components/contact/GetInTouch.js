import Image from 'next/image'
import React from 'react'
const GetInTouch = () => {
    return (
        <>
            <section className="overflow-hidden sm:grid sm:grid-cols-2 pb-24">
                <div className="px-4 py-16  lg:px-24 lg:py-24 ">
                    <div className="mx-auto max-w-xl text-start">
                        <h2 className="text-6xl font-semibold text-black nunito_sans">
                            Get in touch <br />with us
                        </h2>
                        <p className="text-black mt-4 md:block">
                            Send your enquiry now!
                        </p>
                        <form className="mt-4 md:mt-8 relative">
                            <input
                                type="email"
                                required
                                placeholder="Enter email address"
                                className="rounded-full bg-gray-200 p-3 sm:w-[80%] w-full relative text-black outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-[#272e5c] rounded-full p-2 text-white absolute top-0 right-0 bottom-0  sm:mr-[4rem] mr-0"
                            >
                                Request demo
                            </button>
                        </form>
                    </div>
                </div>
                <Image
                    alt="locations"
                    src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=750&q=75"
                    width={720}
                    height={224}
                />
            </section>
        </>
    )
}
export default GetInTouch

