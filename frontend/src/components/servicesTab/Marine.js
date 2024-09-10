
import { Slide } from "react-awesome-reveal"
import { TiTick } from "react-icons/ti"
import { Link } from "react-router-dom"
import marine from "../../assets/Fuel-me/marine.jpg";


const Marine = () => {
    return(
        <div className='flex services-tab-picker mt-10 gap-20'>
            <div className='services-texts w-2/5'>
                <Slide direction='left' triggerOnce>
                    <h1 className='text-black font-semibold text-4xl'>Marine Delivery</h1>
                    <p className='mt-8 font-light'>
                        Keep your boats, commercial fishing vessels, private yachts and military ships fueled up
                        with high quality fuel 24/7, anywhere in Lagos, with 100% reliability.
                    </p>
                    <div className='services-bullet mt-8'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1' />
                            <p className='text-black'>
                                Highest quality of marine fuel that meets NNPC standards
                            </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1'/>
                            <p className='text-black'>
                                Timely delivery of marine fuel, regardless of the location or time of day.
                            </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1' />
                            <p className='text-black'>
                                On-site delivery directly to ports, marinas, or Vessels
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
                        <img src = {marine} className='h-[420px] w-[100%] rounded-2xl' alt = 'bulk' />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Marine