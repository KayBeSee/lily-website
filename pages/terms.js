import React from "react";

import Head from "next/head";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";

const Terms = () => {
  return (
    <div class="relative pt-6">
      <Head>
        <title>Terms - Lily Wallet</title>
        <HeaderStuff />
      </Head>
      <Navigation />

      <div class="relative bg-white w-screen pt-8">
        <div class="lg:absolute lg:inset-0">
          <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              class="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://live.staticflickr.com/65535/50197334191_319fb3751f_h.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div class="lg:col-start-2 lg:pl-8">
            <div class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Terms
              </h2>
              <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Promise
              </h3>
              <p class="mt-8 text-lg text-gray-500">
                This software is provided as is and carries no guarentees with
                it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
