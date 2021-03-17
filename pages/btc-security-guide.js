import Head from "next/head";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";

const BTCSecurityGuide = () => {
  return (
    <div className="relative pt-6 bg-white">
      <Head>
        <title>BTC Security Guide - Lily Wallet</title>
        <HeaderStuff />
      </Head>

      <Navigation />
      <div>
        <div class="relative py-16 bg-white overflow-hidden">
          <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              class="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <svg
                class="absolute top-12 left-full transform translate-x-32"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                class="absolute bottom-12 left-full transform translate-x-32"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                  fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                />
              </svg>
            </div>
          </div>
          <div class="relative px-4 sm:px-6 lg:px-8">
            <div class="text-lg max-w-prose mx-auto">
              <h1>
                <span class="block text-base text-center text-green-600 font-semibold tracking-wide uppercase">
                  Lily Technologies
                </span>
                <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  BTC Security Guide
                </span>
              </h1>
              {/* <p class="mt-8 text-xl text-gray-500 leading-8">
                Our mission is to make securing bitcoin safe and easy. We
                believe that bitcoin is the best monetary network ever created.
                Because of this belief, we build products and provide support
                for normal people to make using bitcoin secure and easy.
              </p> */}
              {/* </div> */}
              <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <p>
                  There is a lot of information out there about Bitcoin security
                  and how to properly secure your digitial wealth.
                </p>
                <p>
                  While there is a lot of high quality content out there
                  already, we felt compelled to put forth our own thinking as a
                  security company in the space so that our customers and
                  customers-to-be understand why we built Lily Wallet.
                </p>
                <p>
                  This guide is mostly inspired by Michael Flaxman's BTC
                  Security Guide.
                </p>
                <h2> Introduction: Keys are Key</h2>
                <p>
                  Bitcoins are secured by private keys. These keys are random
                  strings of letters and numbers that, through cryptography,
                  allow someone who knows them to send your coins to other
                  people.
                </p>
                <p>Therefore it is important that:</p>
                <ol>
                  <li>You don't lose your private keys</li>
                  <li>Others don't find your private keys</li>
                </ol>
                <p>
                  If either of these two things happen, then your digital wealth
                  can be lost or stolen.
                </p>
                <h2>The evolution of private keys</h2>
                <p>
                  In the early days of bitcoin, users would keep track of
                  individual private keys that secured their coins. In 20XX,
                  proposals to make private key management easier were proposed.
                  One proposal was to use mnemonic phrases to represent the
                  random strings of letters and numbers into more human readable
                  (and correctable) forms. This reduced potential errors when
                  backing up your keys.
                </p>
                <p>
                  The other proposal introduced what is called heirarchically
                  deterministic wallets. While it sounds intimidating, HD
                  wallets are actually very simple. They allow a user to derive
                  a number of different private keys from one master private
                  key.
                </p>
                <p>
                  With these two concepts standardized, companies like Trezor
                  and Ledger started manufacturing devices that could be backed
                  up using mnemonics and used the HD wallet derivation scheme to
                  manage multiple addresses with them.
                </p>
                <p>
                  This greatly improved the user experience and security of
                  bitcoin. Now users could write down one sequence of 24 words
                  that could be used to access and recover their funds. At the
                  same time, these new devices known as hardware wallets meant
                  that users could simple plug in a device to manage and approve
                  their digital wealth.
                </p>
                <p>
                  This meant that private keys now took on a physical form like
                  real keys that people use to lock their cars or houses with.
                </p>
                <h2>How not to lose your private keys</h2>
                <p>
                  With the introduction of hardware wallets, not losing your
                  private keys seems pretty trivial to solve. Just don't lose
                  your hardware wallet! Put them in a locked cabinet in your
                  house, engrave your seed phrase into a plate of steal and bury
                  it in the back yard, put your hardware wallet in the safety
                  deposit box at the bank.{" "}
                </p>
                <p>
                  While these are all viable solutions, they are still open to
                  failure. What if the house burns down? What if your kids get
                  into the cabinet and spill water on them? What if the
                  landscapers dig up the steal plate while planting the garden
                  and haul it off to a landfill? What if you lose access to the
                  safety deposit box?
                </p>
                <p>
                  We admit, the odds of some of the situations we listed above
                  are very unlikely. Almost unheard of in fact. But there is a
                  more than 0% chance that they might happen, and if they do,
                  your digital wealth is toast.
                </p>
                <p>
                  We can mitigate the risk of losing our private keys by simply
                  making copies and storing them in different places. If we lose
                  track of our keys in one location, we can go to another spot
                  where we stored them and still maintain control of our money.
                </p>
                <p>
                  While this strategy diminishes the risk of losing our private
                  keys, it increases the likelihood of others finding our
                  private keys. Because of this, simply making multiple copies
                  of your private keys is not a suggested strategy for securing
                  your digital wealth.
                </p>
                <p>
                  So how can we create a private key setup that allows us to
                  have multiple copies of our keys while preventing someone from
                  stealing our funds if they happen to stumble upon them?
                </p>
                <p>
                  Over the past few years, the industry has been leaning towards
                  using multisignature vaults to solve this problem.
                </p>
                <h2>What is multisig?</h2>
                <p>
                  Multisig combines different private keys together to create
                  unique addresses that require signatures, or approvals, from
                  multiple keys in order to send coins.
                </p>
              </div>
            </div>

            <div class="bg-white">
              <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                  <div class="space-y-5 sm:space-y-4">
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                      About Us
                    </h2>
                    <p class="text-xl text-gray-500">
                      Lily was started in March 2020 because its developers were
                      frustrated by how complex multisignature wallets for
                      Bitcoin were. They set out to make a wallet their parents
                      could use.
                    </p>
                  </div>
                  <div class="lg:col-span-2">
                    <ul class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                      <li class="sm:py-8">
                        <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                          <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                            <img
                              class="object-cover shadow-lg rounded-lg"
                              src="./screenshots/kevin.jpeg"
                              alt=""
                            />
                          </div>
                          <div class="sm:col-span-2">
                            <div class="space-y-4">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Kevin Mulcrone</h3>
                                <p class="text-green-600">Co-Founder / CEO</p>
                              </div>
                              <div class="text-lg">
                                <p class="text-gray-500 mb-3">
                                  Kevin first heard about Bitcoin in 2012 when
                                  his AP Computer Science classmates began
                                  mining it in their high school's computer lab.
                                </p>

                                <p class="text-gray-500">
                                  He believes Bitcoin will help foster a society
                                  that is more free, productive, ethical, and
                                  fun than our world today.
                                </p>
                              </div>
                              <ul class="flex space-x-5">
                                <li>
                                  <a
                                    href="https://twitter.com/KayBeSee"
                                    target="_blank"
                                    class="text-gray-400 hover:text-gray-500"
                                  >
                                    <span class="sr-only">Twitter</span>
                                    <svg
                                      class="w-5 h-5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      aria-hidden="true"
                                    >
                                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://www.linkedin.com/in/kevinmulcrone/"
                                    target="_blank"
                                    class="text-gray-400 hover:text-gray-500"
                                  >
                                    <span class="sr-only">LinkedIn</span>
                                    <svg
                                      class="w-5 h-5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
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

export default BTCSecurityGuide;
