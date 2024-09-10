
import { Slide } from "react-awesome-reveal"
import { TiTick } from "react-icons/ti"
import { Link } from "react-router-dom"
import reefer from "../../assets/Fuel-me/reefer.jpg";


const Reefer = () => {
    return(
        <div className='flex services-tab-picker mt-10 gap-20'>
            <div className='services-texts w-2/5'>
                <Slide direction='left' triggerOnce>
                    <h1 className='text-black font-semibold text-4xl'>Reefer Delivery</h1>
                    <p className='mt-8 font-light'>
                        Keep your refrigerated trucks and trailers fueled up with the right reefer fuel and on the road 24/7
                        With out reefer delivery service, your truck fleet and refrigerated trailers are always fueled up
                        and ready to make deliveries on time and at the right temperature.
                    </p>
                    <div className='services-bullet mt-8'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1' />
                            <p className='text-black'>
                                Keep your refrigerated goods cold and moving at all times.
                            </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1'/>
                            <p className='text-black'>
                                Make deliveries on time and at the right temperature.
                           </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1' />
                            <p className='text-black'>
                                Cold and Hot Weather Fuel Blends
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
                        <img src = {reefer} className='h-[420px] w-[100%] rounded-2xl' alt = 'generator' />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Reefer