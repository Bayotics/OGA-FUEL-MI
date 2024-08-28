
const GasStation = () => {
    return(
        <div className="gas-main flex">
            <div className="gas-img w-2/5 bg-red-600">
                
            </div>
            <div className="gas-txt w-3/5 bg-[#1a2eeb] pl-24 pr-40 py-14">
                <h1 className="text-white font-semibold text-[105px] leading-tight">NOW, <br/>THE FILLING STATION
                 COMES TO YOU</h1>
                 <div className="gas-btns flex gap-10 mt-6">
                    <div className="gas-btn">
                        <button className="text-black px-6 py-4 bg-white rounded-full hover:border-2 hover:text-white font-medium hover:bg-[#1a2eeb] transition duration-500">Fuel my Gen</button>
                    </div>
                    <div className="gas-btn">
                        <button className="text-white px-6 py-4 hover:border-transparent bg-transparent border-2 rounded-full hover:border-none hover:text-black font-medium hover:bg-white transition duration-500">Fuel my Ride</button>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default GasStation