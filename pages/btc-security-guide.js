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
              <p class="mt-8 text-xl text-gray-500 leading-8">
                Over the past twelve years, bitcoin has grown from a niche
                internet currency to one of the largest monetary networks on
                Earth. The limited supply of bitcoins causes its value to
                increase as more people decide to preserve their wealth with the
                digital asset.
              </p>
              <div class="mt-6 prose prose-green prose-lg text-gray-500 mx-auto">
                <p>
                  But knowing how to secure your bitcoins so that they are not
                  lost or stolen requires expertise in this new area of
                  cryptographic engineering.
                </p>
                <p>
                  This is why we have put together this security guide, so that
                  our customers and customers-to-be understand why we built Lily
                  Wallet and how it protects their coins.
                </p>
                <h2>Not your keys, not your bitcoin</h2>
                <p>
                  Bitcoins are secured by private keys. These keys are random
                  strings of letters and numbers that, through cryptography,
                  allow users to send coins to other people.{" "}
                </p>

                <p>
                  This cryptography is the backbone of bitcoin security and
                  possession of private keys is what makes your bitcoin yours
                  and not someone else's.
                </p>

                <p>Therefore it is important that:</p>
                <ol>
                  <li>You don't lose your private keys</li>
                  <li>Others don't find your private keys</li>
                </ol>
                <p>
                  If either of these two things happen, then your digital wealth
                  can be lost forever.
                </p>

                <p>
                  Most bitcoin owners don't actually control their own private
                  keys though. They buy, sell, and hold bitcoin on exchanges
                  like Coinbase or CashApp and hand over control of their
                  private keys to those companies.
                </p>

                <p>
                  For some folks, this is fine. They don't own that much bitcoin
                  or they are using it as a speculative asset to make a quick
                  buck. It would be more work for them to learn how to
                  self-custody their bitcoin than it's worth.
                </p>

                <p>
                  But for those of us who are holding bitcoin for the long-term,
                  relying on a third party custodian to secure our bitcoin
                  becomes more and more risky as bitcoin's value continues to go
                  up.
                </p>

                <p>
                  While self-custody may seem like a big responsibility, it has
                  actually become quite easy for normal people to take full
                  control of their digital wealth in a secure and resilient way
                  thanks to the introduction of hardware wallets and multisig
                  vaults.
                </p>

                <h2>The evolution of private keys</h2>
                <p>
                  Before diving right into it, it's helpful to look at history
                  to see how we got here.
                </p>
                <p>
                  In the early days of bitcoin, users would generate a new
                  private key each time they wanted to receive new coins.
                </p>
                <p>
                  These private keys were either stored on a user's computer
                  where they could potentially be found by malicious software or
                  else they were printed out on a piece of paper and stored in
                  an offline location like a locked file cabinet.
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
                    A paper wallet generated on bitaddress.org circa 2011
                  </figcaption>
                </figure>

                <p>
                  This system forced users to keep track of a lot of data in
                  order to use their bitcoin and it wasn't very secure. In 2012
                  and 2013, software updates were added to make private key
                  management easier.
                </p>

                <p>
                  The first update,{" "}
                  <a
                    href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"
                    target="_blank"
                    className="text-gray-500 no-underline"
                  >
                    BIP32
                  </a>
                  {", "}
                  introduced what is called hierarchical deterministic wallets.
                  While it sounds intimidating, HD wallets simply allow a user
                  to derive a number of different private keys from one master
                  private key.
                </p>
                <p>
                  The other update,{" "}
                  <a
                    href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
                    target="_blank"
                  >
                    BIP39
                  </a>
                  {", "}
                  standardized a group mnemonic words used to represent the
                  random strings of letters and numbers into a more human
                  readable (and correctable) format. This reduced potential
                  errors when backing up a master private key.
                </p>
                <p>
                  With these two updates implemented, companies like Trezor and
                  Ledger started manufacturing devices called hardware wallets
                  to store users private keys and approve transactions.
                </p>
                <p>
                  This greatly improved bitcoin's user experience and security.
                  Now users can write down one sequence of 24 words to access
                  and recover all of their funds. At the same time, hardware
                  wallets allow users to store their private keys offline and
                  simply plug a device into their computer to approve
                  transactions.
                </p>
                <p>
                  With hardware wallets, private keys now take on a physical
                  form like real keys that people use to lock their cars and
                  houses.
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

                <h2>Keys are single points of failure</h2>
                <p>
                  With the introduction of hardware wallets, not losing your
                  private keys seems pretty trivial to solve. Just don't lose
                  your hardware wallet! Put it in a locked cabinet in your
                  house, engrave your seed phrase into a plate of steel and bury
                  it in the backyard, put your hardware wallet in the safety
                  deposit box at the bank.{" "}
                </p>
                <p>
                  While these are all viable solutions, they are still open to
                  failure. What if the house burns down? What if your kids get
                  into the cabinet, steal the device, and lose it? What if the
                  landscapers dig up the steel plate while planting the garden
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
                  We could mitigate the risk of losing our private keys by
                  simply making copies of our mnemonic and storing them in
                  different places. If we lose track of our keys in one
                  location, we can go to another spot where we stored them and
                  still maintain control of our money.
                </p>
                <p>
                  While this strategy diminishes the risk of losing our private
                  keys, it increases the likelihood of others finding them.
                  Because of this, simply making multiple copies of your private
                  keys is not a suggested strategy for securing your digital
                  wealth.
                </p>

                <p>
                  The problem we describe above boils down to your private key
                  being a single point of failure. If your private key is lost
                  or stolen then your bitcoins are gone forever.
                </p>

                <p>This is why we tell our customers to:</p>
                <ol>
                  <li>Never type your 24 word mnemonic into a computer</li>
                  <li>Use a hardware wallet to store your keys offline</li>
                </ol>

                <p>
                  But what if we can secure our bitcoin in such a way that
                  removes single points of failure and allows forgiveness in the
                  event that your hardware wallet is lost or stolen?
                </p>
                <p>
                  Over the past few years, the industry has started shifting
                  towards using multisignature vaults to solve this problem.
                </p>
                <figure>
                  <img
                    className="w-full rounded-lg"
                    src="/btc-security-guide/single-sig.png"
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
                    In a single signature setup, funds cannot be accessed if the
                    private key is lost or stolen.
                  </figcaption>
                </figure>

                <h2>What is multisig?</h2>
                <p>
                  Multisig combines different private keys together to create
                  addresses that require multiple signatures, or approvals, in
                  order to send coins.
                </p>

                <p>
                  It is a concept that is baked into the bitcoin protocol and
                  exponentially increases the security of your digital wealth.
                </p>

                <p>
                  Most popular multisignature setups are 2-of-3 or 3-of-5. This
                  means that in order to send coins, the transactions must be
                  approved by two of the three or three of the five devices that
                  created the vault.
                </p>

                <p>
                  By having coins controlled by multiple keys in a multisig
                  format, users create redundancy in their security setup and
                  make their digital wealth more resilient than traditional
                  single-key security.
                </p>

                <figure>
                  <img
                    className="w-full"
                    src="/btc-security-guide/multisig.png"
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
                    A multisignature setup provides resilience by allowing funds
                    to be moved even if a private key is lost or stolen.
                  </figcaption>
                </figure>

                <p>
                  Let's walk through what happens if one of the keys that
                  controls a multisignature vault is lost or stolen:
                </p>

                <ol>
                  <li>
                    After noticing a hardware wallet is missing, purchase a new
                    one from the manufacturer.
                  </li>
                  <li>
                    When the new hardware wallet arrives, create a new
                    multisignature vault with the new device and the other
                    devices from the original vault.
                  </li>
                  <li>
                    Create a transaction sending coins from the old vault to the
                    new one.
                  </li>
                  <li>
                    Approved the transaction with the required number of devices
                    that are still accounted for.
                  </li>
                </ol>

                <p>
                  So even though we lost one of our keys, we are still in
                  complete control of our funds and able to move them over to a
                  new vault. This level of resiliency is impossible with a
                  traditional single signature setup.
                </p>

                <h2>Other security considerations</h2>
                <p>
                  While multisig provides resilient security for bitcoin in
                  theory, there are other single points of failure that should
                  be considered when setting up a multisignautre vault.
                </p>

                <h4>
                  Use different hardware wallets from different manufacturers
                </h4>
                <p>
                  The easiest way to reintroduce single points of failure to
                  your multisig setup is to use the same model hardware wallet
                  from the same hardware wallet manufacturer when creating your
                  multisignature vault.
                </p>

                <p>
                  Hardware wallets from the same manufacturer will likely run
                  the same or similar code to secure your private keys. If there
                  is a critical bug in the code that affects the device's
                  ability to approve a transaction, then users can rely on their
                  other devices to move their funds.
                </p>

                <p>
                  Therefore, Lily Technologies recommends using hardware wallets
                  from different manufacturers when creating your multisignature
                  vault.
                </p>

                <h4>Use Coldcard and Cobo Vault in your multisig setup</h4>
                <p>
                  Both Coldcard and Cobo Vault hardware wallets were built with
                  multisig vaults in mind and provide an extra layer of security
                  from sophisticated attacks involving change addresses.
                </p>

                <p>
                  While these attacks have never been exploited in the wild, we
                  still recommend users incorporate them into their vault setup
                  for peace of mind.
                </p>

                <h4>or, verify addresses with other software after setup</h4>
                <p>
                  If a user decides not to incorporate Coldcard or Cobo Vault
                  into their vault setup, then we recommend verifying addresses
                  and change addresses with other software just in case.
                </p>

                <p>
                  Lily Wallet makes it easy to do this by allowing users to
                  export their vault in formats accepted by other wallet
                  software like Caravan and Bitcoin Core.
                </p>

                <h4>Make backups of your software and configuration files</h4>

                <p>
                  It is important to keep a backup of your wallet configuration
                  in case you lose one of your hardware wallets.
                </p>

                <p>
                  Both Coldcard and Cobo Vault conveniently have MicroSD Card
                  slots for airgapping data between your wallet and the device.
                  We recommend putting a copy of your wallet software and wallet
                  config on a MicroSD Card and leaving it plugged into your
                  hardware wallet.{" "}
                </p>

                <p>
                  That way you always have a copy of the software and
                  configuration in case something goes wrong.
                </p>

                <h4>Pull blockchain data from your own node</h4>

                <p>
                  A lot of wallets including Lily Wallet pull blockchain data
                  from a third-party API by default so that users don't have to
                  run their own full node. This is convenient for users who want
                  to use the bitcoin network without running their own
                  infrastructure.
                </p>

                <p>
                  But there is the possibility that those APIs may go offline
                  and prevent you from sending funds.
                </p>

                <p>
                  This is why it is important to have the ability to connect to
                  your own bitcoin node. It provides a guarantee that you will
                  still be able to access your funds even if the wallet you use
                  stops being developed or the data API is offline.
                </p>

                <img
                  className="relative"
                  src="./screenshots/account.png"
                  alt="Lily Wallet screenshot"
                />

                <h2>Multisig is easy with Lily Wallet</h2>
                <p>
                  We built Lily Wallet because we wanted a user friendly way to
                  secure our bitcoin with multisig. We stripped out all of the
                  nitty-gritty details and enforces best practices for our users
                  behind the scenes.
                </p>

                <p>
                  In order to set up a multisig vault using Lily Wallet, simply
                  download the software and go through our vault creation
                  process. It will ask you to plug in or airgap your hardware
                  wallet devices in order to create your vault and can be
                  completed in a few minutes.
                </p>

                <p>
                  After your vault is set up, you can immediately start sending
                  and receiving bitcoin.
                </p>

                <figure>
                  <img
                    className="w-full"
                    src="/screenshots/select-hardware-wallets.png"
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
                    Using Lily Wallet makes it easy to create multisignature
                    vaults to protect your bitcoin.
                  </figcaption>
                </figure>

                <p>
                  What's more, if you want to upgrade to a first-class bitcoin
                  citizen, you can also connect Lily Wallet to your bitcoin
                  full-node for enhanced privacy and security.
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
                  wallets from different manufacturers.
                </p>

                <p>
                  We personally secure our funds with a multisig vault and store
                  the keys on Coldcard's MK3, Cobo's Cobo Vault, and Trezor's
                  Model One.
                </p>

                <h4>3) Setup a multisig vault with Lily Wallet</h4>
                <p>
                  Once you have received your hardware wallets, set up a
                  multisignature vault with Lily Wallet. We have detailed
                  instructions with images on how to set up Lily Wallet in our{" "}
                  <a
                    href="https://docs.lily-wallet.com/get-started/part-1"
                    target="_blank"
                  >
                    get started guide
                  </a>
                  .{" "}
                </p>

                <p>
                  If you run into any problems or want an expert to assist you
                  while setting it up,{" "}
                  <Link href="/schedule-demo">
                    <a>schedule an appointment</a>
                  </Link>{" "}
                  with a specialist.
                </p>

                <h4>4) Store your hardware wallets in different locations</h4>
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
                    Disclaimer:
                  </span>{" "}
                  The information in this guide is for educational purposes only
                  and is not financial advice. Please read Lily Technologies{" "}
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
