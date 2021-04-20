import Head from "next/head";
import Link from "next/link";

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
                  allow users to send coins to other people.
                </p>
                <p>Therefore it is important that:</p>
                <ol>
                  <li>You don't lose your private keys</li>
                  <li>Others don't find your private keys</li>
                </ol>
                <p>
                  If either of these two things happen, then your digital wealth
                  can be lost or stolen forever.
                </p>
                <h2>The evolution of private keys</h2>
                <p>
                  Before diving right into it, it's helpful to set the scene.
                </p>
                <p>
                  In the early days of bitcoin, users would generate a new
                  private key each time they wanted to receive new coins. These
                  private keys were either stored locally on the user's computer
                  where they could be found by malicious software or else
                  printed out on a piece of paper and stored in an offline
                  location like a locked file cabinet.
                </p>

                <figure>
                  <img
                    className="w-full rounded-lg"
                    src="/btc-security-guide/paper-wallet.jpeg"
                  />
                  <figcaption className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    A paper wallet generated on bitaddress.org
                  </figcaption>
                </figure>

                <p>
                  This system forced users to keep track of a lot of data in
                  order to use their bitcoin and wasn't very secure. In 2012 and
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
                  wallets to store users private keys and approve transactions.
                </p>
                <p>
                  This greatly improved the user experience and security of
                  bitcoin. Now users can write down one sequence of 24 words to
                  access and recover all of their funds. At the same time,
                  hardware wallets allow users to store their private keys
                  offline and simply plug a device into their computer to
                  approve transactions.
                </p>
                <p>
                  With hardware wallets, private keys now take on a physical
                  form like real keys that people use to lock their cars or
                  houses with.
                </p>

                <figure>
                  <img
                    className="w-full rounded-lg"
                    src="/btc-security-guide/ledger.jpeg"
                  />
                  <figcaption className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    The introduction of hardware wallets was a major leap
                    forward for bitcoin security and user experience.
                  </figcaption>
                </figure>

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
                  your digital wealth is lost forever.
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
                  keys, it increases the likelihood of others finding them.
                  Because of this, simply making multiple copies of your private
                  keys is not a suggested strategy for securing your digital
                  wealth.
                </p>
                <h2>Keys are single points of failure</h2>
                <p>
                  The problem we describe above boils down to your private key
                  being a single point of failure. If that one piece of
                  information is lost or stolen, then your digital wealth can be
                  lost forever.
                </p>
                <p>
                  So how can we secure our bitcoin in such a way that removes
                  single points of failure and allows forgiveness in the event
                  something goes wrong?
                </p>
                <p>
                  Over the past few years, the industry has started shifting
                  towards using multisignature vaults to solve this problem.
                </p>
                <h2>What is multisig?</h2>
                <p>
                  Multisig combines different private keys together to create
                  addresses that require multiple signatures, or approvals, in
                  order to send coins.
                </p>

                <p>
                  It is a concept that is baked into the bitcoin protocol and
                  exponentially increase the security of your digital wealth.
                </p>

                <p>
                  By having coins controlled by multiple keys in a multisig
                  format, users create redundancy in their security setup and
                  make their digital wealth more resilient than traditional
                  single-key security.
                </p>

                <p>
                  Let's walk through what would happen if a key that controls a
                  multisignature vault is lost or stolen:
                </p>
                <p>
                  After noticing a hardware wallet is missing, a new one is
                  purchased from a manufacturer. When it arrives, you create a
                  new multisignature vault with it and the two other keys from
                  the previous vault. You then create a transaction sending
                  coins from the old vault to the newly created one. The new
                  transaction is then approved by the two devices that are still
                  safe and moved over to the new vault.
                </p>

                <p>
                  Even though we lost one of our keys, we are still in complete
                  control of our funds and able to move them over to a new vault
                  with the same resilliency as our vault before we lost one of
                  our keys.
                </p>

                <h2>Other single points of failure to consider</h2>
                <p>
                  While multisig provides resilient security for bitcoin in
                  theory, there are other single points of failure that should
                  be considered when setting up a multisignautre vault.
                </p>

                <h4>Hardware wallets are single points of failure</h4>
                <p>
                  The easiest way to reintroduce single points of failure to
                  your bitcoin security setup is to use the same model hardware
                  wallet from the same hardware wallet manufactuerer when
                  creating your multisignature vault.
                </p>

                <p>
                  Hardware wallets from the same manufacturer will likely run
                  the same or similar code to secure your private keys. If there
                  is a critical bug in the code that effects the device's
                  ability to approve a transaction, then users can rely on their
                  other devices to move their funds.
                </p>

                <p>
                  Therefore, Lily Technologies recommends using hardware wallets
                  from different manufacturers when creating your multisignature
                  vault.
                </p>

                <h4>Software wallets are a single points of failure</h4>
                <p>
                  Just like hardware wallets, the wallet software used to manage
                  bitcoin can also be a single point of failure.
                </p>

                <p>
                  The posibility that a critical bug is laying unnoticed in a
                  piece of software is possible and can result in losing access
                  to your bitcoin. It is therefore important that users are able
                  to verify that the data one piece of software is producing can
                  be replicated in other software written by different
                  developers.
                </p>

                <p>
                  Lily Wallet makes it easy to do this by allowing users to
                  export their vault in formats accepted by other wallet
                  software like Caravan and Bitcoin Core.
                </p>

                <h4>Companies are single points of failure</h4>
                <p>
                  There is also the posibility that the software that you are
                  using to manage your bitcoin can be abandoned or stop being
                  mantained by the developers or companies who introduced them.
                </p>

                <p>
                  This is why we charge an annual subscription fee for Lily
                  Wallet. It aligns incentives to keep maintaining the wallet
                  and add new features.
                </p>

                <p>
                  But even then, there is still the posibility that something
                  will happen and the software will be abandoned. That is why
                  Lily Wallet is open source, so someone else could pick it up.
                  It is also why Lily Wallet is able to be plugged into Bitcoin
                  Core.
                </p>

                <p>
                  If we were to make a bet about what piece of software will
                  still be maintained 100 years from now, it would be Bitcoin
                  Core. If we are wrong, and Bitcoin Core becomes an abandoned
                  project 100 years from now, then Bitcoin itself will most
                  likely be a failed project.
                </p>

                <h2>Next steps</h2>
                <p>
                  We have outlined our thinking about bitcoin security above and
                  have concluded that securing your bitcoin using multisig is
                  the most resilient way to store your digital wealth.
                </p>

                <p>
                  But what are actionable steps users can take today to start
                  securing their wealth?
                </p>

                <h4>1) Download Lily Wallet</h4>
                <p>
                  You can download the{" "}
                  <Link href="/download">
                    <a>latest version</a>
                  </Link>{" "}
                  of Lily Wallet from our website.
                </p>

                <h4>
                  2) Order Coldcard, Cobo Vault, and Trezor hardware wallets
                </h4>
                <p>
                  As mentioned above, we recommend using different hardware
                  wallets from different manufactuerers.
                </p>

                <p>
                  We personally secure our funds with a multisig vault and store
                  the keys on Coldcard's MK3, Cobo's Cobo Vault, and Trezor's
                  Model One.
                </p>

                <h4>3) Setup a multisig vault with Lily Wallet</h4>
                <p>
                  Once you have recieved your hardware wallets, setup a
                  multisignature vault with Lily Wallet.
                </p>

                <p>
                  We have detailed instructions with images on how to setup Lily
                  Wallet in our{" "}
                  <a
                    href="https://docs.lily-wallet.com/get-started/part-1"
                    target="_blank"
                  >
                    get started guide
                  </a>
                  .
                </p>

                <p>
                  If you run into any problems or want an expeprt to assist you
                  while setting it up,{" "}
                  <Link href="/schedule-demo">
                    <a>schedule an an appointment</a>
                  </Link>{" "}
                  with a specialist.
                </p>

                <h4>4) Store your hardware wallets in multiple locations</h4>
                <p>
                  After setting up your vault with Lily, store your hardware
                  wallets in different geographic locations.
                </p>
                <p>
                  We recommend leaving one in a secure location in your house or
                  apartment, another in a safe deposit box at your bank, and
                  another in another location you have access to or with a
                  trusted family member or friend.
                </p>

                <div className="flex align-center justify-center mb-6">
                  <img className="h-16" src="/logo.svg" />
                </div>

                <div class="w-full border-t border-gray-300"></div>

                <p className="italic">
                  <span className="font-black text-gray-900 mr-1">
                    Responsible disclosure:
                  </span>{" "}
                  The information in this guide is for educational pursposes
                  only and is not financial advice. Please read Lily
                  Technologies{" "}
                  <Link href="/terms">
                    <a>terms and conditions</a>
                  </Link>
                  .
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
