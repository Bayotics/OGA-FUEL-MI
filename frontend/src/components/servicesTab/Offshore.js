
import { Slide } from "react-awesome-reveal"
import { TiTick } from "react-icons/ti"
import { Link } from "react-router-dom"
import offshore from "../../assets/Fuel-me/offshore.jpg";


const Offshore = () => {
    return(
        <div className='flex services-tab-picker mt-10 gap-20'>
            <div className='services-texts w-2/5'>
                <Slide direction='left' triggerOnce>
                    <h1 className='text-black font-semibold text-4xl'>Offshore Delivery</h1>
                    <p className='mt-8 font-light'>
                        We supply NNPC standard quality fuel to oil and gas drilling systems 
                        so they can smoothly carry out their daily activities. Even in the rough waters of Lagos,
                        our fuel supply network services are 100% reliable.
                    </p>
                    <div className='services-bullet mt-8'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1 text-2xl' />
                            <p className='text-black'>
                                Large fuel delivery to offshore sites which reduces costs associated with multiple trips
                                and logistical planning.
                            </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1 text-2xl'/>
                            <p className='text-black'>
                                Fuel delivery solutions which meet the specific needs of offshore platforms, 
                                rigs, and vessels
                           </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1 text-2xl' />
                            <p className='text-black'>
                                Skilled personnel trained in offshore logistics 
                                to ensure smooth, safe, and efficient fuel delivery.
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
                        <img src = {offshore} className='h-[420px] w-[100%] rounded-2xl' alt = 'bulk' />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Offshore