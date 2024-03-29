import React, { useState } from "react";
import axios from "axios";

import Head from "next/head";
import Link from "next/link";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";
import { useEffect } from "react";

const Support = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const resp = await axios.post("/api/zendesk", {
        ticket: {
          subject: "New ticket",
          comment: {
            body: message,
          },
        },
        requester: {
          name,
          email,
        },
      });
      setSuccess(true);
    } catch (e) {
      console.log("zendesk e: ", e);
      setError(e.message);
    }
    setIsLoading(false);
  };

  return (
    <div class="relative pt-6 bg-gray-50">
      <Head>
        <title>Support - Lily Wallet</title>
        <HeaderStuff />
      </Head>
      <Navigation />

      <div class="bg-gray-100">
        <div className="bg-gray-50">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 grid-cols-1">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Get in touch
                </h1>
                <p className="mt-6 text-xl text-gray-500 max-w-3xl">
                  Don't be scrambling to secure your digital wealth. Get started
                  with Lily today and secure your bitcoins for generations.
                </p>
              </div>
              <div className="flex justify-center items-center mt-12 flex-col md:flex-row">
                <Link href="/talk-to-an-expert">
                  <button className="w-full bg-emerald-600 text-white rounded-md py-6 px-6 text-xl md:mr-4 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:bg-gray-50 active:text-green-700 transition duration-150 ease-in-out">
                    Talk to an expert
                  </button>
                </Link>
                <Link href="https://docs.lily-wallet.com" target="_blank">
                  <button className="w-full mt-6 md:mt-0 bg-white text-green-600 border border-green-600 rounded-md py-6 px-6 text-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:bg-gray-50 active:text-green-700 transition duration-150 ease-in-out">
                    Read the docs
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="relative bg-white shadow-xl">
            <h2 class="sr-only">Contact us</h2>

            <div class="grid grid-cols-1 lg:grid-cols-3">
              <div class="relative overflow-hidden py-10 px-6 bg-emerald-700 sm:px-10 xl:p-12">
                <div
                  class="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 w-full h-full"
                    width="343"
                    height="388"
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff"></stop>
                        <stop
                          offset="1"
                          stop-color="#fff"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 w-full h-full"
                    width="359"
                    height="339"
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff"></stop>
                        <stop
                          offset="1"
                          stop-color="#fff"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 w-full h-full"
                    width="160"
                    height="678"
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff"></stop>
                        <stop
                          offset="1"
                          stop-color="#fff"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-white">
                  Contact information
                </h3>
                <p class="mt-6 text-base text-green-50 max-w-3xl">
                  We love talking with customers about bitcoin. If you have any
                  questions, please feel free to reach out!
                </p>
                <dl class="mt-8 space-y-2">
                  <dt>
                    <span class="sr-only">Email</span>
                  </dt>
                  <span className="text-green-50 font-bold">
                    Sales and Technical Support
                  </span>
                  <dd class="flex text-base text-green-50">
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-green-200"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="ml-3">help@lily-wallet.com</span>
                  </dd>
                </dl>
                <ul class="mt-8 flex space-x-12" role="list">
                  <li>
                    <a
                      class="text-green-200 hover:text-green-100"
                      target="_blank"
                      href="https://github.com/Lily-Technologies/lily-wallet"
                    >
                      <span class="sr-only">GitHub</span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        aria-hidden="true"
                      >
                        <path
                          d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-green-200 hover:text-green-100"
                      href="https://twitter.com/LilyWallet"
                      target="_blank"
                    >
                      <span class="sr-only">Twitter</span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        aria-hidden="true"
                      >
                        <path
                          d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 class="text-lg font-medium text-gray-900">
                  Send us a message
                </h3>
                <form
                  onSubmit={(e) => submitForm(e)}
                  class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="name"
                      class="block text-sm font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autocomplete="given-name"
                        disabled={isLoading || success}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      class="block text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <div class="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        disabled={isLoading || success}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <div class="flex justify-between">
                      <label
                        htmlFor="message"
                        class="block text-sm font-medium text-gray-900"
                      >
                        Message
                      </label>
                    </div>
                    <div class="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        disabled={isLoading || success}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md disabled:opacity-50"
                        aria-describedby="message-max"
                      ></textarea>
                    </div>
                  </div>
                  <div class="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      disabled={isLoading || success}
                      class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto disabled:opacity-50"
                    >
                      {isLoading
                        ? "Sending..."
                        : error
                        ? "Oops, error! Try again."
                        : success
                        ? "Message Sent!"
                        : "Send message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
