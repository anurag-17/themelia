import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import tabimg1 from './images/INDIVIDUALS.png';
import axios from 'axios';
import { useEffect, useState } from "react";


// export default function Platformtab() {
const Platformtab = () => {

  const [faq, setFaq] = useState([]);
  useEffect(() => {
    async function faqdata() {
      const faqcontentdata = await axios('https://api.postman.com/collections/15444832-5ebad4ae-6abe-4531-bd2a-251391564f94?access_key=PMAT-01GM34KS70XVX08GEKQC1AJZXA');
      console.log(faqcontentdata)
      setFaq([JSON.parse(faqcontentdata.data.collection.item[2].response[0].body)])
    }
    faqdata()
  }, [])

  console.log(faq)
  
  
  return (
    <section id='platform'>
      <div>
        
      </div>
      <div className='py-10'>
        <div className='section-title max-w-3xl	m-auto'>
          <h3 className='text-2xl font-extrabold text-textheading tracking-wide text-center xl:text-4xl sm:text-3xl max-lg:text-4xl'>Our Platform Offerings</h3>
          <p className='text-center text-base text-textcolor pt-4	font-normal'>Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna,
            sed a lectus elementum blandit et.</p>
        </div>
        <div className="">
          <Tabs  value={1} className="m-auto text-sm active">
            <div className="max-w-3xl m-auto py-5">
              <TabsHeader className="text-sm capitalize	 content-between m-auto">
                {faq.map((item, index) => {
                  const aa = item.data.map((i, index) => {
                    return (
                      <div className='content-between'>                      
                        <Tab key={index} value={i.id}  className="text-base	 capitalize	 text-textcolor p-4 border-b-2 border-slate-100 border-2 w-64	">
                          {i.attributes.name}
                        </Tab>
                      </div>
                    )
                  })

                  return aa
                })}

              </TabsHeader>
            </div>
            <TabsBody>             
             
              {faq.map((item, index) => {

                const aa = item.data.map((i, index) => {
                  console.log(i);
                  return (
                    <div className='max-w-screen-xl m-auto'>                  
                      <TabPanel key={index} value={i.id} className="max-w-screen-xl m-auto">                      
                        <div className="">
                          <div className="grid grid-cols-1 gap-4 pt-10 py-10 w-90 items-end items-center md:grid-cols-2">
                            <div className="text-center md:text-left sm:text-center lg:text-left">
                              <div className="text-lg text-green font-semibold">{i.attributes.name}</div>
                              <div className="text-xl text-textheading font-extrabold pt-3 md:text-2xl lg:text-4xl">{i.attributes.designation}</div>
                              <div className="text-lg font-normal	text-textcolor text-base  text-inherit py-3">{i.attributes.description}</div>
                              <div className="text-base font-medium pt-4 text-green">Learn more about how we're changing the world →</div>
                            </div>
                            <div className="">
                              <div className="">
                                <img src={tabimg1} alt='tab-img'/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </div>
                  )
                })

                return aa


              })}
            </TabsBody>
          </Tabs>

        </div>

      </div>

    </section>
   

  );
}
export default Platformtab;