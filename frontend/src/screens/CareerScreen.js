import { Slide } from "react-awesome-reveal"
import { Helmet } from "react-helmet-async"
import { MdGroups2 } from "react-icons/md";
import LoadingBox from '../components/LoadingBox';



const CareerScreen = () => {

    return(
        <div className="about-scr-main pb-40 ">
            <Helmet>
                <title>Join Our team</title>
            </Helmet>
            <div className="about-scr-cover py-20 text-center">
                <div className="about-scr-head w-[30%] m-auto ">
                    <Slide direction="down" triggerOnce>
                        <MdGroups2 className="mb-2 text-white text-5xl m-auto"/>
                        <h1 className="about-scr-heading-txt text-white font-semibold text-5xl">
                            Join Our Team
                        </h1>
                    </Slide>
                </div>
            </div>
            <div className="job-opening mt-40 px-36">
                <p className="text-center text-xl">
                    Thank you for your interest in joining the fuelMe team. At the moment,
                    we do not have any open positions available. However, we are always looking for 
                    talented individuals who share our passion for excellent service. 
                    Please feel free to check back in the future. Whenever there are open positions, we list them here.
                </p>
            </div>
        </div>
    )
}

export default CareerScreen