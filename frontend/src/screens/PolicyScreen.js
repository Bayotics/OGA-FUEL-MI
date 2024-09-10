import { Zoom } from "react-awesome-reveal"
import { Helmet } from "react-helmet-async"


const PolicyScreen = () => {

    return(
        <div className="policy-main mb-36">
            <Helmet>
                <title>Privacy policy</title>
            </Helmet>

            <div className="policy-contents px-20 mt-24">
                <Zoom triggerOnce>
                    <h1 className="text-4xl font-bold text-black text-center">
                        Privacy Policy
                    </h1>
                    <p className="text-xl font-medium mt-6">
                        At fuelMe, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you interact with our website, mobile application, or services. By using our services, you agree to the collection and use of your information in accordance with this policy.
                    </p>
                    <h1 className="text-2xl font-semibold text-black mt-6">
                        1. Information We Collect
                    </h1>
                    <h1 className="text-2xl font-semibold text-black mt-4">
                        a. Personal Information
                    </h1>
                    <p className="mt-3 ">
                        When you register on our website, make a purchase, or use our services, we may collect the following personal information:
                        Full name
                        Email address
                        Phone number
                        Billing and shipping addresses
                        Payment information (credit/debit card details, bank information)
                        Vehicle details (make, model, fuel type)
                        Location data (to provide delivery services)
                        Any other information you provide voluntarily.
                    </p>
                    <h1 className="text-2xl font-semibold text-black mt-4">
                        b. Non-Personal Information
                    </h1>
                    <p className="mt-3 ">
                        We may also collect non-personal information, such as:
                        Browser type and version
                        Device information
                        IP address
                        Cookies and usage data
                        Website usage statistics (pages visited, time spent on each page, etc.)
                    </p>
                    <h1 className="text-2xl font-semibold text-black mt-6">
                        2. How We Use Your Information
                    </h1>
                    <p className="mt-3 ">
                        The information we collect is used in various ways to provide and improve our services, including but not limited to:
                        Processing your orders and delivering fuel to your location.
                        Personalizing your experience on our website and app.
                        Providing customer service and responding to inquiries.
                        Processing payments and managing your account.
                        Sending notifications about your orders, including status updates, promotional offers, and marketing communications.
                        Analyzing usage patterns to improve our website, app, and services.
                        Ensuring compliance with legal obligations and protecting against fraud.
                    </p>
                    <h1 className="text-2xl font-semibold text-black mt-6">
                        3. Cookies and Tracking Technologies
                    </h1>
                    <p className="mt-3 ">
                        We use cookies and similar tracking technologies to track the activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. These are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                    </p>
                    <h1 className="text-2xl font-semibold text-black mt-6">
                        4. Sharing and Disclosure of Your Information
                    </h1>
                    <p className="mt-3 ">
                        We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following situations:
                        Service Providers: We may share your information with third-party service providers who assist in delivering our services (e.g., payment processors, delivery services, hosting providers). These third parties are required to keep your information confidential and only use it for the specific purpose for which it was provided.
                        Legal Requirements: We may disclose your information if required by law or in response to valid requests by public authorities (e.g., a court or government agency).
                        Business Transfers: In the event of a merger, acquisition, or asset sale, your personal information may be transferred. We will notify you before your information is transferred and becomes subject to a different Privacy Policy.                
                    </p>
                    <h1 className="text-2xl font-semibold text-black mt-6">
                        5. Data Retention
                    </h1>
                    <p className="mt-3 ">
                        We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law. Once your information is no longer needed, we will securely delete or anonymize it.
                    </p>
                    <h1 className="text-2xl font-semibold text-black mt-6">
                        6. Data Security
                    </h1>
                    <p className="mt-3 ">
                        We take the security of your personal information seriously and use industry-standard measures to protect it. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your data.                </p>
                    <h1 className="text-2xl font-semibold text-black mt-6">
                        7. Your Rights                
                    </h1>
                    <p className="mt-3 ">
                        You have the following rights regarding your personal information:
                        Access: You can request a copy of the personal information we hold about you.
                        Correction: You can request that we correct any inaccurate or incomplete information.
                        Deletion: You can request that we delete your personal information, subject to legal obligations.
                        Objection and Restriction: You can object to our processing of your data or request that we restrict its use.
                        Data Portability: You can request to receive your data in a structured, commonly used, and machine-readable format.
                    </p>
                    <h1 className="text-2xl font-semibold text-black mt-6">
                        8. Third-Party Links
                    </h1>
                    <p className="mt-3 ">
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of these sites. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                    <h1 className="text-2xl font-semibold text-black mt-6">
                        9. Children’s Privacy
                    </h1>
                    <p className="mt-3 ">
                        Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information.                
                    </p>
                    <h1 className="text-2xl font-semibold text-black mt-6">
                        10. Changes to This Privacy Policy
                    </h1>
                    <p className="mt-3 ">
                        We may update our Privacy Policy from time to time. Any changes will be posted on this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.                
                    </p>
                </Zoom>
            </div>
        </div>
    )
}

export default PolicyScreen