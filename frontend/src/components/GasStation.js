import ScrollAnimation from "react-animate-on-scroll"
import fillingstation from '../assets/Fuel-me/fuel-comes-to-you.jpg'
import { Link } from "react-router-dom"

const GasStation = () => {
    return(
        <ScrollAnimation animateIn="fadeIn" duration={1.5}>
            <div className="gas-main flex">
                <div className="gas-img-a w-1/2">
                    <img src={fillingstation} alt="fuel station" className="h-[100%] fuel-station-img-cover" />
                </div>
                <div className="gas-txt w-1/2 bg-[#1a2eeb] pl-24 pr-40 py-14">
                    <h1 className="text-white font-semibold text-4xl leading-tight">NOW, <br/>THE FILLING STATION
                    COMES TO YOU</h1>
                    <div className="gas-btns flex gap-10 mt-6">
                        <div className="gas-btn">
                            <Link to = '/search?category=all&query=all&price=all&rating=all&order=newest&page=1'>
                                <button className="text-black px-6 py-4 bg-white rounded-full hover:border-2 hover:text-white font-medium hover:bg-[#1a2eeb] transition duration-500">Fuel my Gen</button>
                            </Link>
                        </div>
                        <div className="gas-btn">
                            <Link to = '/search?category=all&query=all&price=all&rating=all&order=newest&page=1'>
                                <button className="text-white px-6 py-4 hover:border-transparent bg-transparent border-2 rounded-full hover:border-none hover:text-black font-medium hover:bg-white transition duration-500">Fuel my Ride</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        
    )
}

export default GasStation