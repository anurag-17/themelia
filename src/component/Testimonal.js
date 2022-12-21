import testimonalimg1 from './images/testi-img1.png';
import testimonalimg2 from './images/user.png';
import testimonalimg3 from './images/testimonal-banner.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonal = () => {

    const [testimonal, setTestimonal] = useState([]); 
    useEffect(() => {
        async function testimonaldata(){
                  const faqcontentdata = await axios('https://api.postman.com/collections/15444832-5ebad4ae-6abe-4531-bd2a-251391564f94?access_key=PMAT-01GM34KS70XVX08GEKQC1AJZXA');
               
    console.log(faqcontentdata)
        
    setTestimonal([JSON.parse(faqcontentdata.data.collection.item[1].response[0].body)])

    }   

    testimonaldata()    
    },[])



  return (
    <div className='bg-testimonalimg bg-no-repeat	bg-left-bottom'>
     <div className="sldier">
     <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {           
        
             testimonal.map((items, index)=>{
             
             const aa =  items.data.map((i, index)=>{
                //  console.log(i);
               
              return(     
                <SwiperSlide>            
                 <div className='max-w-3xl m-auto py-20 pb-20'>
                     <div className='text-center flex justify-center	py-4 max-w-xs	m-auto'> <img  src={testimonalimg1} /></div>
                     <h3 className='text-lg text-center	text-base font-semibold xl:text-2xl sm:text-xl max-lg:text-2xl'>{i.attributes.description}</h3>                   
                     <div className='text-center flex justify-center items-center gap-3 py-4'>
                            <div className=''> <img  src={testimonalimg2} alt=" testimonalimg"/></div>
                            <div><p className='text-base font-medium'>{i.attributes.name}</p></div>
                            <div><p className='text-base font-medium text-sky-700	font-extrabold	'>/</p></div>
                            <div><p className='text-base font-medium text-slate-400'>{i.attributes.designation}</p></div>
                    </div>
                 </div>
                 </SwiperSlide>  
                 )
             })
             return aa
         }) 
                  
          }         
       
      </Swiper>
    </div> 

 

    </div>
    
  )
}

export default Testimonal;