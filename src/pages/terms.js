import React from "react";

import Head from "next/head";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";

const Terms = () => {
  return (
    <div class="flex flex-col relative pt-6 bg-gray-50 min-h-screen">
      <Head>
        <title>Terms - Lily Wallet</title>
        <HeaderStuff />
      </Head>
      <Navigation />

      <div class="bg-white flex-grow">
        <div class="relative flex-grow">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 md:py-8">
            <div class="relative shadow-xl rounded-2xl sm:overflow-hidden">
              <div class="absolute inset-0">
                <img
                  class="h-full w-full object-cover"
                  src="./mountain.jpeg"
                  alt="People working on laptops"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-r from-green-800 to-green-700"
                  style={{ mixBlendMode: "multiply" }}
                ></div>
              </div>
              <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span class="block text-white">Terms</span>
                </h1>
                <p class="mt-6 max-w-lg mx-auto text-center text-xl text-green-200 sm:max-w-3xl">
                  This software is provided as is and carries no guarentees with
                  it.
                </p>
                <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="https://github.com/Lily-Technologies/lily-wallet"
                      target="_blank"
                      class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-700 bg-white hover:bg-green-50 sm:px-8"
                    >
                      Review source code
                    </a>
                    <a
                      href="/talk-to-an-expert"
                      class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                    >
                      Talk to a specialist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
