"use client"
import { BounceLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center mt-20 z-50'>
            <BounceLoader />
        </div>
    )
}

export default Loading