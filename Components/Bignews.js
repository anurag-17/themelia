import React from 'react';
import bignew1 from './images/bignews.png';
import bignew2 from './images/Dismiss.png';


const Bignews = () => {
  return (
    <div>
        <div className='bg-darkgreen'>
            <div className='max-w-screen-xl	 m-auto grid grid-cols-1 gap-4 py-3 w-90 items-center pl-8 sm:grid-cols-2 sm:items-end '>
                <div className='flex gap-2 items-center'>
                    <div className=''><img src={bignew1.src} />
                    </div>
                    <div className='text-base text-white font-medium'><p className='Big news! We'>re excited to announce a brand new product</p></div>
                </div>
                 <div className='flex gap-2 content-end justify-self-end'>                   
                     <div className='text-base text-white font-medium'> <button class="ml-3	bg-white text-black flex-shrink-0 hover:bg-teal-700 border-white hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                     Learn more  </button> 
                     </div>
                     <div className=''><img src={bignew2.src} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bignews;