
import { Slide } from "react-awesome-reveal"
import { TiTick } from "react-icons/ti"
import { Link } from "react-router-dom"
import tank from "../../assets/Fuel-me/refinery.jpeg";


const TankFarm = () => {
    return(
        <div className='flex services-tab-picker mt-10 gap-20'>
            <div className='services-texts w-2/5'>
                <Slide direction='left' triggerOnce>
                    <h1 className='text-black font-semibold text-4xl'>Tank Farm Delivery</h1>
                    <p className='mt-8 font-light'>
                        With so many renowned brands in our collection, we have a great history of providing 
                        tank farms with bulk premium fuel. For each supply, we develop and build distinct supply 
                        networks and transshipment options. 
                    </p>
                    <div className='services-bullet mt-8'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1' />
                            <p className='text-black'>
                                Ensure uninterrupted operations and eliminates frequent refills.
                            </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1 text-xl'/>
                            <p className='text-black'>
                                Eco-friendly fuel options help reduce the carbon footprint of your operations.
                           </p>
                        </div>
                    </div>
                    <div className='services-bullet mt-4'>
                        <div className='flex gap-2'>
                            <TiTick className='text-green-500 mt-1' />
                            <p className='text-black'>
                                Adherence to safety protocols and environmental regulations
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
                        <img src = {tank} className='h-[420px] w-[100%] rounded-2xl' alt = 'generator' />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default TankFarm