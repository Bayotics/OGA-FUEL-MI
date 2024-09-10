
import { Slide } from "react-awesome-reveal"
import { TiTick } from "react-icons/ti"
import { Link } from "react-router-dom"
import gas from "../../assets/Fuel-me/pngs/gas_tanker.png";


const Gas = () => {
    return(
        <div className='flex services-tab-picker mt-10 gap-20'>
            <div className='services-texts w-2/5'>
                <Slide direction='left' triggerOnce>
                    <h1 className='text-black font-semibold text-4xl'>Gas Delivery</h1>
                    <p className='mt-8 font-light'>
                        Timely deliveries of CNG and LPG gas delivered straight to your location, 
                        eliminating the need for frequent trips to refilling stations.
                        Our gas is delivered in compliance with all safety regulations.
                    </p>
                    <div className='services-bullet mt-8'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1' />
                            <p className='text-black'>
                                CNG and LPG are cleaner fuels, as compared to Petrol
                            </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1'/>
                            <p className='text-black'>
                                Flexible delivery scheduling to meet your specific needs
                            </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1' />
                            <p className='text-black'>
                                Competitive pricing on large deliveries
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
                        <img src = {gas} className='h-[420px] w-[100%] rounded-2xl' alt = 'bulk' />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Gas