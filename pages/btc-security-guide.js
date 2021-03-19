import Head from "next/head";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";

const BTCSecurityGuide = () => {
  return (
    <div className="relative pt-6 bg-white">
      <Head>
        <title>Bitcoin Security Guide - Lily Wallet</title>
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
                  Bitcoin Security Guide
                </span>
              </h1>
              {/* <p class="mt-8 text-xl text-gray-500 leading-8">
                Our mission is to make securing bitcoin safe and easy. We
                believe that bitcoin is the best monetary network ever created.
                Because of this belief, we build products and provide support
                for normal people to make using bitcoin secure and easy.
              </p> */}
              {/* </div> */}
              <div class="mt-6 prose prose-green prose-lg text-gray-500 mx-auto">
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
                <h2>Introduction: Keys are Key</h2>
                <p>
                  Bitcoins are secured by private keys. These keys are random
                  strings of letters and numbers that, through cryptography,
                  allow someone who knows them to send coins to other people.
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
                  Before diving right into it, it's helpful to set the scene.
                </p>
                <p>
                  In the early days of bitcoin, users would keep track of
                  individual private keys that secured their coins. In 2012 and
                  2013, proposals to make private key management easier were put
                  forth.{" "}
                </p>

                <p>
                  The first proposal,{" "}
                  <a
                    href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"
                    target="_blank"
                    className="text-gray-500 no-underline"
                  >
                    BIP32
                  </a>
                  {", "}
                  introduced what is called heirarchically deterministic
                  wallets. While it sounds intimidating, HD wallets simply allow
                  a user to derive a number of different private keys from one
                  master private key.
                </p>
                <p>
                  The other proposal,{" "}
                  <a
                    href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
                    target="_blank"
                  >
                    BIP39
                  </a>
                  {", "}
                  was to use mnemonic phrases to represent the random strings of
                  letters and numbers into more human readable (and correctable)
                  forms. This reduced potential errors when backing up your
                  keys.
                </p>
                <p>
                  With these two concepts standardized, companies like Trezor
                  and Ledger started manufacturing devices called hardware
                  wallets that that utilized these technologies.
                </p>
                <p>
                  This greatly improved the user experience and security of
                  bitcoin. Now users can write down one sequence of 24 words to
                  access and recover their funds. At the same time, hardware
                  wallets allow users to store their private keys offline and
                  simply plug a device into their computer to approve
                  transactions.
                </p>
                <p>
                  With hardware wallets, private keys now take on a physical
                  form like real keys that people use to lock their cars or
                  houses with.
                </p>
                <h2>Don't lose your keys</h2>
                <p>
                  With the introduction of hardware wallets, not losing your
                  private keys seems pretty trivial to solve. Just don't lose
                  your hardware wallet! Put it in a locked cabinet in your
                  house, engrave your seed phrase into a plate of steal and bury
                  it in the backyard, put your hardware wallet in the safety
                  deposit box at the bank.{" "}
                </p>
                <p>
                  While these are all viable solutions, they are still open to
                  failure. What if the house burns down? What if your kids get
                  into the cabinet, steal the device, and lose it? What if the
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
                  making copies of our mneomonic and storing them in different
                  places. If we lose track of our keys in one location, we can
                  go to another spot where we stored them and still maintain
                  control of our money.
                </p>
                <p>
                  While this strategy diminishes the risk of losing our private
                  keys, it increases the likelihood of others finding our
                  private keys. Because of this, simply making multiple copies
                  of your private keys is not a suggested strategy for securing
                  your digital wealth.
                </p>
                <h2>Single point of failure</h2>
                <p>
                  The problem we described above boils down to your private key
                  being a single point of failure. If that one piece of
                  information is lost or stolen, then your digital wealth can be
                  lost forever.
                </p>
                <p>
                  So how can we create a private key setup that allows us to
                  have multiple copies of our keys while preventing someone from
                  stealing our funds if they happen to stumble upon them?
                </p>
                <p>
                  Over the past few years, the industry has started shifting
                  towards using multisignature vaults to solve this problem.
                </p>
                <h2>What is multisig?</h2>
                <p>
                  Multisig combines different private keys together to create
                  unique addresses that require multiple signatures, or
                  approvals, in order to send coins.{" "}
                </p>
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
