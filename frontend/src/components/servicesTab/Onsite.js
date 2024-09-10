
import { Slide } from "react-awesome-reveal"
import { TiTick } from "react-icons/ti"
import { Link } from "react-router-dom"
import onSite from "../../assets/Fuel-me/on-site.jpg";


const OnSite = () => {
    return(
        <div className='flex services-tab-picker mt-10 gap-20'>
            <div className='services-texts w-2/5'>
                <Slide direction='left' triggerOnce>
                    <h1 className='text-black font-semibold text-4xl'>On-Site Delivery</h1>
                    <p className='mt-8 font-light'>
                        Keep your fleet fueled up and on the road 24/7, with 100% NNPC and DPR standard fuel.
                        We travel to your fleet whenever and wherever your trucks or equipment are parked day or night.
                    </p>
                    <div className='services-bullet mt-8'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1' />
                            <p className='text-black'>
                                Save thousands of naira in unnecessary costs - labor, fuel, mileage
                            </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1'/>
                            <p className='text-black'>
                                Stop waiting in line at filling stations
                            </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1' />
                            <p className='text-black'>
                                Pick a time that works best for you
                            </p>
                        </div>
                    </div>
                    <div className='services-btn mt-10'>
                        <Link to = '/contactus'>
                            <button
                                className='px-4 text-center py-3 bg-[#1a2eeb] hover:bg-black text-white rounded-sm'>
                                Get Started
                            </button>
                        </Link>
                    </div>
                </Slide>
            </div>
            <div className='services-img w-3/5'>
                <Slide direction='right' triggerOnce>
                    <div className='services-pic'>
                        <img src = {onSite} className='h-[420px] w-[100%] rounded-2xl' alt = 'on site' />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default OnSite