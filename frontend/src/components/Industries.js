import residential from '../assets/Fuel-me/residential.jpg';
import fleet from '../assets/Fuel-me/fleet.jpg';
import manufacturing from '../assets/Fuel-me/manufacturing.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import { Slide } from 'react-awesome-reveal';


const Industries = () => {
    return(
        <ScrollAnimation animateIn='fadeIn'>
            <div>
                <div className=" pt-16 px-16 pb-16">
                        <div className="flex industry-heading justify-between">

                            <div className="px-10 w-1/2">
                                <Slide direction='left'>
                                    <h1 className="text-6xl font-bold">Sectors we <br/> <span className="text-[#1a2eeb]">work</span> with.</h1>
                                </Slide>
                            </div>
                            <div className="w-1/2 pl-10">
                                <Slide direction='right'>
                                    <h1 className="font-semibold text-lg">At Fuel Me, we cater to a diverse range of industries that rely on efficient and reliable
                                        fuel delivery services. You can count on our seamless ordering experience, allowing you to focus on what matters most—keeping your business running 
                                        smoothly.
                                    </h1>
                                </Slide>
                               
                            </div>
                        </div>
                        <div className="industry-cards flex gap-36 mt-28">
                            <div className="w-1/3">
                                <div className=" residential-ind rounded-3xl ind-card">
                                </div>
                                <h1 className='text-center text-3xl font-normal mt-6'>Residential</h1>
                                <div className='text-center'>
                                    <button className='ind-btn mt-4 '>Learn More →</button>
                                </div>
                                
                            </div>
                            
                            <div className="w-1/3">
                                <div className=" manufacturing-ind rounded-3xl ind-card">
                                </div>
                                <h1 className='text-center text-3xl font-normal mt-6'>Manufacturing</h1>
                                <div className='text-center'>
                                    <button className='ind-btn mt-4 '>Learn More →</button>
                                </div>
                            </div>
                            <div className="w-1/3">
                                <div className=" fleet-ind rounded-3xl ind-card">
                                </div>
                                <h1 className='text-center text-3xl font-normal mt-6'>Commercial Fleets</h1>
                                <div className='text-center'>
                                    <button className='ind-btn mt-4 '>Learn More →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" pt-16 px-16 pb-16">
                        <div className="flex industry-heading justify-between">
                            <div className="px-10 w-1/2">
                                <Slide direction='left'>
                                    <h1 className="text-6xl font-bold">Our <br/> <span className="text-[#1a2eeb]">Products.</span></h1>
                                </Slide>
                            </div>
                            <div className="w-1/2 pl-10">
                                <Slide direction='right'>
                                    <h1 className="font-semibold text-lg">We provide a wide range of high-quality 
                                        fuel solutions tailored to meet your needs. Whether you're looking for premium 
                                        gasoline, diesel, or CNG, our products are sourced from trusted suppliers to 
                                        ensure optimal performance and efficiency
                                    </h1>
                                </Slide>
                            </div>
                        </div>
                        <div className="industry-cards flex gap-36 mt-28">
                            <div className="w-1/3">
                                <div className=" diesel-ind rounded-3xl ind-card">
                                </div>
                                <h1 className='text-center text-3xl font-normal mt-6'>Diesel</h1>
                                <div className='text-center'>
                                    <button className='ind-btn mt-4 '>Learn More →</button>
                                </div>
                                
                            </div>
                            <div className="w-1/3">
                                <div className=" gasoline-ind rounded-3xl ind-card">
                                </div>
                                <h1 className='text-center text-3xl font-normal mt-6'>Gasoline</h1>
                                <div className='text-center'>
                                    <button className='ind-btn mt-4 '>Learn More →</button>
                                </div>
                            </div>
                            <div className="w-1/3">
                                <div className=" cng-ind rounded-3xl ind-card">
                                </div>
                                <h1 className='text-center text-3xl font-normal mt-6'>CNG & LPG</h1>
                                <div className='text-center'>
                                    <button className='ind-btn mt-4 '>Learn More →</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        
        
    )
}

export default Industries