import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import HeaderStuff from "../../components/HeaderStuff";
import Features from "../../components/Features";

import scenicBg from "public/scenic.jpg";

const FeaturesPage = () => {
  return (
    <div className="relative">
      <div className="relative bg-gradient-to-b from-black via-transparent to-transparent">
        <div className="absolute inset-0 z-[-1]">
          <div className="bg-gradient-to-l from-black via-transparent to-black" />
          <Image
            src={scenicBg}
            layout="fill"
            objectFit="cover"
            priority
            placeholder="blur"
            className="animate-float"
          />
        </div>
        <Head>
          <title>Features - Lily Wallet</title>
          <HeaderStuff />
        </Head>

        <div className="pt-6 z-10">
          <Navigation darkBg />
        </div>
        <Transition
          appear={true}
          show={true}
          enter="transition-all duration-500"
          enterFrom="opacity-0 blur-xl scale-50"
          enterTo="opacity-100 blur-0 scale-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className=" h-72 z-10 flex justify-center items-center">
            <div className="bg-black p-6 rounded-2xl max-w-7xl w-fit mx-auto bg-gradient-to-tl to-slate-300 via-white from-slate-300">
              <img src="/logo.svg" className="w-24 h-24" />
            </div>
          </div>
        </Transition>
      </div>
      <div className="my-20 mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
        <div className="sm:text-center">
          <Transition
            appear={true}
            show={true}
            enter="transition-all duration-500"
            enterFrom="opacity-0 translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <h2 className="text-lg font-semibold leading-8 text-emerald-600">
              Features
            </h2>
          </Transition>
          <Transition
            appear={true}
            show={true}
            enter="transition-all duration-500 delay-200"
            enterFrom="opacity-0 translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="mt-2 text-3xl font-semibold tracking-tight font-sans tracking-none text-gray-900 sm:text-5xl">
              The new standard for bitcoin security
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              With its intuitive design, breathtaking speed and flexibility,
              Lily Wallet is an excellent wallet for both basic and advanced
              users. It is the wallet of choice for every person looking to use
              bitcoin as money.
            </p>
          </Transition>
        </div>
      </div>

      <Features />
      <div class="bg-gray-100">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Ready to dive in?</span>
            <span class="block text-green-600">
              Start your free trial today.
            </span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <Link href="/download">
                <a class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
                  Download Lily
                </a>
              </Link>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <a
                href="/talk-to-an-expert"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-emerald-50"
              >
                Talk to an expert
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
