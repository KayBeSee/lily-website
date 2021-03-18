import React from "react";

import Head from "next/head";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";

const Download = () => {
  return (
    <>
      <div class="relative pt-6 ">
        <Head>
          <title>Download - Lily Wallet</title>
          <HeaderStuff />
        </Head>
        <Navigation />
      </div>

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 mb-8 sm:text-5xl sm:leading-none md:text-6xl">
            Download Lily
            <br />
            <span class="text-green-600">
              and start securing your bitcoin today
            </span>
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <a
              href="https://github.com/KayBeSee/lily-wallet/releases/download/v1.1-rc-1/Lily.Wallet.Setup.1.0.2.exe"
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 flex-col items-center mx-4 my-4 shadow-md rounded-2xl hover:-translate-y-1 transform duration-500 ease-in-out"
            >
              <div>
                <img
                  className="max-h-12"
                  src="./windows-logo.png"
                  alt="Workcation"
                />
              </div>
              <div className="flex flex-col mt-4 items-center justify-center">
                <span>Windows</span>
                <span className="text-gray-500 text-xs">
                  Lily.Wallet.Setup.1.0.2.exe
                </span>
              </div>
            </a>
            <a
              href="https://github.com/KayBeSee/lily-wallet/releases/download/v1.1-rc-1/Lily.Wallet-1.0.2.AppImage"
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 flex-col items-center mx-4 my-4 shadow-md rounded-2xl hover:-translate-y-1 transform duration-500 ease-in-out"
            >
              <div>
                <img className="max-h-12" src="./linux-logo.png" alt="Mirage" />
              </div>
              <div className="flex flex-col mt-4 items-center justify-center">
                <span>Linux</span>
                <span className="text-gray-500 text-xs">
                  Lily.Wallet-1.0.2.AppImage
                </span>
              </div>
            </a>
            <a
              href="https://github.com/KayBeSee/lily-wallet/releases/download/v1.1-rc-1/Lily.Wallet-1.0.2.dmg"
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 flex-col items-center mx-4 my-4 shadow-md rounded-2xl hover:-translate-y-1 transform duration-500 ease-in-out"
            >
              <div>
                <img className=" max-h-12" src="./apple-logo.png" alt="Tuple" />
              </div>
              <div className="flex flex-col mt-4 items-center justify-center">
                <span>Mac</span>
                <span className="text-gray-500 text-xs">
                  Lily.Wallet-1.0.2.dmg
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                Hand Holding
              </h2>
              <p className="mt-4 text-xl leading-7 text-gray-600">
                Need help? We will help you create your vault and test sending
                money to and from it.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-gray-50 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-white"></div>
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                <div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
                  <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
                    Setup Walkthrough
                  </h3>
                  <p className="mt-6 text-base leading-6 text-gray-500">
                    We understand that sending and receiving Bitcoin for the
                    first time is intimidating. We will walk you through using
                    Lily step by step so you feel comfortable securing your
                    money and achieving true financial sovereignty.
                  </p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-yellow-400">
                        What's included
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200"></div>
                    </div>
                    <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                      <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700">
                          30 minute Zoom call
                        </p>
                      </li>
                      <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700">
                          1-on-1 Personal Session
                        </p>
                      </li>
                      <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700">
                          Vault Setup
                        </p>
                      </li>
                      <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700">
                          Mobile Wallet Setup
                        </p>
                      </li>
                      <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700">
                          Test Send and Receive
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                  <p className="text-lg leading-6 font-medium text-gray-900">
                    30 minute Zoom call
                  </p>
                  <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900">
                    <span>Free</span>
                  </div>

                  <div className="mt-6">
                    <div className="rounded-md shadow">
                      <a
                        href="https://calendly.com/lilywallet/setup-walkthrough"
                        target="_blank"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                      >
                        Schedule Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
            Frequently asked questions
          </h2>
          <div className="mt-6 border-t-2 border-gray-100 pt-10">
            <dl className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Can I buy Bitcoin using Lily?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      No, Lily is just a wallet used to store, receive, and send
                      bitcoin. If you wish to purchase bitcoin, create an
                      account on an exchange (we recommend{" "}
                      <a
                        href="https://river.com/signup?r=WGOGSSXV"
                        target="_blank"
                      >
                        River
                      </a>{" "}
                      or{" "}
                      <a href="https://www.swanbitcoin.com/" target="_blank">
                        Swan
                      </a>
                      )
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    What is a multisignature vault?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      Multisignature vaults are bitcoin accounts that require
                      approving spending transactions with more than one key or
                      device. This keeps your coins secure in case of key loss
                      or theft.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How long does it take to configure Lily?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      If you have all your hardware devices at hand, you can
                      create a multisignature vault and mobile wallet in under
                      10 minutes.
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Can I create a 3-of-5 multisig vault?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      Yes, you can create any k-of-n vault combination up to 15
                      devices.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Can I create an account with a single hardware wallet?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      Of course! You can import a single hardware device that
                      you already use. Your transaction history should import
                      from Ledger Live and Trezor Wallet.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Can I use my full node with Lily?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      Yes, you can retrieve transaction and UTXO data from your
                      own instance of Bitcoin Core.
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Download;
