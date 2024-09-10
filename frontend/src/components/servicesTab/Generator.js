
import { Slide } from "react-awesome-reveal"
import { TiTick } from "react-icons/ti"
import { Link } from "react-router-dom"
import generator from "../../assets/Fuel-me/pngs/diesel-img.png";


const Generator = () => {
    return(
        <div className='flex services-tab-picker mt-10 gap-20'>
            <div className='services-texts w-2/5'>
                <Slide direction='left' triggerOnce>
                    <h1 className='text-black font-semibold text-4xl'>Generator Delivery</h1>
                    <p className='mt-8 font-light'>
                        Have a reliable backup power system in place to keep your business operating 
                        during a power outage. 
                        Our generator fuel delivery services guarantee that your 
                        generators are well fuelled and prepared for any eventuality.
                    </p>
                    <div className='services-bullet mt-8'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1' />
                            <p className='text-black'>
                                We deliver fuel to a wide range of locations, including remote sites.
                            </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1'/>
                            <p className='text-black'>
                                Keep your generators running during emergencies and power outages
                           </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1 text-2xl' />
                            <p className='text-black'>
                                Optimized generator performance and extend equipment lifespan, 
                                reducing maintenance costs.
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
                        <img src = {generator} className='h-[420px] w-[100%] rounded-2xl' alt = 'generator' />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Generator