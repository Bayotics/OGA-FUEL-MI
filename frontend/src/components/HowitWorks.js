import app from '../assets/Fuel-me/pngs/fuel-me-app.png'
import checkout from '../assets/Fuel-me/pngs/checkout.png'
import deliveryTruck from '../assets/Fuel-me/pngs/delivery-truck.png'
import tracking from '../assets/Fuel-me/pngs/tracking.png';
import send from '../assets/Fuel-me/pngs/send.png'
import ScrollAnimation from 'react-animate-on-scroll';
import { Zoom } from 'react-awesome-reveal';





const HowitWorks = () => {
    return(
        <ScrollAnimation animateIn='fadeIn'>
            <div className="how-it-works-main   bg-[#f1f1f1] pt-36 pb-16">
                <div className="hiw-texts   px-36">
                    <h1 className='text-center text-6xl font-bold text-black'>How Fuelme works</h1>
                    <p className='text-center font-medium text-lg mt-10'>Fuel Me simplifies the process of ordering fuel.
                        Simply create your profile, enter your location, <br/>select the type and quantity of fuel you need, 
                        and thats it! We'll take care of the rest.
                    </p>
                </div>
                <div  className='flex hiw-design   px-20 mt-32'>
                        <div className='hiw-icons-left   w-1/3 mt-10'>
                            <Zoom triggerOnce>
                                <div>
                                    <div className='hiw-ico w-1/2 m-auto  '>
                                        <img src={checkout} alt = "check out" className='m-auto' />
                                    </div>
                                    <div className='px-6 text-center mt-6'>
                                        <h1 className='text-[#1a2eeb] font-bold text-3xl'>01. Place Order</h1>
                                        <p className='font-medium mt-2'>Once you have placed your order online, we will begin attending to 
                                            you right away</p>
                                    </div>
                                </div>
                            </Zoom>
                            <Zoom triggerOnce>
                            <div className='mt-16 hiw-three'>
                                <div className='hiw-ico w-1/2 m-auto  '>
                                    <img src={deliveryTruck} alt = "check out" className='m-auto' />
                                </div>
                                <div className='px-6 text-center mt-6 '>
                                    <h1 className='text-[#1a2eeb] font-bold text-3xl'>03. Order Dispatched for delivery</h1>
                                    <p className='font-medium mt-2'>Once order has been accepted by the supplier, 
                                        we notify you when the order is out for delivery</p>
                                </div>
                            </div>
                            </Zoom>
                        </div>
                    <div className='hiw-app   w-1/3'>
                        <img src={app} alt='fuelme app' />
                    </div>
                        <div className='hiw-icons-left   w-1/3 mt-10'>
                            <Zoom triggerOnce duration={200}>
                                <div className='hiw-two'>
                                    <div className='hiw-ico w-1/2 m-auto  '>
                                        <img src={send} alt = "check out"className='m-auto' />
                                    </div>
                                    <div className='px-6 text-center mt-6'>
                                        <h1 className='text-[#1a2eeb] font-bold text-3xl'>02. Order sent to Vendor</h1>
                                        <p className='font-medium mt-2'>Your order is being sent promptly to the vendor that is best
                                            suited for your fuelling needs.</p>
                                    </div>
                                </div>
                            </Zoom>
                            <Zoom triggerOnce>
                                <div className='mt-6 hiw-four'>
                                    <div className='hiw-ico w-1/2 m-auto  '>
                                        <img src={tracking} alt = "check out" className='m-auto' />
                                    </div>
                                    <div className='px-6 text-center mt-6'>
                                        <h1 className='text-[#1a2eeb] font-bold text-3xl'>04. Real-Time Tracking</h1>
                                        <p className='font-medium mt-2'>Get up-to-date notifications when your order is on the way.Track your order
                                        from start to finish!</p>
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                </div>
            </div>
        </ScrollAnimation>
        
    )
}

export default HowitWorks