import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const Faq = () => {


    const [faq, setFaq] = useState([]); 
    useEffect(() => {
     async function faqdata(){
     const faqcontentdata = await axios('https://api.postman.com/collections/15444832-5ebad4ae-6abe-4531-bd2a-251391564f94?access_key=PMAT-01GM34KS70XVX08GEKQC1AJZXA');
      // const faqcontentdatas = await faqcontentdata.json();
      // setFaq(faqcontentdatas.collection.item[0].response[0].body.data);
    // console.log(faqcontentdata.data.collection.item[1].response[0].body)
        
    setFaq([JSON.parse(faqcontentdata.data.collection.item[1].response[0].body)])

    }   

    faqdata()
    },[])





    return (
      ""
    // <div>
    //      <div className='py-8 sm:py-10 md:py-10 lg:py-16' id='faqsec'>
    //      <div className='section-title max-w-3xl m-auto'>
    //         <h3 className='text-2xl text-text-textheading font-extrabold tracking-wide text-center xl:text-4xl sm:text-3xl max-lg:text-4xl'>Frequently asked questions</h3>
    //         <p className='text-center text-textcolor pt-2	font-normal md:pt-2'>Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
    //          Urna, sed a lectus elementum blandit et.</p>
    //     </div>  
    //      <div className="max-w-7xl	m-auto  py-5 pl-8">
    //      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    //      {
             
    //         faq.map((items, index)=>{
            
    //         const aa =  items.data.map((i, index)=>{
    //             // console.log(i);
              
    //          return(               
    //             <div className='pt-5 sm:pt-5 md:pt-5 lg:pt-10'>
    //                 <h3 className='text-base text-textheading font-semibold'>{i.attributes.Question}</h3>
    //                 <p className='text-textcolor font-normal pt-2'>{i.attributes.Answer}</p>
    //             </div>
    //             )
    //         })
    //         return aa
    //     })
         
    //      }
    //    </div>
    //      </div>
       
               
    //     </div>
    // </div>
  )
}

export default Faq;