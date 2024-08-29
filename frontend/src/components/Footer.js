import facebook from '../assets/Fuel-me/pngs/facebook.png'
import instagram from '../assets/Fuel-me/pngs/instagram.png'
import x from '../assets/Fuel-me/pngs/twitter.png'
import whatsapp from '../assets/Fuel-me/pngs/whatsapp.png'
import { Link } from 'react-router-dom';
import logo from '../assets/Fuel-me/pngs/logo.png'



const Footer = () => {
    return(
        <div className="footer-main px-32 text-black bg-gradient-to-r from-transparent via-blue-100 to-transparent">
            <div>
                <div className="footer-contents  -t pt-16 pb-8 px-32 flex justify-between">
                    <div className="footer-title  ">
                        <div className="footer-title-icon">
                            <img className="fuelme-logo-main" src = {logo} alt="fuel-me-logo" />
                        </div>
                        <h1 className="mt-4 font-medium">...Fuel up at your own <br/> convenience</h1>
                        <p className="mt-4 text-xs">&copy; 2024</p>
                    </div>
                    <div className="footer-menu   mt-1">
                        <h1 className="text-xl font-medium text-[#1a2eeb]">Company</h1>
                        <div className="mt-4">
                            <Link to= '/about'>
                                <p className="text-sm ">About us</p>
                            </Link>
                            <Link to= '/services'>
                                <p className="text-sm mt-2">Our Services</p>
                            </Link>
                            <Link to= '/search?category=all&query=all&price=all&rating=all&order=newest&page=1'>
                                <p className="text-sm mt-2">Order fuel</p>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="footer-menu   mt-1">
                        <h1 className="text-xl font-medium text-[#1a2eeb]">Quick Links</h1>
                        <div className="mt-4">
                        <Link to= '/contact'>
                                <p className="text-sm">Contact us</p>
                            </Link>
                            <Link to= '/faqs'>
                                <p className="text-sm mt-2">FAQs</p>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="footer-title  ">
                        <h1 className="text-xl font-medium text-[#1a2eeb]">Socials</h1>
                        <div className="flex gap-3 mt-4">
                            <img className='h-4 mt-[3px]' src = {facebook} alt="facebook" />
                            <p>Facebook</p>
                        </div>
                        <div className="flex gap-3 mt-2">
                            <img className='h-4 mt-[3px]' src = {instagram} alt="facebook" />
                            <p>Instagram</p>
                        </div>
                        <div className="flex gap-3 mt-2">
                            <img className='h-4 mt-[3px]' src = {x} alt="facebook" />
                            <p>Twitter</p>
                        </div>
                        <div className="flex gap-3 mt-2">
                            <img className='h-4 mt-[3px]' src = {whatsapp} alt="facebook" />
                            <p>Whatsapp</p>
                        </div>
                    </div>
                </div>
                <p className='text-xs text-gray-600 text-right mt-10'>Copyright © 2024. Fuel me. All Rights Reserved. Design by  
                <Link to= 'https://twitter.com/unclebayotics'> unclebayotics</Link> </p>
            </div>
            
            
        </div>
    )
}

export default Footer