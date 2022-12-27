import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import bannerimg1 from "./images/banner-img.png";
import axios from "axios";

const Banner = () => {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    async function faqdata() {
      const faqcontentdata = await axios(
        "https://api.postman.com/collections/15444832-5ebad4ae-6abe-4531-bd2a-251391564f94?access_key=PMAT-01GM34KS70XVX08GEKQC1AJZXA"
      );
      //   const faqcontentdatas = await faqcontentdata.json();
      //   setFaq(faqcontentdatas.collection.item[0].response[0].body.data);
      console.log(faqcontentdata);

      setFaq([
        JSON.parse(faqcontentdata.data.collection.item[3].response[0].body),
      ]);
    }

    faqdata();
  }, []);

  return (
    <div className="bg-hero-pattern bg-no-repeat bg-left-bottom">
      <section id="homebanner">
        <div class="mx-auto max-w-7xl grid grid-cols-1 gap-4 pt-20 pb-32 w-90  md:grid-cols-2 lg:px-2 md:px-2 sm:px-2 items-end md:h-full m-auto">
          <div className="">
            {faq.map((items, index) => {
              const aa = items.data.map((i, index) => {
                //  console.log(i);

                return (
                  <div className="text-center sm:text-left md:text-left">
                    <h1 className="xl:text-5xl text-3xl font-medium pr-1	tracking-tight sm:text-3xl max-lg:text-5xl">
                      {i.attributes.title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-pahragraph text-lg">
                      {i.attributes.description}
                    </p>
                    <p className="py-3 text-pahragraph font-medium	">
                      Sign up to get notified when it’s ready.{" "}
                    </p>
                    <form class="w-full max-w-sm m-auto py-3 flex item-center xl:ml-1">
                      <div class="flex items-center border-teal-500 py-2">
                        <label class="block">
                          <input
                            type="email"
                            name="email"
                            class="mt-1 px-3 py-2 bg-white border  px-2 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="you@example.com"
                          />
                        </label>
                        <button
                          class="ml-3	flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-green hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded-lg bg-green"
                          type="button"
                        >
                          Join Waitlist
                        </button>
                      </div>
                    </form>
                    <p className="p2 text-sm font-normal text-textcolor">
                      We care about the protection of your data. Read our{" "}
                      <span className="font-bold underline text-black">
                        Privacy Policy.
                      </span>{" "}
                    </p>
                  </div>
                );
              });
              return aa;
            })}
          </div>

          <div className="">
            <img src={bannerimg1.src}></img>
          </div>
        </div>
        <div class="isolate bg-white">
          <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
