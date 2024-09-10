
import { Bounce, Slide } from "react-awesome-reveal";
import { RiGasStationLine } from "react-icons/ri";
import { RiFireFill } from "react-icons/ri";
import { Helmet } from 'react-helmet-async';
import ServicesTab from "../components/ServicesTab";
import services from '../assets/Fuel-me/services.jpg'



const ServicesScreen = () => {
    return (
        <div className="about-scr-main pb-40 ">
            <Helmet>
                <title>Our Services</title>
            </Helmet>
            <div className="about-scr-cover py-20 text-center">
                <div className="about-scr-head w-[25%] m-auto ">
                    <Slide direction="down" triggerOnce>
                        <RiFireFill className="mb-2 text-white text-5xl m-auto"/>
                        <h1 className="about-scr-heading-txt text-white font-semibold text-5xl">Our Services</h1>
                    </Slide>
                </div>
            </div>
            <div className="services-intro mt-32 px-10">
                <h1 className="text-black font-semibold text-4xl text-center">
                    We offer the best fuel delivery solutions 
                </h1>
                <div className="services-intro-head flex gap-12 mt-20">
                    <div className="services-intro-texts w-1/2 px-4">
                        <Slide direction="left" triggerOnce>
                            <p className="mt-20 text-lg leading-normal">
                                At fuelMe, we offer reliable and convenient fuel delivery services directly 
                                to your location, whether it’s your home, business, or worksite. Our team 
                                ensures that your vehicles and equipment are fueled on time, allowing you to 
                                focus on what matters most. With our easy-to-use online booking system, you can 
                                schedule deliveries at your convenience, ensuring you never run out of fuel. 
                                We cater to both individuals and businesses, providing gasoline, diesel, and 
                                other fuel types at competitive prices.
                            </p>
                        </Slide>
                    </div>
                    <div className="services-intro-img w-1/2">
                        <Slide direction="left" triggerOnce>
                            <img className="h-[400px] w-full rounded-3xl" src = {services} alt = "our services" />
                        </Slide>
                    </div>
                </div>
            </div>
            <div className="services-section mt-32 px-6">
                <h1 className="text-black font-semibold text-4xl text-center mt-20">Explore Our Services</h1>
                <div className="mt-16">
                    <ServicesTab />
                </div>
            </div>
        </div>
    )
}

export default ServicesScreen