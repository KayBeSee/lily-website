import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";

import VaultSetupPrompt from "../components/VaultSetupPrompt";

const CONFIG = {
  name: "My New Vault",
  type: "onchain",
  created_at: 1661822773228,
  network: "mainnet",
  addressType: "P2WSH",
  quorum: {
    requiredSigners: 2,
    totalSigners: 3,
  },
  extendedPublicKeys: [
    {
      id: "2919dbb83f73666691ed7ec69a36401f",
      created_at: 1661822899320,
      parentFingerprint: "4F60D1C9",
      network: "mainnet",
      bip32Path: "m/48'/0'/0'/2'",
      xpub: "xpub6F2wuvSo8gSRjE9JsMgSva9cDZGa2Hh9SEJ9yczCLd1q2SRFV6N4vRUKFoecbatfhgZcG5rNwTxygNLoPrKpjRt94czCzQQPnoVY1RauiL6",
      device: {
        type: "coldcard",
        fingerprint: "4F60D1C9",
        model: "unknown",
        owner: {
          name: "Lily Technologies, Inc.",
          email: "help@lily-wallet.com",
        },
      },
    },
  ],
};

const BTCSecurityGuide = () => {
  return (
    <div className="relative pt-6 bg-white">
      <Head>
        <title>Introducing Lily v1.0.9 - Lily Wallet</title>
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
                  Introducing
                </span>
                <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Lily Wallet v1.0.9
                </span>
              </h1>
              <div class="mt-6 prose prose-slate-600 mx-auto">
                <p> Hey everyone,</p>

                <p>
                  I am really excited to finally be releasing the latest version
                  of Lily Wallet.
                </p>

                <p>
                  The first iterations of Lily Wallet focused on providing a
                  pleasent user interface for sending and receiving bitcoin to
                  multisignature vaults.
                </p>

                <p>
                  This newest version focuses on device management, the vault
                  setup flow, and adds a number of features targetting bitcoin
                  power users including Lightning Network account management,
                  retriving data from an Electrum server, and dark mode.
                </p>

                <div className="relative">
                  <img src="/blog/v1.9/v1.9-screenshot.png" layout="fill" />
                </div>

                <hr />

                <h3 className="tracking-tight">Setup vaults via URLs</h3>

                <p>
                  After talking with users, many shared that their biggest
                  frustration with multisignature vaults was a lack of support
                  for extracting their extended public key(s) to share during
                  initial setup.
                </p>

                <p>
                  With current tooling, users have to export files or use the
                  command line to get their xpub from their devices, send them
                  to other vault keyholders, combine them correctly, and then
                  share that data back to properly generate addresses and start
                  securing their bitcoins. It's a process that requires a number
                  of manual steps that are only open to technical users and
                  vulnerable to mistakes.
                </p>

                <p>
                  Lily Wallet solves this by taking advantage of the operating
                  system's deep linking functionality. Now users can request key
                  information from friends by sending them a URL that passes
                  information directly to the Lily Wallet desktop application.
                  No more file extraction, copying and pasting data, and
                  manually configuring forms. Simply send a link to the other
                  parties, have them plug in their devices, and they'll send you
                  a link back with the completed setup.
                </p>

                <p>
                  When creating a new vault, users have the option to "Request
                  via URL". This option prompts them to input their email
                  address and how many devices the other user needs to add. With
                  this information, a magic link is displayed that can be copied
                  and sent to the desired vault participants.
                </p>

                <div className="relative">
                  <img src="/blog/v1.9/request.png" layout="fill" />
                </div>

                <p>
                  When the collaborator opens the link, they are shown the vault
                  information and prompted to add their own hardware device to
                  the vault. This link will automatically open their instance of
                  Lily Wallet and prompt them to add their own keys to the vault
                  setup.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="max-w-7xl  mx-auto border-2 border-dashed rounded-2xl my-16 py-6 px-4 border-slate-400">
                <div className="absolute translate-x-1 -translate-y-14 lg:translate-x-6 bg-white text-slate-700 font-semibold p-4 border border-slate-400 rounded-2xl">
                  <h2>Example setup dialogue</h2>
                  <p className="text-xs text-slate-500">
                    View full page example{" "}
                    <a
                      href=""
                      target="_blank"
                      className="text-green-500 underline"
                    >
                      here
                    </a>
                  </p>
                </div>
                <VaultSetupPrompt
                  config={CONFIG}
                  returnAddress="Lily Technologies, Inc. <help@lily-wallet.com>"
                  className="-translate-y-6"
                />
              </div>
            </div>
            <div class="text-lg max-w-prose mx-auto">
              <div class="mt-6 prose-green prose text-slate-600 mx-auto">
                <p>
                  After they have added their key(s) to the vault, an email is
                  generated with a URL that includes the completed vault
                  configuration. This URL can be shared with other people to let
                  them import the vault into their instance of Lily Wallet on
                  their computer.
                </p>

                <hr />

                <h3 className="tracking-tight">Add device owner information</h3>
                <p>
                  Users can optionally attach device owner names and email
                  addresses to devices included in a vault's setup. This gives
                  more clarity to vault managers and gives a convienient way to
                  message participants.
                </p>

                <p>
                  This feature is especially useful for users managing a number
                  of different vaults with different participants like an Uncle
                  Jim or personal financial advisor managing a large amount of
                  client vaults.
                </p>

                <hr />

                <h3 className="tracking-tight">Unlocking new use cases</h3>

                <p>
                  These features unlock a number of new use cases for
                  individuals and businesses providing security services to
                  clients, friends, and family members.
                </p>

                <div className="my-12">
                  <h4 className="tracking-tight">Financial advisors</h4>
                  <p>
                    Give clients a URL to create 2-of-3 multisignature vaults
                    where you hold one of the keys. Because the client holds two
                    of their keys, they retain unilateral control of their
                    funds.
                  </p>

                  <p>
                    As a participant in the vault, you have access to receive
                    addresses which allows you to deposit bitcoin into their
                    account on their behalf.
                  </p>
                </div>

                <div className="my-12">
                  <h4 className="tracking-tight">Companies holding bitcoin</h4>
                  <p>
                    Companies can hold bitcoin on their balance sheet without
                    giving full control of funds to a single individual.
                    Creating a vault with the CEO, CFO, and other executives
                    allows custody to be shared in a secure fashion.
                  </p>

                  <p>
                    It is also easy to provide read-only access to vaults with
                    other staff who don't hold keys.
                  </p>
                </div>

                <div className="my-12">
                  <h4 className="tracking-tight">Friends and family</h4>
                  <p>
                    In the same way a financial advisor can help secure clients
                    funds, Bitcoin power users can help friends and family
                    secure their bitcoin using multisignature vaults.
                  </p>

                  <p>
                    After orange-pilling people, help them on the next step in
                    their bitcoin journey to self-custodying their coins.
                  </p>
                </div>

                <hr />

                <h2 className="tracking-tight">Other new features</h2>
                <p>
                  There are a number of other features included with this
                  release targetting bitcoin power users:
                </p>
                <h3 className="tracking-tight">Lightning Network accounts</h3>
                <p>
                  This version of Lily Wallet also allows users to manage their
                  Lightning Network nodes from the same interface as their
                  hardware wallets and multisignature vaults.
                </p>

                <p>
                  Simply input your node's LND Connect URI whem prompted and
                  users can send and receive lightning payments from Lily
                  Wallet.
                </p>

                <div className="relative">
                  <img
                    src="/blog/v1.9/lightning-open.png"
                    className="rounded-2xl shadow-lg mx-6"
                    layout="fill"
                  />
                </div>

                <p>
                  Because Lily Wallet manages on-chain accounts alongside
                  lightning wallets, users can also open and close their
                  channels from their hardware wallets or even multisignature
                  vaults!
                </p>

                <hr />

                <h3 className="tracking-tight">Retrieve data from Electrum</h3>
                <p>
                  Another requested feature was to allow wallet users to
                  retrieve transaction data from a specific Electrum server
                  rather than a public API.
                </p>
                <p>
                  This feature ensures that Lily Wallet users will be able to
                  continue to use their software even if Lily Technologies, Inc.
                  stop maintaining the wallet software.
                </p>

                <hr />

                <h3 className="tracking-tight">Dark mode</h3>
                <p>
                  The latest version of Lily Wallet includes a dark mode color
                  scheme. Lily Wallet will automatically detect your system's
                  color preference and apply styling accordingly.
                </p>

                <hr />

                <h2 className="tracking-tight">Conclusion</h2>
                <p>
                  This latest v1.9 release of Lily Wallet makes creating and
                  managing multisignature vaults easier for users who want
                  better security for their bitcoin.
                </p>

                <p>
                  To try it out, head over to the{" "}
                  <Link href="/download">
                    <a className="underline">download page</a>
                  </Link>{" "}
                  on the Lily Wallet website.
                </p>

                <p>
                  As always, the code is open source and can be reviewed in the{" "}
                  <a
                    href="https://github.com/Lily-Technologies/lily-wallet"
                    target="_blank"
                    className="underline"
                  >
                    Github
                  </a>{" "}
                  repository.
                </p>

                <hr />

                <h4 className="tracking-tight">Lily Wallet in Atlanta</h4>
                <p>
                  Lily Wallet will be at the{" "}
                  <a href="" target="_blank">
                    Atlanta Bitcoin Conference{" "}
                  </a>{" "}
                  this year.
                </p>
                <p>
                  If you are business looking to hold bitcoin on your balance
                  sheet, a developer who wants to get involved with a bitcoin
                  project or a user with questions about Lily Wallet, stop by
                  and say hello!
                </p>
              </div>
              <div className="flex align-center justify-center m-6">
                <img className="h-16" src="/logo.svg" />
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
