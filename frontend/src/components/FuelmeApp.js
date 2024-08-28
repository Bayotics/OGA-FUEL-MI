import apple from '../assets/Fuel-me/pngs/apple-logo.png'
import playstore from '../assets/Fuel-me/pngs/playstore.png'
import app from '../assets/Fuel-me/pngs/fuel-me-app.png'


const FuelmeApp = () => {
    return(
        <div className="fuel-me-app-main mt-44 px-14 ">
            <div className="fuel-me-app-card shadow-2xl flex bg-gradient-to-r from-transparent via-blue-100 to-blue-200 rounded-[32px]">
                <div className="fma-card-p pt-48 w-[65%] pl-12">
                    <h1 className="text-black font-bold text-4xl">
                        Get the Fuelme App now and <br/>say goodbye to Filling station runs
                    </h1>
                    <div className="flex download-btns gap-4 mt-8">
                        <div className="google-play-btn flex border rounded-md border-black px-6 py-1 gap-2 cursor-pointer">
                            <div className='google-play-btn-img mt-2 '>
                                <img src={playstore} alt='playstore' />
                            </div>
                            <div className='google-play-btn-text'>
                                <p className='text-xs text-black'>GET IT ON</p>
                                <h1 className='text-black font-medium'>Google Play</h1>
                            </div>
                        </div>
                        <div className="google-play-btn flex border rounded-md border-black px-6 py-1 gap-2 cursor-pointer">
                            <div className='google-play-btn-img mt-2 '>
                                <img src={apple} alt='playstore' />
                            </div>
                            <div className='google-play-btn-text'>
                                <p className='text-xs text-black'>Download on the</p>
                                <h1 className='text-black font-medium'>App Store</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fma-card-img w-[35%] ">
                    <img src={app} alt='fuelme app' />
                </div>
            </div>
        </div>
    )
}
export default FuelmeApp