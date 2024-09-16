import { LuFuel } from "react-icons/lu"
import petrol from '../assets/Fuel-me/pngs/petrol-fuel-attendant.png'
import { Slide } from "react-awesome-reveal";
import { CiTimer } from "react-icons/ci";
import { PiThumbsUpLight } from "react-icons/pi";
import { PiUsersThreeThin } from "react-icons/pi";
import { TbCurrencyNaira } from "react-icons/tb";
import { Helmet } from "react-helmet-async";




const FuelScreen = () => {

    return(
        <div className="fuel-screen-body ">
            <Helmet>
                <title>Petrol</title>
            </Helmet>
            <div className="perol-screen-contents py-40 px-24">
                <div className=" petrol-scr-header text-center justify-center flex gap-1">
                    <Slide direction="top" triggerOnce>
                        <h1 className="text-5xl font-normal text-black text-center">Petrol</h1>
                        <LuFuel className="mt-4 text-2xl text-gray-500 mb-0" />  
                    </Slide>
                </div>
                <div className="mt-36 petrol-scr-bg ">
                    <div className=" h-[350px] w-full rounded-3xl petrol-scr-img pt-3">
                        <div className="text-center mt-24">
                            <h1 className="text-white text-3xl font-medium">
                                FuelMe – Premium Petrol, <br />Delivered Fast. No Detours!
                            </h1>
                            <p className="mt-8 text-white text-xl font-light">
                                Need premium quality Petrol? Just Tap <br />& FuelMe Does the Rest!
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
                                        <CiTimer className="text-3xl text-white font-thin"/>
                                    </div>
                                    <h1 className="text-center text-black font-medium text-2xl mt-10">
                                        Time Saving
                                    </h1>
                                    <div className="px-12">
                                        <p className="font-light mt-3 text-center">
                                            We eliminate the inconvenience of visiting petrol stations. You no longer 
                                            have to spend precious time stuck in queues or searching for stations during
                                            peak hours. With just a few clicks on the FuelMe website or app, you can schedule
                                            your fuel delivery whenever and wherever it's needed.
                                        </p>
                                    </div>
                                </div>
                            </Slide>
                            <div className="mt-16">
                                <Slide direction="left" triggerOnce>
                                    <div className="petrol-scr-icon p-3 bg-blue-600 w-[10%] m-auto rounded-lg">
                                        <PiThumbsUpLight className="text-3xl text-white font-thin"/>
                                    </div>
                                    <h1 className="text-center text-black font-medium text-2xl mt-10">
                                        Reliable Service
                                    </h1>
                                    <div className="px-12">
                                        <p className="font-light mt-3 text-center">
                                            The reliability of FuelMe's service is a game-changer for customers. 
                                            Unlike petrol stations that may be closed or out of fuel during off-peak hours,
                                            FuelMe operates on your schedule.
                                        </p>
                                    </div>
                                </Slide>
                            </div>  
                        </div>
                        <div className="petrol-scr-right w-1/2 px-6 ">
                            <div className="">
                                <Slide direction="left" triggerOnce>
                                    <div className="petrol-scr-icon p-3 bg-blue-600 w-[10%] m-auto rounded-lg">
                                        <TbCurrencyNaira className="text-3xl text-white font-thin"/>
                                    </div>
                                    <h1 className="text-center text-black font-medium text-2xl mt-10">
                                        Competitive Pricing
                                    </h1>
                                    <div className="px-12">
                                        <p className="font-light mt-3 text-center">
                                            With FuelMe, you’ll enjoy competitive pricing and complete transparency
                                            when it comes to costs. Traditional petrol stations sometimes raise prices
                                            unexpectedly or have hidden charges for extra services. 
                                            FuelMe is committed to providing clear, upfront pricing, 
                                            so you’ll always know exactly what you’re paying for. 
                                            No surprises, no hidden fees
                                        </p>
                                    </div> 
                                </Slide>
                            </div>
                            <div className="mt-16">
                                <Slide direction="left" triggerOnce>
                                    <div className="petrol-scr-icon p-3 bg-blue-600 w-[10%] m-auto rounded-lg">
                                        <PiUsersThreeThin className="text-3xl text-white font-thin"/>
                                    </div>
                                    <h1 className="text-center text-black font-medium text-2xl mt-10">
                                        User-Friendly Technology
                                    </h1>
                                    <div className="px-12">
                                        <p className="font-light mt-3 text-center">
                                            Ordering from FuelMe is incredibly simple, thanks to our user-friendly
                                            website and app. Designed with ease of use in mind, the FuelMe platform
                                            allows customers to schedule, track, and manage their fuel deliveries with
                                            just a few taps.
                                        </p>
                                    </div>
                                </Slide>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-32  petrol-scr-texts">
                    <div className="flex petrol-promo gap-20 mt-16">
                        <div className="petrol-promo-img w-1/2 px-10">
                            <Slide direction="left" triggerOnce>
                                <img src = {petrol} alt="petrol" className="rounded-3xl"/>
                            </Slide>
                        </div>
                        <div className="petrol-promo-txt w-1/2">
                            <Slide direction="left" triggerOnce>
                                <h1 className="text-black text-3xl mt-4 font-medium">
                                    Benefits of Petrol from FuelMe
                                </h1>
                                <h1 className="mt-6 font-light ">
                                    Imagine never having to worry about waiting in long lines at petrol stations or dealing 
                                    with unexpected fuel shortages. With FuelMe, your petrol comes to you, wherever you are, 
                                    saving you time and hassle. Whether you're at home, at work, or on the road,
                                    FuelMe guarantees fast, reliable fuel delivery, so you can stay focused on what matters most.
                                    <br/><br/>
                                    Our premium petrol is just a tap away, delivered straight to your vehicle with the highest 
                                    safety standards in mind. Skip the stress, avoid unnecessary detours, and let FuelMe ensure 
                                    you're always fueled and ready to go. Trust FuelMe to bring convenience, reliability, 
                                    and peace of mind right to your doorstep.
                                </h1>   
                            </Slide>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FuelScreen