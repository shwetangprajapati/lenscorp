import { blogsnumber } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'
import GradientHeading from '../gradientHeading/GradientHeading'

const BlogsCard = () => {
    return (
        <>
            <section
                className=" overflow-hidden bg-cover bg-top bg-no-repeat pt-24 bg-[url(https://lenscorp.ai/_next/static/media/Gradient_bg_section4.71fb66b2.jpg)]">
                <GradientHeading
                    title="BLOGS"
                    size="text-6xl"
                />

                {blogsnumber.map((item) => {
                    return <div key={item} className="text-black px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-8 border-2 border-[#ff5d5b] rounded-xl mb-24 mt-8 lg:w-[80%] lg:mx-auto mx-2 transform transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 ">
                            <div>
                                <Image
                                    alt="Artificial intelligence"
                                    width={472}
                                    height={456}
                                    src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1714047525%2Flenscorp-website%2Fquahackxjl6x7eojkcuv.jpg&w=640&q=75"
                                    className=" inset-0  object-cover rounded-lg "
                                    priority
                                />
                            </div>
                            <div >
                                <div className='text-[#ff5d5b] font-bold pb-4 '>Artificial intelligence</div>
                                <h2 className="text-3xl font-medium sm:text-4xl ">The AI Revolution In Supply Chain Management
                                </h2>
                                <div className='flex items-center gap-2 my-6'>
                                    <div>
                                        <Image
                                            src="https://lenscorp.ai/_next/static/media/writer.d019a049.svg"
                                            width={20}
                                            height={20}
                                            alt="Saumya Rayal"
                                            loading='lazy'
                                        />
                                    </div>
                                    <div>Saumya Rayal</div>
                                    <div className='pl-4'>

                                        <Image
                                            src="https://lenscorp.ai/_next/static/media/clock.b3e4bd2a.svg"
                                            width={20}
                                            height={20}
                                            alt="Saumya Rayal"
                                            loading='lazy'
                                        />
                                    </div>
                                    <div>Apr 8, 2024</div>
                                </div>
                                <p className="mt-4 ">
                                    The rise of Artificial Intelligence (AI) is transforming entire industries, and supply chain management is no exception. Read our latest blog to delve into the exciting world of AI-powered supply chains and explore the role of AI in optimising inventory levels and ensuring on-time deliveries. What according to you are your biggest challenges in supply chain management?...
                                </p>
                                <div className='text-[#ff5d5b] hover:text-black cursor-pointer pt-8 w-fit font-bold'>Read more &gt;&gt;&gt;</div>

                            </div>
                        </div>
                    </div>
                })}
            </section>
        </>
    )
}

export default BlogsCard