import { Helmet } from "react-helmet-async"
import FullFaq from "../components/FullFaq"


const FAQScreen = () => {
    return(
        <div className="faq-screen-contents">
            <Helmet>
                <title>FAQ</title>
            </Helmet>
            <FullFaq />
        </div>
    )
    
}

export default FAQScreen