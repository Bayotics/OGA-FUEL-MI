import phone from '../assets/Fuel-me/pngs/smartphone.png'
import delivery from '../assets/Fuel-me/pngs/delivery.png'
import location from '../assets/Fuel-me/pngs/location.png'
import convenient from '../assets/Fuel-me/pngs/convenient.png'
import { Slide } from 'react-awesome-reveal'


const HomePageAbout = () => {
    return(
            <div className=" px-16 flex justify-between mt-10 pt-6">
                <div className="home-about-texts w-1/2 mt-32">
                    <Slide direction="left" triggerOnce>
                        <p className="text-[#1a2eeb] text-lg font-bold">Why choose us?</p>
                        <h1 className="text-3xl font-semibold mt-4">We are the largest and most popular home fuel delivery company in Lagos</h1>
                        <p className="mt-4 text-base font-normal">With Fuel Me, enjoy convenience like never before. You won't have to worry about refuelling ever again
                            thanks to our trustworthy fuel delivery service. Get fuel online and free up your time for the 
                            things that really count. Find out how our solution regularly saves businesses 
                            and people money and time.</p>
                        <div className="home-about-btn mt-8">
                            <button className=" bg-[#000000] px-7 py-3 rounded-md text-white hover:bg-[#4c4d4e]">
                                Learn More →
                            </button>
                        </div>
                    </Slide>
                </div>
                <div className="home-about-design w-1/2 pl-6">
                    <Slide direction='right' triggerOnce>   
                        <div className='home-about-item flex gap-8'>
                            <div className=''>
                                <div className='rounded-full  p-3 bg-black'>
                                    <img src={phone} alt='smartphone' className='w-48'/>
                                </div>
                                <div className='m-auto mt-4 border-l w-[1px] border-black h-16'>
                                    
                                </div>
                                
                            </div>
                            <div className=' px-4 mt-2'>
                                <h1 className='text-xl font-semibold'>Swift Online Fuel Ordering</h1>
                                <p className='mt-4'>Fuel Me offers a seamless and efficient online ordering platform designed to meet all your fuel needs with just a few clicks
                                    Experience the convenience of swift fuel ordering and delivery, tailored to keep your operations 
                                    running smoothly.</p>
                            </div>
                        </div>
                        <div className='home-about-item  flex gap-8 mt-8'>
                            <div className=''>
                                <div className='rounded-full  p-3 bg-black'>
                                    <img src={delivery} alt='smartphone' className='w-32'/>
                                </div>
                                <div className='m-auto mt-4 border-l w-[1px] border-black h-16'>
                                    
                                </div>
                                
                            </div>
                            <div className=' px-4 mt-2'>
                                <h1 className='text-xl font-semibold'>Express delivery</h1>
                                <p className='mt-4'>Fuel Me's Flash Delivery service ensures that your fuel orders are delivered promptly, right when you need them so you never have to worry about running out of fuel.</p>
                            </div>
                        </div>
                        <div className='home-about-item  flex gap-8 mt-8'>
                            <div className=''>
                                <div className='rounded-full  p-3 bg-black'>
                                    <img src={location} alt='smartphone' className='w-32'/>
                                </div>
                                <div className='m-auto mt-4 border-l w-[1px] border-black h-16'>
                                    
                                </div>
                                
                            </div>
                            <div className=' px-4 mt-2'>
                                <h1 className='text-xl font-semibold'>Live tracking</h1>
                                <p className='mt-4'>Stay informed with Fuel Me's real-time order tracking feature. From the moment you place your fuel order, you can monitor its progress every step of the way.</p>
                            </div>
                        </div>
                        <div className='home-about-item  flex gap-8 mt-8'>
                            <div className=''>
                                <div className='rounded-full  p-3 bg-black'>
                                    <img src={convenient} alt='smartphone' className='w-32'/>
                                </div>
                                
                            </div>
                            <div className=' px-4 mt-2'>
                                <h1 className='text-xl font-semibold'>Convenient</h1>
                                <p className='mt-4'>Our service is designed for maximum convenience, saving you time and ensuring you never have to wait in long queues at the gas station again.</p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        
    )
}

export default HomePageAbout