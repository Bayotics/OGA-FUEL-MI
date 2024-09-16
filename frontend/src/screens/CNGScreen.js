import lpg from '../assets/Fuel-me/lpg-img.jpg'
import { Slide } from "react-awesome-reveal";
import { RiCustomerService2Line } from "react-icons/ri";
import { PiLightningLight } from "react-icons/pi";
import { PiSpeedometerLight } from "react-icons/pi";
import { MdOutlinePropaneTank } from 'react-icons/md';
import { IoLeafOutline } from "react-icons/io5";
import cngPic from '../assets/Fuel-me/pngs/cng-pic.png'





const CNGScreen = () => {

    return(
        <div className="fuel-screen-body ">
            <div className="perol-screen-contents py-40 px-24">
                <div className=" petrol-scr-header text-center justify-center flex gap-1">
                    <Slide direction="top" triggerOnce>
                        <h1 className="text-5xl font-normal text-black text-center">
                            Compressed Natural Gas
                        </h1>
                        <MdOutlinePropaneTank className="mt-4 text-2xl text-gray-500 mb-0" />  
                    </Slide>
                </div>
                <div className="mt-36 petrol-scsr-bg ">
                    <div className=" h-[350px] w-full rounded-3xl cng-scr-img pt-3">
                        <div className="text-center mt-24">
                            <h1 className="text-white text-3xl font-medium">
                                Looking for a cleaner alternative to Gasoline and diesel?
                                – <br/>fuelMe brings clean Compressed Natural Gas right to you.
                            </h1>
                            <p className="mt-8 text-white text-xl font-light cng-paragraph-p">
                                Fuel your drive, anywhere, anytime with fuelMe –
                                <br/> Your trusted CNG delivery partner!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-20  petrol-scr-grid">
                    <h1 className="text-black text-center text-3xl font-medium mt-4">Advantages</h1>
                    <div className="flex  mt-20 petrol-scr-grid-contents gap-12 pt-10">
                        <div className="petrol-scr-left w-1/2 px-6 ">
                            <Slide direction="left" triggerOnce>
                                <div className="">
                                    <div className="petrol-scr-icon p-3 bg-blue-600 w-[10%] m-auto rounded-lg">
                                        <IoLeafOutline className="text-3xl text-white font-thin"/>
                                    </div>
                                    <h1 className="text-center text-black font-medium text-2xl mt-10">
                                        Environmentally Friendly
                                    </h1>
                                    <div className="px-12">
                                        <p className="font-light mt-3 text-center">
                                            CNG is known for being a cleaner and more environmentally
                                            friendly alternative to traditional fuels like gasoline and diesel. 
                                            By using FuelMe for your CNG needs, you’re contributing to reducing 
                                            your carbon footprint. 
                                        </p>
                                    </div>
                                </div>
                            </Slide>
                            <div className="mt-16">
                                <Slide direction="left" triggerOnce>
                                    <div className="petrol-scr-icon p-3 bg-blue-600 w-[10%] m-auto rounded-lg">
                                        <PiLightningLight className="text-3xl text-white font-thin"/>
                                    </div>
                                    <h1 className="text-center text-black font-medium text-2xl mt-10">
                                        Fast Delivery
                                    </h1>
                                    <div className="px-12">
                                        <p className="font-light mt-3 text-center">
                                            We pride ourself on our fast and reliable delivery services. 
                                            Once an order is placed, our efficient delivery team works 
                                            quickly to ensure that your gas is delivered on time. 
                                            This punctuality is crucial when you're running low on gas and need a 
                                            refill urgently. 
                                        </p>
                                    </div>
                                </Slide>
                            </div>  
                        </div>
                        <div className="petrol-scr-right w-1/2 px-6 ">
                            <div className="">
                                <Slide direction="right" triggerOnce>
                                    <div className="petrol-scr-icon p-3 bg-blue-600 w-[10%] m-auto rounded-lg">
                                        <PiSpeedometerLight className="text-3xl text-white font-thin"/>
                                    </div>
                                    <h1 className="text-center text-black font-medium text-2xl mt-10">
                                        High Efficiency
                                    </h1>
                                    <div className="px-12">
                                        <p className="font-light mt-3 text-center">
                                            CNG has a higher energy content, as compared to traditional fuels 
                                            like petrol and diesel, providing more efficient mileage 
                                            and engine performance.
                                        </p>
                                    </div> 
                                </Slide>
                            </div>
                            <div className="mt-28">
                                <Slide direction="right" triggerOnce>
                                    <div className="petrol-scr-icon p-3 bg-blue-600 w-[10%] m-auto rounded-lg">
                                        <RiCustomerService2Line className="text-3xl text-white font-thin"/>
                                    </div>
                                    <h1 className="text-center text-black font-medium text-2xl mt-10">
                                        24/7 Customer Support
                                    </h1>
                                    <div className="px-12">
                                        <p className="font-light mt-3 text-center">
                                            At FuelMe, customer satisfaction is paramount. We offer
                                            24/7 customer support to ensure that every customer’s question, 
                                            concern, or emergency is promptly addressed. Whether you need help 
                                            placing an order, want to track a delivery, or need technical 
                                            assistance with gas management, FuelMe’s support team is always 
                                            just a phone call or email away.
                                        </p>
                                    </div>
                                </Slide>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-32  petrol-scr-texts">
                    <div className="flex petrol-promo gap-20 mt-16">
                        <div className="petrol-promo-img w-1/2 pt-8">
                            <Slide direction="left" triggerOnce>
                                <img src = {cngPic} alt="petrol" className="rounded-3xl mt-20"/>
                            </Slide>
                        </div>
                        <div className="petrol-promo-txt w-1/2">
                            <Slide direction="right" triggerOnce>
                                <h1 className="text-black text-3xl mt-8 font-medium">
                                    Benefits of CNG from FuelMe
                                </h1>
                                <h1 className="mt-12 font-light ">
                                    Choosing FuelMe for your CNG gas delivery is the smartest and most convenient 
                                    way to fuel up. With FuelMe, you can say goodbye to long waits at the gas 
                                    station and enjoy the comfort of having clean, eco-friendly CNG delivered 
                                    directly to your doorstep. We offer a hassle-free, time-saving solution with 
                                    reliable and timely service, ensuring you never run out of gas. 
                                    <br/><br/>
                                    Our professional team is committed to providing top-quality fuel at 
                                    competitive prices, and with just a few taps on your phone, 
                                    FuelMe brings you the future of energy delivery—safe, efficient, and eco-conscious. 
                                    Make the switch today and experience the convenience of FuelMe!
                                </h1>   
                            </Slide>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CNGScreen