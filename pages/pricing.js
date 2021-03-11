import React from "react";

import Head from "next/head";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";

const Pricing = () => {
  return (
    <>
      <div class="relative pt-6 pb-12 lg:pb-20">
        <Head>
          <title>Lily Wallet - Multisig Bitcoin Wallet</title>
          <HeaderStuff />
        </Head>
        <Navigation />
        <div class="bg-green-600">
          <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div class="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
              <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Pricing Plans
                </h2>
                <p class="mt-5 text-xl text-green-300">
                  Connect your existing hardware wallet for free, then create a
                  vault for extra security. All purchases are made within the
                  application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-2xl mx-auto bg-white mt-8 rounded-lg py-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="space-y-24 lg:hidden">
          <div>
            <div class="px-4">
              <h2 class="text-lg leading-6 font-medium text-gray-900">Free</h2>
              <p class="mt-4">
                <span class="text-4xl font-extrabold text-gray-900">$0</span>
                <span class="text-base font-medium text-gray-500">/year</span>
              </p>
              <a
                href="#"
                class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Download Lily
              </a>
            </div>

            <table class="mt-8 w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Features
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Single Signature Hardware Wallets
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    2-of-3 Multisig Vaults
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    3-of-5 Multisig Vaults
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Network
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Connect to Bitcoin Core
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Tor Support
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Support
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Email Support
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Phone / Zoom Support
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="border-t border-gray-200 px-4 pt-5">
              <a
                href="#"
                class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Download Lily
              </a>
            </div>
          </div>

          <div>
            <div class="px-4">
              <h2 class="text-lg leading-6 font-medium text-gray-900">Basic</h2>
              <p class="mt-4">
                <span class="text-4xl font-extrabold text-gray-900">$100</span>
                <span class="text-base font-medium text-gray-500">/year</span>
              </p>
              <a
                href="#"
                class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Purchase In-App
              </a>
            </div>

            <table class="mt-8 w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Features
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Single Signature Hardware Wallets
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    2-of-3 Multisig Vaults
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    3-of-5 Multisig Vaults
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Network
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Connect to Bitcoin Core
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Tor Support
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Support
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Email Support
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Phone / Zoom Support
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="border-t border-gray-200 px-4 pt-5">
              <a
                href="#"
                class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Purchase In-App
              </a>
            </div>
          </div>

          <div>
            <div class="px-4">
              <h2 class="text-lg leading-6 font-medium text-gray-900">
                Essential
              </h2>
              <p class="mt-4">
                <span class="text-4xl font-extrabold text-gray-900">$500</span>
                <span class="text-base font-medium text-gray-500">/year</span>
              </p>
              <a
                href="#"
                class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Purchase In-App
              </a>
            </div>

            <table class="mt-8 w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Features
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Single Signature Hardware Wallets
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    2-of-3 Multisig Vaults
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    3-of-5 Multisig Vaults
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Network
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Connect to Bitcoin Core
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Tor Support
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Support
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Email Support
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Phone / Zoom Support
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="border-t border-gray-200 px-4 pt-5">
              <a
                href="#"
                class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Purchase In-App
              </a>
            </div>
          </div>

          <div>
            <div class="px-4">
              <h2 class="text-lg leading-6 font-medium text-gray-900">
                Premium
              </h2>
              <p class="mt-4">
                <span class="text-4xl font-extrabold text-gray-900">$1000</span>
                <span class="text-base font-medium text-gray-500">/year</span>
              </p>
              <a
                href="#"
                class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Purchase In-App
              </a>
            </div>

            <table class="mt-8 w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Features
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Single Signature Hardware Wallets
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    2-of-3 Multisig Vaults
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    3-of-5 Multisig Vaults
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Network
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Connect to Bitcoin Core
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Tor Support
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Support
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Email Support
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Phone / Zoom Support
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      class="ml-auto h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="border-t border-gray-200 px-4 pt-5">
              <a
                href="#"
                class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Purchase In-App
              </a>
            </div>
          </div>
        </div>

        <div class="hidden lg:block">
          <table class="w-full h-px table-fixed">
            <caption class="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  class="pb-4 pl-6 pr-6 text-sm font-medium text-gray-900 text-left"
                  scope="col"
                >
                  <span class="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>

                <th
                  class="w-1/5 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  Free
                </th>

                <th
                  class="w-1/5 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  Basic
                </th>

                <th
                  class="w-1/5 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  Essential
                </th>

                <th
                  class="w-1/5 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  Premium
                </th>
              </tr>
            </thead>
            <tbody class="border-t border-gray-200 divide-y divide-gray-200">
              <tr>
                <th
                  class="py-8 pl-6 pr-6 align-top text-sm font-medium text-gray-900 text-left"
                  scope="row"
                >
                  Pricing
                </th>

                <td class="h-full py-8 px-6 align-top">
                  <div class="h-full flex flex-col justify-between">
                    <div>
                      <p>
                        <span class="text-4xl font-extrabold text-gray-900">
                          $0
                        </span>
                        <span class="text-base font-medium text-gray-500">
                          /year
                        </span>
                      </p>
                    </div>
                    <a
                      href="#"
                      class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                    >
                      Download Lily
                    </a>
                  </div>
                </td>

                <td class="h-full py-8 px-6 align-top">
                  <div class="h-full flex flex-col justify-between">
                    <div>
                      <p>
                        <span class="text-4xl font-extrabold text-gray-900">
                          $100
                        </span>
                        <span class="text-base font-medium text-gray-500">
                          /year
                        </span>
                      </p>
                    </div>
                    <a
                      href="#"
                      class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                    >
                      Purchase In-App
                    </a>
                  </div>
                </td>

                <td class="h-full py-8 px-6 align-top">
                  <div class="h-full flex flex-col justify-between">
                    <div>
                      <p>
                        <span class="text-4xl font-extrabold text-gray-900">
                          $500
                        </span>
                        <span class="text-base font-medium text-gray-500">
                          /year
                        </span>
                      </p>
                    </div>
                    <a
                      href="#"
                      class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                    >
                      Purchase In-App
                    </a>
                  </div>
                </td>

                <td class="h-full py-8 px-6 align-top">
                  <div class="h-full flex flex-col justify-between">
                    <div>
                      <p>
                        <span class="text-4xl font-extrabold text-gray-900">
                          $1000
                        </span>
                        <span class="text-base font-medium text-gray-500">
                          /year
                        </span>
                      </p>
                    </div>
                    <a
                      href="#"
                      class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                    >
                      Purchase In-App
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  class="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left"
                  colspan="5"
                  scope="colgroup"
                >
                  Features
                </th>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Single Signature Hardware Wallets
                </th>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Free</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Basic</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Essential</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  2-of-3 Multisig Vaults
                </th>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Not included in Free</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Basic</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Essential</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  3-of-5 Multisig Vaults
                </th>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Not included in Free</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Not included in Basic</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Essential</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  class="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left"
                  colspan="5"
                  scope="colgroup"
                >
                  Network
                </th>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Connect to Bitcoin Core
                </th>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Not included in Free</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Basic</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Essential</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Tor Support
                </th>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Not included in Free</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Basic</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Essential</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left"
                  colspan="5"
                  scope="colgroup"
                >
                  Support
                </th>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Email Support
                </th>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Not included in Free</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Basic</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Essential</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Phone / Zoom Support
                </th>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Not included in Free</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Not included in Basic</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Not included in Essential</span>
                </td>
                <td class="py-5 px-6">
                  <svg
                    class="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="border-t border-gray-200">
                <th class="sr-only" scope="row">
                  Choose your plan
                </th>

                <td class="pt-5 px-6">
                  <a
                    href="#"
                    class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                  >
                    Download Lily
                  </a>
                </td>

                <td class="pt-5 px-6">
                  <a
                    href="#"
                    class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                  >
                    Purchase In-App
                  </a>
                </td>

                <td class="pt-5 px-6">
                  <a
                    href="#"
                    class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                  >
                    Purchase In-App
                  </a>
                </td>

                <td class="pt-5 px-6">
                  <a
                    href="#"
                    class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                  >
                    Purchase In-App
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div class="bg-gray-50">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-gray-900 text-center">
            Frequently asked questions
          </h2>
          <div class="mt-12">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              <div class="space-y-2">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  Why does this Lily cost money?
                </dt>
                <dd class="text-base text-gray-500">
                  Building and maintaining high quality software is a time
                  consuming activity. We charge money for Lily in order to align
                  our incentives to keep the software up to date.
                </dd>
              </div>
              <div class="space-y-2">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  Why do you charge on a yearly basis?
                </dt>
                <dd class="text-base text-gray-500">
                  We charge on a yearly basis to keep incentives aligned. If we
                  charged a one-time fee, we would have no incentive to continue
                  to maintain the software after onboarding our initial
                  customers.
                </dd>
              </div>
              <div class="space-y-2">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  What're the differences between each tier?
                </dt>
                <dd class="text-base text-gray-500">
                  The differences between each tier are shown above, but they
                  mostly come down to the number of devices you are able to
                  secure your funds with and the level of support available.
                </dd>
              </div>
              <div class="space-y-2">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  Can I purchase a license using a credit card?
                </dt>
                <dd class="text-base text-gray-500">
                  We prefer receiving payment in Bitcoin because it's
                  irreversable and gives our customers an opprotunity to send
                  money using Lily. However, we will accept fiat if you email
                  KayBeSee@gmail.com.
                </dd>
              </div>
              <div class="space-y-2">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  What happens if Lily disappears or stops updating its
                  software?
                </dt>
                <dd class="text-base text-gray-500">
                  Your funds are always safe when using Lily. If we disappear or
                  go out of business, you can easily export your wallet data to
                  other software like Bitcoin Core, Blue Wallet, or Caravan.
                </dd>
              </div>
              <div class="space-y-2">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  Do you require KYC/AML information for a license?
                </dt>
                <dd class="text-base text-gray-500">
                  Nope. Lily doesn't require any KYC/AML information from our
                  customers.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="bg-green-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div class="lg:self-center">
                <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                  <span class="block">Ready to secure your Bitcoin?</span>
                </h2>
                <p class="mt-4 text-lg leading-6 text-green-200">
                  Download Lily, connect your devices, and start securing your
                  bitcoin in under 10 minutes
                </p>
                <a
                  href="https://docs.lily.kevinmulcrone.com/installation"
                  class="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-green-600 hover:bg-indigo-50"
                >
                  Download Lily
                </a>
              </div>
            </div>
            <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="./screenshots/account.png"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
