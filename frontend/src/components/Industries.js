import residential from '../assets/Fuel-me/residential.jpg';
import fleet from '../assets/Fuel-me/fleet.jpg';
import manufacturing from '../assets/Fuel-me/manufacturing.jpg';


const Industries = () => {
    return(
        <div>
            <div className="border pt-16 px-16 pb-16">
                    <div className="flex industry-heading justify-between">
                        <div className="px-10 w-1/2">
                            <h1 className="text-6xl font-bold">Sectors we <br/> <span className="text-[#1a2eeb]">work</span> with.</h1>
                        </div>
                        <div className="w-1/2 border pl-10">
                            <h1 className="font-semibold text-lg">At Fuel Me, we cater to a diverse range of industries that rely on efficient and reliable
                                fuel delivery services. You can count on our seamless ordering experience, allowing you to focus on what matters most—keeping your business running 
                                smoothly.
                            </h1>
                        </div>
                    </div>
                    <div className="industry-cards flex gap-36 mt-28">
                        <div className="w-1/3">
                            <div className="border residential-ind rounded-3xl ind-card">
                            </div>
                            <h1 className='text-center text-3xl font-normal mt-6'>Residential</h1>
                            <div className='text-center'>
                                <button className='ind-btn mt-4 '>Learn More →</button>
                            </div>
                            
                        </div>
                        
                        <div className="w-1/3">
                            <div className="border manufacturing-ind rounded-3xl ind-card">
                            </div>
                            <h1 className='text-center text-3xl font-normal mt-6'>Manufacturing</h1>
                            <div className='text-center'>
                                <button className='ind-btn mt-4 '>Learn More →</button>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div className="border fleet-ind rounded-3xl ind-card">
                            </div>
                            <h1 className='text-center text-3xl font-normal mt-6'>Commercial Fleets</h1>
                            <div className='text-center'>
                                <button className='ind-btn mt-4 '>Learn More →</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border pt-16 px-16 pb-16">
                    <div className="flex industry-heading justify-between">
                        <div className="px-10 w-1/2">
                            <h1 className="text-6xl font-bold">Our <br/> <span className="text-[#1a2eeb]">Products.</span></h1>
                        </div>
                        <div className="w-1/2 border pl-10">
                            <h1 className="font-semibold text-lg">We provide a wide range of high-quality 
                                fuel solutions tailored to meet your needs. Whether you're looking for premium 
                                gasoline, diesel, or CNG, our products are sourced from trusted suppliers to 
                                ensure optimal performance and efficiency
                            </h1>
                        </div>
                    </div>
                    <div className="industry-cards flex gap-36 mt-28">
                        <div className="w-1/3">
                            <div className="border diesel-ind rounded-3xl ind-card">
                            </div>
                            <h1 className='text-center text-3xl font-normal mt-6'>Diesel</h1>
                            <div className='text-center'>
                                <button className='ind-btn mt-4 '>Learn More →</button>
                            </div>
                            
                        </div>
                        <div className="w-1/3">
                            <div className="border gasoline-ind rounded-3xl ind-card">
                            </div>
                            <h1 className='text-center text-3xl font-normal mt-6'>Gasoline</h1>
                            <div className='text-center'>
                                <button className='ind-btn mt-4 '>Learn More →</button>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div className="border cng-ind rounded-3xl ind-card">
                            </div>
                            <h1 className='text-center text-3xl font-normal mt-6'>CNG & LPG</h1>
                            <div className='text-center'>
                                <button className='ind-btn mt-4 '>Learn More →</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        
    )
}

export default Industries