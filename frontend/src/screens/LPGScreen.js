import lpg from '../assets/Fuel-me/lpg-img.jpg'
import { Slide } from "react-awesome-reveal";
import { RiCustomerService2Line } from "react-icons/ri";
import { PiLightningLight } from "react-icons/pi";
import { AiOutlineSafety } from "react-icons/ai";
import { PiThumbsUpLight } from "react-icons/pi";
import { GiGasStove } from 'react-icons/gi';





const LPGScreen = () => {

    return(
        <div className="fuel-screen-body ">
            <div className="perol-screen-contents py-40 px-24">
                <div className=" petrol-scr-header text-center justify-center flex gap-1">
                    <Slide direction="top" triggerOnce>
                        <h1 className="text-5xl font-normal text-black text-center">
                            Liquefied Petroleum Gas
                        </h1>
                        <GiGasStove className="mt-4 text-2xl text-gray-500 mb-0" />  
                    </Slide>
                </div>
                <div className="mt-36 petrol-scsr-bg ">
                    <div className=" h-[350px] w-full rounded-3xl lpg-scr-img pt-3">
                        <div className="text-center mt-24">
                            <h1 className="text-white text-3xl font-medium">
                                FuelMe: Your Reliable Liquefied Petroleum Gas Partner, 
                                <br/> Delivered Right to Your Doorstep!
                            </h1>
                            <p className="mt-8 text-white text-xl font-light">
                                FuelMe Delivers LPG On-Time, Every Time – 
                                <br/> Because Your Comfort Matters!
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
                                        <PiThumbsUpLight className="text-3xl text-white font-thin"/>
                                    </div>
                                    <h1 className="text-center text-black font-medium text-2xl mt-10">
                                        Convenience
                                    </h1>
                                    <div className="px-12">
                                        <p className="font-light mt-3 text-center">
                                            Ordering LPG gas from FuelMe eliminates the hassle of visiting
                                            physical stores to refill or replace your gas cylinder. 
                                            With just a few clicks on the FuelMe website, you can schedule a 
                                            delivery right to your doorstep.
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
                                        <AiOutlineSafety className="text-3xl text-white font-thin"/>
                                    </div>
                                    <h1 className="text-center text-black font-medium text-2xl mt-10">
                                        Safety
                                    </h1>
                                    <div className="px-12">
                                        <p className="font-light mt-3 text-center">
                                            LPG can be hazardous if not handled correctly, but our trained 
                                            professionals ensure that each cylinder is delivered and installed 
                                            safely. Our team is certified to handle LPG gas with the highest safety 
                                            standards in mind, providing customers with peace of mind. 
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
                                <img src = {lpg} alt="petrol" className="rounded-3xl"/>
                            </Slide>
                        </div>
                        <div className="petrol-promo-txt w-1/2">
                            <Slide direction="right" triggerOnce>
                                <h1 className="text-black text-3xl mt-8 font-medium">
                                    Benefits of LPG from FuelMe
                                </h1>
                                <h1 className="mt-12 font-light ">
                                    We are dedicated to providing a seamless and efficient solution for your cooking gas
                                    needs, ensuring that you never run out of LPG when you need it most. As your 
                                    reliable LPG delivery partner, we understand the importance of convenience, safety,
                                    and efficiency in your everyday cooking experience. 
                                    <br /> <br />
                                    We offer an on-demand, hassle-free delivery service, allowing you 
                                    to order LPG from the comfort of your home or workplace. No more trips to the 
                                    gas station or lugging heavy cylinders around. 
                                    With just a few taps on your phone or a quick call, your 
                                    LPG will be delivered directly to your doorstep at your preferred time. 
                                </h1>   
                            </Slide>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LPGScreen