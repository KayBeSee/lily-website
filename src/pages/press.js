import React from "react";

import Head from "next/head";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";

const Press = () => {
  return (
    <div class="relative pt-6">
      <Head>
        <title>Press - Lily Wallet</title>
        <HeaderStuff />
      </Head>
      <Navigation />

      <div class="py-16 bg-gray-50 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div class="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 class="text-base text-green-600 font-semibold tracking-wide uppercase">
              Press
            </h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We love to talk about bitcoin
            </p>
          </div>
          <div class="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p class="text-lg text-gray-500">
              We are at the edge of the next frontier, and like all new
              frontiers there is <i>a lot</i> to talk about when it comes to
              bitcoin. Whether it be how to properly self-custody your assets,
              security trade-offs, or where the industry is headed, we love
              sharing what we know with others.
            </p>
          </div>
          <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div class="relative z-10">
              <div class="prose prose-green text-gray-500 mx-auto lg:max-w-none">
                <p>
                  We have participated in a few podcasts and Youtube videos
                  ourselves and journalists, bloggres, and bitcoin enthusiasts
                  have shared their thoughts on Lily.
                </p>
                <p>We've listed some of our favorites below:</p>
                <ul>
                  <li>
                    Tales from the Crypt #179 -{" "}
                    <a
                      href="https://www.youtube.com/watch?v=RSXVOjMr9gE"
                      target="_blank"
                    >
                      Youtube
                    </a>
                  </li>
                  <li>
                    Bitcoin Magazine Walkthrough -{" "}
                    <a
                      href="https://www.youtube.com/watch?v=9xUgyTYqvcQ"
                      target="_blank"
                    >
                      Youtube
                    </a>
                  </li>
                  <li>
                    BTC Sessions: How To Use Lily Wallet -{" "}
                    <a
                      href="https://www.youtube.com/watch?v=P5UIvCi9FSM"
                      target="_blank"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
                <p>
                  The best part about bitcoin is that there are so many
                  different angles to look at, discuss, and build products for.
                  We look forward to seeing more and more educational content
                  being made to guide newcoiners on their journey.
                </p>
                <h3>Let's chat</h3>
                <p>
                  If you have a podcast or other media publication, we would be
                  happy to arrange a time to talk about Lily Wallet, bitcoin
                  security, multisig, where the industry is heading, or sound
                  money!
                </p>
              </div>
              <div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                <div class="rounded-md shadow">
                  <a
                    href="/support"
                    class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-500"
                  >
                    Contact us
                  </a>
                </div>
                <div class="rounded-md shadow ml-4">
                  <a
                    href="/#download"
                    class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50"
                  >
                    Try Lily Wallet
                  </a>
                </div>
              </div>
            </div>
            <div class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <svg
                class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="384"
                  fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                />
              </svg>
              <blockquote class="relative bg-white rounded-lg shadow-lg">
                <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  <span class="flex items-center">
                    <img src="./logo.svg" alt="Lily Wallet" class="h-8" />
                    <span class="ml-2 mt-1">Lily Wallet</span>
                  </span>
                  <div class="relative text-lg text-gray-700 font-medium mt-8">
                    <svg
                      class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p class="relative">
                      Bitcoin combines cryptography, game theory, and free
                      market economics into one coherent system used to exchange
                      value across space and time. It's the most exciting thing
                      to be apart of right now.
                    </p>
                  </div>
                </div>
                <cite class="relative flex items-center sm:items-start bg-emerald-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                  <div class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                    <img
                      class="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-emerald-300"
                      src="./screenshots/kevin-small.jpeg"
                      alt=""
                    />
                  </div>
                  <span class="relative ml-4 text-green-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                    <p class="text-white font-semibold md:mr-2 sm:inline">
                      Kevin Mulcrone
                    </p>
                    <p class="sm:inline">CEO at Lily Wallet</p>
                  </span>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Press;
