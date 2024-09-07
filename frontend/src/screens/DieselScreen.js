import diesel from '../assets/Fuel-me/pngs/diesel-img.png'
import { Slide } from "react-awesome-reveal";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdTurnSharpRight } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { BsFuelPumpDiesel } from "react-icons/bs";




const DieselScreen = () => {

    return(
        <div className="fuel-screen-body ">
            <div className="perol-screen-contents py-40 px-24">
                <div className=" petrol-scr-header text-center justify-center flex gap-1">
                    <Slide direction="top" triggerOnce>
                        <h1 className="text-5xl font-normal text-black text-center">Diesel</h1>
                        <BsFuelPumpDiesel className="mt-4 text-2xl text-gray-500 mb-0" />  
                    </Slide>
                </div>
                <div className="mt-36 petrol-scsr-bg ">
                    <div className=" h-[350px] w-full rounded-3xl diesel-scr-img pt-3">
                        <div className="text-center mt-24">
                            <h1 className="text-white text-3xl font-medium">
                                Quick, Convenient, Dependable - <br />That’s fuelMe Diesel Delivery!
                            </h1>
                            <p className="mt-8 text-white text-xl font-light">
                                Never Run Out! Get Diesel Delivered Fast with fuelMe. 
                                <br />Where You Need It, When you need it
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
                                        <VscWorkspaceTrusted className="text-3xl text-white font-thin"/>
                                    </div>
                                    <h1 className="text-center text-black font-medium text-2xl mt-10">
                                        High Quality
                                    </h1>
                                    <div className="px-12">
                                        <p className="font-light mt-3 text-center">
                                            Quality control is a top priority at FuelMe. Diesel fuel quality
                                            can vary, and using substandard fuel can harm your engines, 
                                            cause inefficiencies, and lead to costly repairs. By ordering
                                            from FuelMe, customers are assured of premium-grade diesel 
                                            that meets industry standards.
                                        </p>
                                    </div>
                                </div>
                            </Slide>
                            <div className="mt-16">
                                <Slide direction="left" triggerOnce>
                                    <div className="petrol-scr-icon p-3 bg-blue-600 w-[10%] m-auto rounded-lg">
                                        <MdTurnSharpRight className="text-3xl text-white font-thin"/>
                                    </div>
                                    <h1 className="text-center text-black font-medium text-2xl mt-10">
                                        Flexible
                                    </h1>
                                    <div className="px-12">
                                        <p className="font-light mt-3 text-center">
                                            FuelMe caters to a wide variety of industries and customer needs.
                                            Whether you need diesel for commercial vehicles, construction equipment,
                                            or backup generators, FuelMe can accommodate your fuel requirements
                                            with ease.
                                        </p>
                                    </div>
                                </Slide>
                            </div>  
                        </div>
                        <div className="petrol-scr-right w-1/2 px-6 ">
                            <div className="">
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
                                            assistance with fuel management, FuelMe’s support team is always 
                                            just a phone call or email away.
                                        </p>
                                    </div> 
                                </Slide>
                            </div>
                            <div className="mt-16">
                                <Slide direction="right" triggerOnce>
                                    <div className="petrol-scr-icon p-3 bg-blue-600 w-[10%] m-auto rounded-lg">
                                        <AiOutlineSafety className="text-3xl text-white font-thin"/>
                                    </div>
                                    <h1 className="text-center text-black font-medium text-2xl mt-10">
                                        Safety and Compliance
                                    </h1>
                                    <div className="px-12">
                                        <p className="font-light mt-3 text-center">
                                            We ensure that all deliveries comply with industry regulations
                                            and safety standards. Our drivers are trained professionals who follow
                                            strict protocols to ensure that the fuel is delivered and handled safely.
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
                                <img src = {diesel} alt="petrol" className="rounded-3xl"/>
                            </Slide>
                        </div>
                        <div className="petrol-promo-txt w-1/2">
                            <Slide direction="right" triggerOnce>
                                <h1 className="text-black text-3xl mt-4 font-medium">
                                    Benefits of Diesel from FuelMe
                                </h1>
                                <h1 className="mt-6 font-light ">
                                    FuelMe is your trusted partner in ensuring you never run out of diesel 
                                    when you need it most. Forget the hassle of managing trips to the fuel 
                                    station. With our efficient delivery 
                                    system, we bring diesel directly to your location, saving you time, energy, 
                                    and resources. Our services are tailored to meet your specific needs. 
                                    By choosing FuelMe, you also gain access 
                                    to premium quality fuel.<br/><br/> We understand how critical it is for your 
                                    businesses to operate smoothly, and poor fuel quality can lead to 
                                    costly repairs and inefficiencies. With FuelMe, you can rest assured 
                                    that every drop of diesel delivered meets the highest standards of performance. 
                                    Our fuel is sourced from trusted suppliers and undergoes rigorous quality 
                                    checks to ensure optimal performance in your equipment and vehicles.
                                </h1>   
                            </Slide>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DieselScreen