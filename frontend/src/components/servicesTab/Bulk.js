
import { Slide } from "react-awesome-reveal"
import { TiTick } from "react-icons/ti"
import { Link } from "react-router-dom"
import bulk from "../../assets/Fuel-me/bulk.jpg";


const Bulk = () => {
    return(
        <div className='flex services-tab-picker mt-10 gap-20'>
            <div className='services-texts w-2/5'>
                <Slide direction='left' triggerOnce>
                    <h1 className='text-black font-semibold text-4xl'>Bulk Delivery</h1>
                    <p className='mt-8 font-light'>
                        Our bulk fuel delivery services can easily scale to meet your business needs,
                        supplying larger quantities as required, so your trucks can stay on the road.
                    </p>
                    <div className='services-bullet mt-8'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1' />
                            <p className='text-black'>
                                Bulk purchases often comes with discounted rates
                            </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1'/>
                            <p className='text-black'>
                                Bulk delivery eliminates the need for frequent refueling trips
                            </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1' />
                            <p className='text-black'>
                                Track fuel consumption and manage your fuel inventory
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
                        <img src = {bulk} className='h-[420px] w-[100%] rounded-2xl' alt = 'bulk' />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Bulk