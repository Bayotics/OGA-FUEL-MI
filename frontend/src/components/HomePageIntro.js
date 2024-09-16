import { Link } from 'react-router-dom';
import HomePagegeSvg from "./HomePageSvg"
import introPic from '../assets/Fuel-me/pngs/intro-pic.png'
import { Zoom } from 'react-awesome-reveal'


const HomePageIntro = () => {
    return(
        <div className="flex justify-between home-intro-main">
            <div className="home-intro-texts pl-24 py-12 w-1/2">
                <h1 className="text-7xl font-extrabold leading-[120%] intro-h">
                    Fuel up <br /> at your own
                </h1>
                <h1 className="text-7xl font-extrabold leading-[120%] text-[#1a2eeb] intro-h">convenience.</h1>
                <p className="font-medium text-xl mt-8 intro-page-p">Manage, Order, and Track your Fuel like Never Before. <br />
                   Experience seamless fuel ordering anywhere in <span className="text-[#1a2eeb]">Lagos</span><br />
                   with Fuel Me, your trusted fuel delivery service.
                </p>
                <div className="home-svg mt-6">
                    <HomePagegeSvg />
                </div>
                <div className="home-intro-grid-text flex justify-between gap-6 mt-10">
                    <div className="w-1/2 higt-a">
                        <h1 className="text-2xl font-semibold">Same day Delivery</h1>
                        <p className="text-lg font-medium mt-6 hiop-mini"> 
                            Need fuel today? <br/>
                            Tell us your fuel requirements, <br/>and the time and place you need it.
                        </p>
                        <Link to = "/search?category=all&query=all&price=all&rating=all&order=newest&page=1" 
                            className="cursor-pointer text-lg text-[#1a2eeb] font-medium">
                            <p className='mt-8 hiob'>Order Now</p>
                        </Link>
                    </div>
                    <div  className="w-1/2 higt-a">
                        <h1 className="text-2xl font-semibold">Live Order Tracking</h1>
                            <p className="text-lg font-medium mt-6 hiop-mini"> 
                                Get up-to-date notifications when your
                                 order is on the way.Track your order <br /> from start to finish!
                            </p>
                            <Link to = "/search?category=all&query=all&price=all&rating=all&order=newest&page=1" 
                                className="cursor-pointer text-lg text-[#1a2eeb] font-medium">
                                <p className='mt-8 hiob-right'>Order Now</p>
                            </Link>
                    </div>
                </div>
            </div>
            <div className="home-intro-pics w-1/2 pr-12 pl-10 pt-16">
                <Zoom triggerOnce>
                    <img src = {introPic} alt='intro' className='h-[80%]' />
                </Zoom>
            </div>
        </div>
    )
}

export default HomePageIntro