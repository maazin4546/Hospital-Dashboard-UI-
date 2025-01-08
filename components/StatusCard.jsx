import { IoIosArrowUp,IoIosArrowDown  } from "react-icons/io";
import { MdOutlinePerson4 } from "react-icons/md";
import { IoBarChartOutline } from "react-icons/io5";
import { PiCurrencyDollarSimple } from "react-icons/pi";


const StatusCard = () => {
    return (
        <div className='mt-12 flex justify-center items-center gap-3'>

            <div className="flex items-center space-x-6 w-80 rounded-sm bg-white mt-8 p-4" style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}>
                <MdOutlinePerson4
                    fontSize={60} // Increase the font size
                    className="text-pink-500 border border-pink-500 rounded-full p-4"
                />

                <div className='flex flex-col gap-3'>
                    <p className="text-pink-600">Patients</p>
                    <h1 className="text-4xl text-pink-500">348</h1>
                    <div className="flex items-center space-x-1 text-gray-600 text-sm">
                        <IoIosArrowUp fontSize={15} />
                        <p>+20% Increased</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-6 w-80 rounded-sm bg-white mt-8 p-4" style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}>
                <IoBarChartOutline
                    fontSize={60} // Increase the font size
                    className="text-green-600 border border-green-600 rounded-full p-4"
                />

                <div className='flex flex-col gap-3'>
                    <p className="text-green-600">Appointments</p>
                    <h1 className="text-4xl text-green-600">1585</h1>
                    <div className="flex items-center space-x-1 text-gray-600 text-sm">
                        <IoIosArrowDown fontSize={15} className="text-orange-600"/>
                        <p>-15% Dcreased</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-6 w-80 rounded-sm bg-white mt-8 p-4" style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}>
                <PiCurrencyDollarSimple
                    fontSize={60} // Increase the font size
                    className="text-orange-600 border border-orange-600 rounded-full p-4"
                />

                <div className='flex flex-col gap-3'>
                    <p className="text-orange-600">Total Revenue</p>
                    <h1 className="text-4xl text-orange-600">$7300</h1>
                    <div className="flex items-center space-x-1 text-gray-600 text-sm">
                        <IoIosArrowDown fontSize={15} className="text-green-600"/>
                        <p>10% Increased</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default StatusCard