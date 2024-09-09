
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Testimonials = () => {
    return(
        <div>
            <section className="mt-4">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center">
                        <div className="relative mt-16 md:order-2">
                            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                                <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg
                                 filter bg-gradient-to-r from-green-600 via-purple-300 to-pink-600" ></div>
                            </div>
                            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10
                             md:grid-cols-3">
                                <div className="flex flex-col overflow-hidden shadow-xl">
                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                            </div>
                                            <blockquote className="flex-1 mt-8">
                                                <p className="text-lg leading-relaxed text-gray-900 font-pj">
                                                    “Their app makes everything so simple! I can choose the delivery 
                                                    time,track the driver, and the fuel is delivered right to my vehicle.”
                                                </p>
                                            </blockquote>
                                        </div>

                                        <div className="flex items-center mt-8">
                                            <AccountCircleOutlinedIcon />
                                            <div className="ml-4">
                                                <p className="text-base font-bold text-gray-900 font-pj">
                                                    Collins Ehiz
                                                </p>
                                                <p className="mt-0.5 text-sm font-pj text-gray-600">
                                                    Satisfied Customer
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col overflow-hidden shadow-xl">
                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                            </div>
                                            <blockquote className="flex-1 mt-8">
                                                <p className="text-lg leading-relaxed text-gray-900 font-pj">
                                                    “As a busy mom, FuelMe is a lifesaver! They come to my house to
                                                    fill up our cars, and gen and I never have to deal with the stress of 
                                                    queing at a gas station.”</p>
                                            </blockquote>
                                        </div>
                                        <div className="flex items-center mt-8">
                                            <AccountCircleOutlinedIcon />
                                            <div className="ml-4">
                                                <p className="text-base font-bold text-gray-900 font-pj">
                                                    Jumoke Adeniran
                                                </p>
                                                <p className="mt-0.5 text-sm font-pj text-gray-600">
                                                    Satisfied Customer
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col overflow-hidden shadow-xl">
                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                                <StarOutlinedIcon className="text-yellow-500"/>
                                            </div>

                                            <blockquote className="flex-1 mt-8">
                                                <p className="text-lg leading-relaxed text-gray-900 font-pj">
                                                    “I love the ease and efficiency of FuelMe! The drivers are always
                                                    prompt, and the fuel prices are competitive. Highly recommend!”</p>
                                            </blockquote>
                                        </div>

                                        <div className="flex items-center mt-8">
                                            <AccountCircleOutlinedIcon />
                                            <div className="ml-4">
                                                <p className="text-base font-bold text-gray-900 font-pj">
                                                    Ade of Lagos
                                                </p>
                                                <p className="mt-0.5 text-sm font-pj text-gray-600">
                                                    Satisfied Customer
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials