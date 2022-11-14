import React from "react";
import Link from "next/link";
import Head from "next/head";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";

const tiers = [
  {
    name: "Personal",
    href: "/download",
    priceAnnual: 0,
    description:
      "An entry level solution for easily managing your personal stash of bitcoins.",
    features: [
      "Manage existing funds on hardware wallets",
      "Lightning network account management",
      "Full PSBT support",
      "Fee customization",
    ],
    cta: "Download Lily Wallet",
  },
  {
    name: "Multisig",
    href: "/download",
    priceAnnual: 100,
    description:
      "A premium solution for businesses, inheritance, or high net-worth individuals",
    features: [
      "Eliminate single points of failure",
      "Collaborative custody with other stakeholders",
      "Zero KYC or invasive surveillance",
      "Premium support staff on call to assist",
    ],
    cta: "Purchase in-app",
  },
];

const Pricing = () => {
  return (
    <>
      <div class="relative pt-6">
        <Head>
          <title>Pricing - Lily Wallet</title>
          <HeaderStuff />
        </Head>
        <Navigation />

        <div className="">
          <div className="pt-12 sm:pt-16 lg:pt-24 bg-emerald-600 bg-gradient-to-b from-emerald-500 to-emerald-700">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl space-y-2 pb-8 sm:pb-12 lg:pb-16">
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
                  <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Pricing
                  </p>
                </Transition>
                <Transition
                  appear={true}
                  show={true}
                  enter="transition-all duration-500 delay-100"
                  enterFrom="opacity-0 translate-y-6"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition-opacity duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <p className="text-xl text-green-200">
                    Use Lily Wallet for free to manage your personal stash.
                    Upgrade to multisig for more robust security and complex
                    custody solutions.
                  </p>
                </Transition>
              </div>
            </div>
          </div>
          <div className="bg-gray-50">
            <div className="relative">
              <div className="absolute inset-0 h-3/4 bg-emerald-700" />
              <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-md space-y-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                  {tiers.map((tier) => (
                    <Transition
                      appear={true}
                      show={true}
                      enter="transition-all duration-500 delay-500"
                      enterFrom="opacity-0 blur-xl scale-50"
                      enterTo="opacity-100 blur-0 scale-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div
                        key={tier.name}
                        className="flex flex-col overflow-hidden rounded-3xl shadow-lg"
                      >
                        <div className="bg-white px-6 py-8 sm:p-10 sm:pb-6">
                          <div>
                            <h3
                              className="inline-flex text-lg font-medium font-sans text-transparent text-yellow-400 bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-500"
                              id="tier-standard"
                            >
                              {tier.name}
                            </h3>
                          </div>
                          {tier.priceAnnual ? (
                            <div className="mt-1 flex items-baseline text-6xl font-bold tracking-tight">
                              ${tier.priceAnnual}
                              <span className="ml-1 text-2xl font-medium tracking-normal text-gray-500">
                                /year
                              </span>
                            </div>
                          ) : (
                            <div className="mt-1 flex items-baseline text-6xl font-bold tracking-tight">
                              Free
                            </div>
                          )}
                          <p className="mt-5 text-lg text-gray-500">
                            {tier.description}
                          </p>
                        </div>
                        <div className="flex flex-1 flex-col justify-between space-y-16 bg-gray-50 px-6 pt-6 pb-8 sm:p-10 sm:pt-12">
                          <ul role="list" className="space-y-8">
                            {tier.features.map((feature) => (
                              <li key={feature} className="flex items-start">
                                <div className="flex-shrink-0">
                                  <CheckIcon
                                    className="h-6 w-6 text-green-500"
                                    aria-hidden="true"
                                  />
                                </div>
                                <p className="ml-3 text-base text-gray-700">
                                  {feature}
                                </p>
                              </li>
                            ))}
                          </ul>
                          <div className="rounded-md shadow">
                            <a
                              href={tier.href}
                              className="flex items-center justify-center rounded-md border border-transparent bg-yellow-500 bg-gradient-to-b from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 px-5 py-3 text-base font-medium text-white hover:bg-yellow-400"
                              aria-describedby="tier-standard"
                            >
                              {tier.cta}
                            </a>
                          </div>
                        </div>
                      </div>
                    </Transition>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:mt-5 lg:px-8">
              <div className="mx-auto max-w-md lg:max-w-5xl">
                <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                  <div className="flex-1">
                    <div>
                      <h3 className="inline-flex py-1 text-semibold font-medium font-sans text-lg text-yellow-500">
                        Conceirge Service
                      </h3>
                    </div>
                    <div className="mt-4 text-lg text-gray-600">
                      Get one-on-one access to a Lily Wallet customer service
                      representative to setup your wallet and answer questions
                      about self-custody for{" "}
                      <span className="font-semibold text-gray-900">$29</span>.
                    </div>
                  </div>
                  <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                    <Link href="/talk-to-an-expert">
                      <a className="flex items-center justify-center rounded-md border border-transparent bg-yellow-500 bg-gradient-to-b from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 px-5 py-3 text-base font-medium text-white hover:bg-yellow-400">
                        Schedule Conceirge Onboarding
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  No, we only accept Bitcoin as payment because it's
                  irreversable and gives our customers an opportunity to get
                  comfortable sending money using Lily Wallet.
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
          <div class="bg-emerald-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
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
                  href="/download"
                  class="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-green-600 hover:bg-emerald-50"
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
