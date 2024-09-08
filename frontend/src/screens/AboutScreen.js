import { RiGasStationLine } from "react-icons/ri";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import suleiman from '../assets/Fuel-me/suleiman.jpg'
import sadiq from '../assets/Fuel-me/sadiq.jpg'
import adebayo from '../assets/Fuel-me/adebayo.jpg'

import fuelMeTruck from '../assets/Fuel-me/pngs/about-left.png'
import { Link } from "react-router-dom";
import TestimonialSlider from "../components/TestimonialSlider";


const AboutScreen = () => {

  return (
    <div className="about-scr-main pb-40 ">
      <div className="about-scr-cover py-20 text-center">
        <div className="about-scr-head w-[20%] m-auto ">
          <RiGasStationLine className="mb-2 text-white text-5xl m-auto"/>
          <h1 className="about-scr-heading-txt text-white font-semibold text-5xl">About Us</h1>
        </div>
      </div>
      <div className="mt-20 px-12">
        <div className="about-scr-intro-contents flex border">
          <div className="about-scr-intro-img border w-1/2">
            <img src = {fuelMeTruck} alt="fuel truck" className="h-[85%] rounded-2xl"/>
          </div>
          <div className="about-scr-intro-texts border w-1/2">
            <div className="">
              <h1 className="text-black text-4xl font-normal">
                Welcome to FuelMe. We are the 
                <span className="text-[#1a2eeb]"> largest and the most popular </span> 
                home fuel delivery company in Lagos.
                <br/><br/>
              </h1>
              <p className="text-lg leading-normal font-light">
                At FuelMe, we believe in revolutionizing the way you power your life by making fuel delivery simple, 
                reliable, and convenient. Founded with the goal of eliminating the hassle of traditional fueling 
                methods, FuelMe offers a seamless experience by delivering high-quality fuel directly to your location.
                <br/><br/> 
                Whether it's petrol, diesel, or CNG, our service is designed to save you time, reduce stress, 
                and keep your vehicles running smoothly without the need to visit a fuel station.
                Our commitment to innovation and customer satisfaction drives everything we do. With a team of 
                experienced professionals and a fleet of eficient delivery vehicles, we ensure fast, efficient, 
                and safe fuel delivery at competitive prices. <br/><br/>
                At FuelMe, we understand the importance of reliable 
                service, which is why we prioritize promptness, fuel quality, and safety in every delivery. 
                By utilizing the latest technology, we make it easy for customers to order fuel with just a few 
                taps on their phone, ensuring that you’re always fueled up and ready to go.
              </p>
            </div>
            <div className="mt-4 about-scr-intro-btn">
              <Link to = "/contactus">
                <button
                  className=" bg-[#1a2eeb] px-7 py-3 rounded-md text-white hover:bg-[#5b6fc9] flex gap-3">
                  Get in touch <HiMiniArrowRightCircle className="mt-1"/> 
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fuelme-values mt-20 px-12">
        <h1 className="text-center font-semibold text-4xl text-black">Our Values</h1>
        <div className="fuelme-values-content flex mt-10 gap-10">
          <div className="fuelme-values-card w-1/3 border px-4 pt-8 pb-12 rounded-xl border-gray-300 shadow-xl
            bg-gradient-to-r from-sky-50 to-white">
            <div className="fuelme-values-card-icon m-auto w-[15%] py-2 border rounded-full bg-blue-200">
              <TbTargetArrow className="text-4xl m-auto"/>
            </div>
            <div className="px-8">
              <h1 className="text-center text-black text-2xl mt-4">Mission</h1>
              <p className="text-center font-light leading-normal mt-4">
                to redefine fuel delivery by offering convenient, safe, and reliable access to high-quality
                fuel anytime, anywhere. At FuelMe, we fuel your journey, wherever it takes you.
              </p>
            </div>
          </div>
          <div className="fuelme-values-card w-1/3 border px-4 pt-8 pb-12 rounded-xl border-gray-300 shadow-xl
            bg-white">
            <div className="fuelme-values-card-icon m-auto w-[15%] py-2 border rounded-full bg-blue-200">
              <FaRegEye className="text-4xl m-auto"/>
            </div>
            <div className="px-8">
              <h1 className="text-center text-black text-2xl mt-4">Vision</h1>
              <p className="text-center font-light leading-normal mt-4">
                To lead the transformation of the fueling industry by becoming the most trusted and innovative
                fuel delivery service globally.
              </p>
            </div>
          </div>
          <div className="fuelme-values-card w-1/3 border px-4 pt-8 pb-12 rounded-xl border-gray-300 shadow-xl
            bg-gradient-to-r from-white to-sky-50">
            <div className="fuelme-values-card-icon m-auto w-[15%] py-2 border rounded-full bg-blue-200">
              <IoDiamondOutline className="text-4xl m-auto"/>
            </div>
            <div className="px-8">
              <h1 className="text-center text-black text-2xl mt-4">Values</h1>
              <p className="text-center font-light leading-normal mt-4">
                Our values are centered on innovation, reliability, and sustainability. We are dedicated 
                to delivering more than just fuel—we deliver convenience, trust, and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fuelme-team mt-32 px-12">
        <h1 className="text-center font-semibold text-4xl text-black">Our Team</h1>
        <div className="team-content flex mt-20 px-24">
          <div className="team-card w-1/3">
            <h1 className="text-2xl text-black text-center">Adebayo Shobaloju</h1>
            <p className="text-base font-medium text-center mt-2">CHIEF TECHNOLOGY OFFICER </p>
            <div className="team-card-img mt-10">
              <img src= {suleiman} alt="Ceo & Founder" className="h-[80%] w-[80%] m-auto rounded-2xl"/>
            </div>
          </div>
          <div className="team-card w-1/3">
            <div className="team-card-img">
              <img src= {sadiq} alt="Ceo & Founder" className="h-[80%] w-[80%] m-auto rounded-2xl"/>
            </div>
            <h1 className="text-2xl text-black text-center mt-10">Balogun Suleiman</h1>
            <p className="text-base font-medium text-center mt-2">FOUNDER & CEO</p>
          </div>
          <div className="team-card w-1/3">
            <h1 className="text-2xl text-black text-center">Sadiq Adeyanju</h1>
            <p className="text-base font-medium text-center mt-2">LOGISTICS MANAGER</p>
            <div className="team-card-img mt-10">
              <img src= {adebayo} alt="Ceo & Founder" className="h-[80%] w-[80%] m-auto rounded-2xl"/>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <TestimonialSlider />
      </div>
    </div>
  )
}

export default AboutScreen