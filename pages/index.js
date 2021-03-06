import React from "react";
import Head from "next/head";
import Link from "next/link";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";
import DownloadButtons from "../components/DownloadButtons";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="relative pt-6 bg-gray-50">
      <Head>
        <title>Lily Wallet - Multisig Bitcoin Wallet</title>
        <HeaderStuff />
      </Head>

      <Navigation />

      <div>
        <div className="relative overflow-hidden">
          <div className="block absolute inset-y-0 h-full w-full">
            <div className="relative h-full">
              <svg
                className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
                width="404"
                height="784"
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
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
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="784"
                  fill="url(#ad9a0a02-b58e-4a1d-8c36-1b649889af63)"
                />
              </svg>
              <svg
                className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
                width="404"
                height="784"
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="d2a68204-c383-44b1-b99f-42ccff4e5365"
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
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="784"
                  fill="url(#478e97d6-90df-4a89-8d63-30fdbb3c7e57)"
                />
              </svg>
            </div>
          </div>

          <div className="relative pt-6 pb-12 lg:pb-20">
            <div id="navnav"></div>

            <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-16 lg:mt-20">
              <div className="text-center">
                <h2 className="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  The best way to
                  <br />
                  <span className="text-yellow-300">secure your Bitcoin</span>
                </h2>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Lily makes it easy to keep your Bitcoin safe using
                  multisignature vaults.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1"></div>
              <div className="flex-1 w-full bank-note-background"></div>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
              <img
                className="relative"
                src="./screenshots/account.png"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
        <div className="bank-note-background">
          <div className="max-w-screen-xl mx-auto pt-16 pb-20 px-4 sm:px-6 md:pb-24 lg:px-8">
            <h3 className="text-center text-gray-100 text-sm font-semibold uppercase tracking-wide">
              Compatible with the most popular Bitcoin hardware devices
            </h3>
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                <img
                  className="h-12"
                  src="./vendor-logos/cobo.png"
                  alt="Cobo Vault"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                <img
                  className="h-12"
                  src="./vendor-logos/coldcard.png"
                  alt="Coldcard"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                <img
                  className="h-12"
                  src="./vendor-logos/trezor.svg"
                  alt="Trezor"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                <img
                  className="h-12"
                  src="./vendor-logos/ledger.svg"
                  alt="Ledger"
                />
              </div>
              <div className="col-span-1 flex justify-center text-white items-center md:col-span-1 lg:col-span-1">
                <img
                  className="h-12"
                  src="./vendor-logos/bitbox.svg"
                  alt="BitBox"
                />
                <span className="text-white text-3xl">
                  <span className="font-black">BitBox</span>02
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            role="img"
            aria-labelledby="svg-workcation"
          >
            <title id="svg-workcation">Workcation</title>
            <defs>
              <pattern
                id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
            />
          </svg>

          <div className="relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <div className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
              Self custody made easy
            </div>
            <blockquote className="mt-10">
              <div className="max-w-3xl mx-auto text-center text-xl md:text-2xl leading-9 font-medium text-gray-900">
                <p>
                  &ldquo;We've written{" "}
                  <Link href="./btc-security-guide">
                    <a
                      class="text-light-blue-600 font-semibold"
                      style={{
                        boxShadow:
                          "inset 0 -0.1666666667em 0 0 #fff, inset 0 -0.3333333333em 0 0 #6ee7b7",
                      }}
                    >
                      an entire guide
                    </a>
                  </Link>{" "}
                  about how normal bitcoiners can easily keep their coins safe
                  with enterprise level security thanks to hardware wallets and
                  multisignature vaults. There are no excuses for{" "}
                  <span className="italic">not</span> controlling your own keys
                  today.&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="./screenshots/kevin-small.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">
                      Kevin Mulcrone
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base font-medium text-gray-500">
                      CEO, Lily Technologies
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      <Testimonials />
      <Features />
      <div className="bank-note-background" id="download">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
            Download Lily
          </h1>
          <p className="mb-8 text-lg leading-8 font-medium tracking-tight text-gray-100 sm:text-lg sm:leading-10">
            and start securing your bitcoin today
          </p>
          <DownloadButtons />
        </div>
      </div>

      <div className="bg-gray-50">
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
        <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
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
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
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
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
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
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
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
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
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
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
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
                        href="/setup-walkthrough"
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
      <div className="bg-white">
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

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-green-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to secure your Bitcoin?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-green-200">
                  Download Lily, connect your devices, and start securing your
                  bitcoin in under 10 minutes
                </p>
                <Link href="/download">
                  <a className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-green-600 hover:bg-indigo-50">
                    Download Lily
                  </a>
                </Link>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="./screenshots/send.png"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
