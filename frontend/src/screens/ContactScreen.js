import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet-async';
import location from "../assets/fish/pngs/location.png"
import email from "../assets/fish/pngs/email.png"
import telephone from "../assets/fish/pngs/telephone.png"
import HomePagegeSvg from '../components/HomePageSvg';
import ContactSvg from '../components/ContactSvg';
import { BsTelephone, BsWhatsapp } from 'react-icons/bs';
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
const FORM_ENDPOINT = "https://public.herotofu.com/v1/f1ee8b90-b2d3-11ee-ae0b-a7e011fe96d3";

const ContactScreen = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
      <div className='mt-20 mb-20 py-24 px-52 bg-slate-600'>
        <h2 className='text-white text-center font-semibold text-3xl'>Thank you!</h2>
        <h2 className='text-white text-center font-semibold text-xl mt-5'>We received your message. We'll be in touch soon.</h2>
      </div>
       
      </>
    );
  }

    return (
        <div className="contact-screen-main">
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div className='contact-screen-contents flex mt-24 px-20 mb-40 gap-24'>
              <div className='contact-screen-texts w-1/3 '>
                <Slide direction='left' triggerOnce>
                  <h1 className='text-[64px] font-black leading-[70px]'>
                    We are happy to hear <span className='text-[#1a2eeb]'>from you!</span>
                  </h1>
                  <div className="home-svg mt-6">
                      <ContactSvg />
                  </div>
                  <div className='contact-screen-text mt-10'>
                    <p className='text-lg'>
                      Through our help channels, which enable us to accept complaints and deliver prompt feedback, 
                      we provide devoted customer service, assisting us in promptly answering enquiries and 
                      resolving problems. Feel free to reach out to us in regards to any inquiry about fuel delivery
                      anywhere in Lagos.
                    </p>
                    <div className='mt-6 flex contact-telephone gap-3'>
                      <BsTelephone className='mt-1'/>
                      <Link to='tel:+2348024242049'>+234 802 424 2049</Link>
                    </div>
                    <div className='mt-2 flex contact-telephone gap-3'>
                      <CiMail className='mt-1'/>
                      <Link to='mailto:+2348024242049'>admin@fuelme.com</Link>
                    </div>
                    <div className='mt-2 flex contact-telephone gap-3'>
                      <BsWhatsapp className='mt-1'/>
                      <Link target='_blank' to='https://wa.me/+2348024242049?text=Hello%20I%20got%20your%20contact%20from%20the%20fuelme%20website.%20I%20am%20interested%20in%20getting%20fuel%20'>
                        +234 802 424 2049
                      </Link>
                    </div>
                  </div>
                </Slide>
              </div>
              <div className='contact-input w-2/3 '>
                <Slide direction='right' triggerOnce>
                  <form className='bg-black w-full px-10 py-12 rounded-[30px]' 
                    action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
                      <div className='w-full'>
                          <p className='text-white font-medium text-xl'>Your Name<span className='text-red-500'>*</span></p>
                          <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                          id='name' type="text" name="name" required />
                      </div>
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Your Email<span className='text-red-500'>*</span></p>
                          <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                          id='email' type="email" name="email" required />
                      </div>
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Your Phone number<span className='text-red-500'>*</span></p>
                          <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                          id='phone' type="tel" name="phone" placeholder='call or Whatsapp Number' required />
                      </div>
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Where would you like fuel delivered to you?<span className='text-red-500'>*</span></p>
                          <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                          id='address' type="text" placeholder= 'Your Address' name="address" required />
                      </div>
                      <div className='w-full mt-10'>
                          <textarea 
                            className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white' 
                            id='message' placeholder="Your message" name="message" required rows={10}/>
                      </div>
                      <div className='submit-btn mt-10 justify-center text-center'>
                          <button className='bg-blue-700 py-4 px-6 rounded text-white font-medium text-xl hover:bg-blue-500' id='submit' type="submit"> Submit </button>
                      </div>
                    </form>
                </Slide>
              </div>    
            </div>
        </div>
    )
}

export default ContactScreen