import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from './images/main-logo.png';



export default function Menu() {
  return (
    <Popover className="relative bg-white sticky top-0 z-30 ">
      <div className="mx-auto max-w-screen-3xl px-4">
        <div className="flex items-center justify-between border-none border-gray-100 py-6 md:justify-between md:space-x-10">
          <div className="flex justify-start justify-between">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto sm:h-10" src={logo} alt=""/>
            </a>
          </div>  
          <div className="-my-2 -mr-2 md:hidden ">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-2 md:flex  sm:space-x-5 md:space-x-3 lg:space-x-5">
            <a href="#homebanner" className="font-Mulish text-sm	 font-sm text-gray-500 hover:text-gray-900"> Offerings </a>
            <a href="#platform" className="font-Mulish text-sm	 font-sm text-gray-500 hover:text-gray-900"> Individuals </a>
            <a href="#platform" className="font-Mulish text-sm	 font-sm text-gray-500 hover:text-gray-900"> Corporates</a>
            <a href="#platform" className="font-Mulish text-sm	 font-sm text-gray-500 hover:text-gray-900">
            Charities / NPOs
            </a>

          
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-3 lg:w-30">
          <a href="#" className="font-Mulish text-sm font-sm text-gray-500 hover:text-gray-900">
          Sign In
            </a>
           <a
              href="#homebanner"
              className="ml-8 inline-flex items-center justify-end  whitespace-nowrap rounded-buttonborder bg-darkgreen from-red-500 to-orange-500  px-8 py-3 text-xs	font-bold	 text-white shadow-sm hover:bg-black-500"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-buttonborder bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
               
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                <a href="#platform" className="text-base font-medium text-gray-900 hover:text-gray-700"> Offerings  </a>
                <a href="#platform" className="text-base font-medium text-gray-900 hover:text-gray-700">Individuals </a>
                 <a href="#platform" className="text-base font-medium text-gray-900 hover:text-gray-700">Corporates </a>
                  <a href="#platform" className="text-base font-medium text-gray-900 hover:text-gray-700">Charities / NPOs </a>
                
              </div>
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border bg-darkgreen from-red-500 to-orange-500  px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Get Started Today
                </a>
            
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}