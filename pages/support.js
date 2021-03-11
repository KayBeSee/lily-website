import React from "react";

import Head from "next/head";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";

const Support = () => {
  return (
    <div class="relative pt-6">
      <Head>
        <title>Support - Lily Wallet</title>
        <HeaderStuff />
      </Head>
      <Navigation />

      <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 mb-36">
        <div class="text-center">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">We are here</span>
            <span class="block text-green-600 xl:inline">to help you.</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Do you have questions? Drop us a line and we'll get you on the right
            track.
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a
                href="https://docs.lily.kevinmulcrone.com/"
                target="_blank"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                Read the Docs
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                target="_blank"
                href="https://calendly.com/lilywallet/setup-walkthrough"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <div class="relative bg-white" id="contact-us">
        <div class="lg:absolute lg:inset-0">
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              class="h-56 w-full object-cover lg:absolute lg:h-full"
              src="./screenshots/mountain.jpeg"
              alt=""
            />
          </div>
        </div>
        <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div class="lg:pr-8">
            <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <div class="pb-16">
                <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Get in touch
                </h2>
                <div class="mt-3">
                  <p class="text-lg text-gray-500">
                    Bitcoin is hard. We get it. If you have any questions about
                    getting set up with Lily, let us know and we'll be happy to
                    walk you through it.
                  </p>
                </div>
                <div class="mt-9">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg
                        class="h-6 w-6 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div class="ml-3 text-base text-gray-500">
                      <p>+1 808 374 5459</p>
                      <p class="mt-1">Mon-Fri 8am to 6pm MST</p>
                    </div>
                  </div>
                  <div class="mt-6 flex">
                    <div class="flex-shrink-0">
                      <svg
                        class="h-6 w-6 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div class="ml-3 text-base text-gray-500">
                      <p>KayBeSee@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Send us a message
              </h2>
              <form
                action="#"
                method="POST"
                class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div class="sm:col-span-2">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      class="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <span id="phone_description" class="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autocomplete="tel"
                      aria-describedby="phone_description"
                      class="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label
                      for="how_can_we_help"
                      class="block text-sm font-medium text-gray-700"
                    >
                      How can we help you?
                    </label>
                    <span
                      id="how_can_we_help_description"
                      class="text-sm text-gray-500"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div class="mt-1">
                    <textarea
                      id="how_can_we_help"
                      name="how_can_we_help"
                      aria-describedby="how_can_we_help_description"
                      rows="4"
                      class="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="how_did_you_hear_about_us"
                    class="block text-sm font-medium text-gray-700"
                  >
                    How did you hear about us?
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="how_did_you_hear_about_us"
                      id="how_did_you_hear_about_us"
                      class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="text-right sm:col-span-2">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
