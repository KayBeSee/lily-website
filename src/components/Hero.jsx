import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import scenicBg from "public/scenic.jpg";

const navigation = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Support", href: "/support" },
];

export default function Hero({ mostRecentPost }) {
  console.log("mostRecentPost: ", mostRecentPost);
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <Link href="/">
                      <span className="flex items-center">
                        <span className="sr-only">Lily Wallet</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          style={{ margin: "0 0 .5em" }}
                          src="/logo.svg"
                          alt="Lily Wallet Logo"
                        />
                        <span className="md:hidden cursor-pointer font-logo font-medium text-lg text-emerald-700 hover:text-emerald-500 ml-2">
                          Lily Wallet
                        </span>
                      </span>
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="font-medium text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  <Link href="/download">
                    <a className="font-medium text-emerald-600 hover:text-emerald-500">
                      Download
                    </a>
                  </Link>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto sm:h-10"
                        style={{ margin: "0 0 .5em" }}
                        src="/logo.svg"
                        alt="Lily Wallet Logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <Link href="/download">
                    <a className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-emerald-600 hover:bg-gray-100">
                      Download
                    </a>
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <Transition
              appear={true}
              show={true}
              enter="transition-all duration-500 sm:delay-[1500ms]"
              enterFrom="sm:opacity-0"
              enterTo="sm:opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Link href={`/blog/${mostRecentPost.slug}`}>
                <a className="group flex flex-col lg:items-start lg:inline-flex space-x-2 mb-6 items-center">
                  <span className="rounded bg-yellow-50 group-hover:text-yellow-500 px-2.5 py-1 text-sm font-semibold text-yellow-600 whitespace-nowrap">
                    What's new
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-yellow-600 group-hover:text-yellow-500">
                    <span className="truncate max-w-xs sm:max-w-md md:max-w-2xl group-hover:underline">
                      {mostRecentPost.module.meta.title}
                    </span>
                    <ChevronRightIcon
                      className="h-5 w-5 group-hover:translate-x-2 duration-500"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </Link>
            </Transition>
            <div className="sm:text-center lg:text-left">
              <Transition
                appear={true}
                show={true}
                enter="transition-all duration-500"
                enterFrom="sm:opacity-0 sm:translate-y-6"
                enterTo="sm:opacity-100 sm:translate-y-0"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <h1 className="leading-tight text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">The best way to</span>{" "}
                  <span className="block text-emerald-600 xl:inline">
                    secure your bitcoin
                  </span>
                </h1>
              </Transition>
              <Transition
                appear={true}
                show={true}
                enter="transition-all duration-500 delay-300"
                enterFrom="sm:opacity-0"
                enterTo="sm:opacity-100 sm:translate-y-0"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Lily Wallet makes it easy to self-custody your bitcoin. Take
                  full control of your coins with an easy to use wallet that
                  meets you where you're at on your bitcoin journey.
                </p>
              </Transition>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Transition
                  appear={true}
                  show={true}
                  enter="transition-all duration-500 delay-500 z-10"
                  enterFrom="sm:opacity-0"
                  enterTo="sm:opacity-100 sm:translate-y-0"
                  leave="transition-opacity duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="rounded-md shadow">
                    <Link href="/download">
                      <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-base font-medium text-white hover:bg-emerald-700 duration-200 md:py-4 md:px-10 md:text-lg">
                        Get started
                      </a>
                    </Link>
                  </div>
                </Transition>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Transition
                    appear={true}
                    show={true}
                    enter="transition-all duration-500 delay-700 z-0"
                    enterFrom="sm:opacity-0 lg:-translate-x-full"
                    enterTo="sm:opacity-100 lg:translate-x-0"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Link href="#">
                      <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-100 px-8 py-3 text-base font-medium text-emerald-700 hover:bg-emerald-200 duration-200 md:py-4 md:px-10 md:text-lg">
                        Live demo
                      </a>
                    </Link>
                  </Transition>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 relative h-48 lg:h-full">
        <Image
          src={scenicBg}
          layout="fill"
          objectFit="cover"
          priority
          placeholder="blur"
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
        />
      </div>
    </div>
  );
}
