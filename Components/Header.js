import React from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from './images/main-logo.png';
import bannerimg1 from './images/banner-img.png';


const Header = () => {
  return (
    <div>
    <div className="isolate bg-white">
    <div className="px-6 pt-6 mx-auto max-w-screen-2xl">
    <div>
      <nav className="flex h-9 items-center justify-between" aria-label="Global">
        <div className="flex" aria-label="Global">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8" src={logo} alt=""/>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
          <a href="#faqsec" className="font-semibold text-pahragraph hover:text-gray-900">Offerings</a>

          <a href="#platform" className="font-semibold text-pahragraph hover:text-gray-900">Individuals</a>

          <a href="#platform" className="font-semibold text-pahragraph hover:text-gray-900">Corporates</a>

          <a href="#platform" className="font-semibold text-pahragraph hover:text-gray-900">Charities / NPOs</a>
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 items-center lg:justify-end lg:gap-x-5">
          <a href="#" className="font-semibold text-gray-900 hover:text-gray-900">Sign In</a>
          <a href="#homebanner" className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-darkgreen shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">Get Started Today</a>
        </div>
      </nav>
      <div role="dialog" aria-modal="true">
        <div focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div className="flex h-9 items-center justify-between">
            <div className="flex">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
              </a>
            </div>
            <div className="flex">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-pahragraph hover:bg-gray-400/10">Offerings</a>

                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-pahragraph hover:bg-gray-400/10">Individuals</a>

                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-pahragraph hover:bg-gray-400/10">Corporates</a>

                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-pahragraph hover:bg-gray-400/10">Charities / NPOs</a>
              </div>
              <div className="py-6">
                <a href="#" className="-mx-3 block rounded-lg py-2.5 text-white px-3 text-base font-semibold leading-6 text-pahragraph bg-darkgreen hover:bg-gray-400/10">Sign In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>
        {/* <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-2">
            <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <img className="block h-8 w-auto lg:hidden" src={logo} alt="Your Company"/>
                <img className="hidden h-8 w-auto lg:block" src={logo} alt="Your Company"/>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">           
                    <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Offerings</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Individuals</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Corporates</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Charities / NPOs</a>
                </div>
                </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>                    
                <div className="relative ml-3">
                <div>
                    <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                    <a href="#" className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">Log in</a>
                     </div>
                </div>     
              
                </div>
            </div>
            </div>
        </div>


        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">   
            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            </div>
        </div>
        </nav> */}
       
    </div>
  )
}

export default Header;