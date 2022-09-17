import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";

import VaultSetupPrompt from "../components/VaultSetupPrompt";

import image1dark from "@/images/v1.9/opening/lightning-overview-dark.png";
import image2dark from "@/images/v1.9/opening/receive-dark.png";
import image3dark from "@/images/v1.9/opening/send-dark.png";
import image4dark from "@/images/v1.9/opening/unlock-dark.png";
import requestDark from "@/images/v1.9/request-dark.png";
import lightningOpenDark from "@/images/v1.9/lightning-open-dark.png";
import headerDark from "@/images/v1.9/header.png";

import image1light from "@/images/v1.9/opening/lightning-overview-light.png";
import image2light from "@/images/v1.9/opening/receive-light.png";
import image3light from "@/images/v1.9/opening/send-light.png";
import image4light from "@/images/v1.9/opening/unlock-light.png";
import requestLight from "@/images/v1.9/request-light.png";
import headerLight from "@/images/v1.9/header.png";
import lightningOpenLight from "@/images/v1.9/lightning-open-light.png";

const RETURN_ADDRESS = "Lily Technologies, Inc. <help@lily-wallet.com>";
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

const Photos = ({ darkMode }) => {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  const image1 = darkMode ? image1dark : image1light;
  const image2 = darkMode ? image2dark : image2light;
  const image3 = darkMode ? image3dark : image3light;
  const image4 = darkMode ? image4dark : image4light;

  return (
    <div className="mt-16 sm:mt-16">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-video w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-lg",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const LilyVOneNine = () => {
  // manually tracking dark mode for now since nav / site isn't optimized for it yet
  const [darkMode, setDarkMode] = useState(false);

  const headerImage = darkMode ? headerDark : headerLight;
  const requestImage = darkMode ? requestDark : requestLight;
  const lightningOpenImage = darkMode ? lightningOpenDark : lightningOpenLight;

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        // const colorScheme = event.matches ? "dark" : "light";
        setDarkMode(event.matches);
      });
  }, []);

  return (
    <div className="relative pt-6 bg-gray-50 dark:bg-slate-900">
      <Head>
        <title>Introducing Lily v1.1 - Lily Wallet</title>
        <HeaderStuff />
      </Head>

      <Navigation darkBg={darkMode} />
      {/* <div class="max-w-8xl mx-auto">
        <div class="flex px-4 pt-8 lg:px-8">
          <a
            class="group flex font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            href="/blog"
          >
            <svg
              viewBox="0 -9 3 24"
              class="overflow-visible mr-3 text-slate-400 w-auto h-6 group-hover:text-slate-600 dark:group-hover:text-slate-300"
            >
              <path
                d="M3 0L0 3L3 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Go back
          </a>
        </div>
      </div> */}
      <div>
        <div class="relative pt-10 pb-16 mb-16 overflow-hidden mt-10">
          <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full pb-10">
            <div
              class="relative h-full text-lg max-w-prose mx-auto bg-white shadow-lg dark:bg-slate-800 sm:rounded-2xl ring-1 ring-slate-100 dark:ring-slate-700 my-1"
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
                      class="text-gray-200 dark:text-slate-800"
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
                      class="text-gray-200 dark:text-slate-800"
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
                      class="text-gray-200 dark:text-slate-800"
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
          <article className="relative">
            <div class="relative max-w-prose mx-auto pt-6 px-4 sm:px-6 lg:px-8">
              <div class="text-lg mx-auto">
                <div className="relative pt-6 text-slate-600 dark:text-slate-400 mx-auto">
                  <h1>
                    <span class="mt-2 block text-2xl font-extrabold tracking-tight text-slate-900 dark:!text-slate-200">
                      New Lily Wallet v1.1 includes better UX for creating
                      vaults, Lightning Network accounts, and more
                    </span>
                  </h1>

                  <div class="text-sm leading-6">
                    <dl>
                      <dt class="sr-only">Date</dt>
                      <dd class="absolute top-0 inset-x-0 text-slate-400 dark:text-slate-400">
                        <time datetime="2022-09-09T16:24:00.000Z">
                          Friday, September 9, 2022
                        </time>
                      </dd>
                    </dl>
                  </div>

                  <div className="flex text-sm leading-1 items-center mt-6">
                    <div className="mr-3">
                      <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                          class="object-cover shadow-lg rounded-lg w-9 h-9"
                          src="./screenshots/kevin-small.jpeg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-md font-extrabold text-slate-900 dark:text-slate-200">
                        Kevin Mulcrone
                      </span>
                      <a
                        href="https://twitter.com/KayBeSee"
                        target="_blank"
                        className="text-green-500 hover:text-green-600 dark:hover:text-green-400 flex"
                      >
                        @KayBeSee
                      </a>
                    </div>
                  </div>
                </div>
                <div class="mt-10 prose text-slate-600 dark:text-slate-400 mx-auto">
                  <p>
                    After spending this past year talking with users and adding
                    features to Lily but kept putting off an official release
                    (admitidly, something I need to be better about). So I am
                    really excited to finally be releasing the latest version of
                    Lily Wallet today.
                  </p>

                  <p>
                    The first few versions of Lily Wallet were focused on
                    providing unified version of a person's bitcoin wallets
                    through a pleasent user interface while allowing for sending
                    and receiving bitcoin.
                  </p>

                  <p>
                    This newest version focuses on the initial vault setup flow,
                    device management, and adds a number of features targetting
                    bitcoin power users including Lightning Network account
                    management, retriving data from an Electrum server, and dark
                    mode.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative max-w-prose w-full mx-auto my-12">
              <Image
                src={headerImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div class="relative px-4 sm:px-6 lg:px-8">
              <div class="text-lg max-w-prose mx-auto">
                <div class="mt-6 prose text-slate-600 dark:text-slate-400 mx-auto">
                  <hr className="dark:!border-slate-200 dark:!border-opacity-5" />

                  <h3 className="tracking-tight text-slate-900 dark:!text-slate-200">
                    Setup vaults via URLs
                  </h3>

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
                    share that data back to properly generate addresses and
                    start securing their bitcoins. It's a process that requires
                    a number of manual steps that are only open to technical
                    users and vulnerable to mistakes.
                  </p>

                  <p>
                    Lily Wallet solves this by taking advantage of the operating
                    system's deep linking functionality. Now users can request
                    key information from friends by sending them a URL that
                    passes information directly to the Lily Wallet desktop
                    application. No more file extraction, copying and pasting
                    data, and manually configuring forms. Simply send a link to
                    the other parties, have them plug in their devices, and
                    they'll send you a link back with the completed setup.
                  </p>

                  <p>
                    When creating a new vault, users have the option to "Request
                    via URL". This option prompts them to input their email
                    address and how many devices the other user needs to add.
                    With this information, a magic link is displayed that can be
                    copied and sent to the desired vault participants.
                  </p>

                  <div className="relative">
                    <Image
                      src={requestImage}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  <p>
                    When the collaborator opens the link, they are shown the
                    vault information and prompted to add their own hardware
                    device to the vault. This link will automatically open their
                    instance of Lily Wallet and prompt them to add their own
                    keys to the vault setup.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="max-w-7xl  mx-auto border-2 border-dashed rounded-2xl my-16 py-6 px-4 border-slate-300 bg-white dark:bg-slate-900">
                  <div className="absolute translate-x-1 -translate-y-14 lg:translate-x-6 bg-white dark:bg-slate-900 text-slate-700 font-semibold p-4 border-2 border-dashed border-slate-300 rounded-2xl">
                    <h2 className="text-slate-900 dark:!text-slate-200">
                      Example setup dialogue
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      View full page example{" "}
                      <Link
                        href={`/to/setup?config=${JSON.stringify(
                          CONFIG
                        )}&returnTo=${RETURN_ADDRESS}`}
                      >
                        <a
                          target="_blank"
                          className="text-green-500 hover:text-green-600 dark:hover:text-green-400 underline"
                        >
                          here
                        </a>
                      </Link>
                    </p>
                  </div>
                  <VaultSetupPrompt
                    config={CONFIG}
                    returnAddress="Lily Technologies, Inc. <help@lily-wallet.com>"
                    className="-translate-y-6 rounded-2xl"
                  />
                </div>
              </div>
              <div class="text-lg max-w-prose mx-auto">
                <div class="mt-6 prose text-slate-600 dark:text-slate-400 mx-auto">
                  <p>
                    After they have added their key(s) to the vault, an email is
                    generated with a URL that includes the completed vault
                    configuration. This URL can be shared with other people to
                    let them import the vault into their instance of Lily Wallet
                    on their computer.
                  </p>

                  <hr className="dark:!border-slate-200 dark:!border-opacity-5" />

                  <h3 className="tracking-tight text-slate-900 dark:!text-slate-200">
                    Add device owner information
                  </h3>
                  <p>
                    Users can optionally attach device owner names and email
                    addresses to devices included in a vault's setup. This gives
                    more clarity to vault managers and gives a convienient way
                    to message participants.
                  </p>

                  <p>
                    This feature is especially useful for users managing a
                    number of different vaults with different participants like
                    an Uncle Jim or personal financial advisor managing a large
                    amount of client vaults.
                  </p>

                  <hr className="dark:!border-slate-200 dark:!border-opacity-5" />

                  <h3 className="tracking-tight text-slate-900 dark:!text-slate-200">
                    Unlocking new use cases
                  </h3>

                  <p>
                    These features unlock a number of new use cases for
                    individuals and businesses providing security services to
                    clients, friends, and family members.
                  </p>

                  <div className="my-12">
                    <h4 className="tracking-tight text-slate-800 dark:!text-slate-300">
                      Financial advisors
                    </h4>
                    <p>
                      Give clients a URL to create 2-of-3 multisignature vaults
                      where you hold one of the keys. Because the client holds
                      two of their keys, they retain unilateral control of their
                      funds.
                    </p>

                    <p>
                      As a participant in the vault, you have access to receive
                      addresses which allows you to deposit bitcoin into their
                      account on their behalf.
                    </p>
                  </div>

                  <div className="my-12">
                    <h4 className="tracking-tight text-slate-800 dark:!text-slate-300">
                      Companies holding bitcoin
                    </h4>
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
                    <h4 className="tracking-tight text-slate-800 dark:!text-slate-300">
                      Friends and family
                    </h4>
                    <p>
                      In the same way a financial advisor can help secure
                      clients funds, Bitcoin power users can help friends and
                      family secure their bitcoin using multisignature vaults.
                    </p>

                    <p>
                      After orange-pilling people, help them on the next step in
                      their bitcoin journey to self-custodying their coins.
                    </p>
                  </div>

                  <hr className="dark:!border-slate-200 dark:!border-opacity-5" />

                  <h2 className="tracking-tight text-slate-900 dark:!text-slate-200">
                    Other new features
                  </h2>
                  <p>
                    There are a number of other features included with this
                    release targetting bitcoin power users:
                  </p>
                  <h3 className="tracking-tight text-slate-900 dark:!text-slate-200">
                    Lightning Network accounts
                  </h3>
                  <p>
                    This version of Lily Wallet also allows users to manage
                    their Lightning Network nodes from the same interface as
                    their hardware wallets and multisignature vaults.
                  </p>

                  <p>
                    Simply input your node's LND Connect URI whem prompted and
                    users can send and receive lightning payments from Lily
                    Wallet.
                  </p>

                  <div className="relative">
                    <Image
                      src={lightningOpenImage}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover rounded-lg shadow-lg mx-6"
                    />
                  </div>

                  <p>
                    Because Lily Wallet manages on-chain accounts alongside
                    lightning wallets, users can also open and close their
                    channels from their hardware wallets or even multisignature
                    vaults!
                  </p>

                  <hr className="dark:!border-slate-200 dark:!border-opacity-5" />

                  <h3 className="tracking-tight text-slate-900 dark:!text-slate-200">
                    Retrieve data from Electrum
                  </h3>
                  <p>
                    Another requested feature was to allow wallet users to
                    retrieve transaction data from a specific Electrum server
                    rather than a public API.
                  </p>
                  <p>
                    This feature ensures that Lily Wallet users will be able to
                    continue to use their software even if Lily Technologies,
                    Inc. stop maintaining the wallet software.
                  </p>

                  <hr className="dark:!border-slate-200 dark:!border-opacity-5" />

                  <h3 className="tracking-tight text-slate-900 dark:!text-slate-200">
                    Dark mode
                  </h3>
                  <p>
                    The latest version of Lily Wallet includes a dark mode color
                    scheme. Lily Wallet will automatically detect your system's
                    color preference and apply styling accordingly.
                  </p>

                  <hr className="dark:!border-slate-200 dark:!border-opacity-5" />

                  <p>
                    As you can see, this latest release of Lily Wallet contains
                    a ton of new features that furthers the mission to make
                    using bitcoin safe and easy.
                  </p>

                  <p>
                    With new features for simplifying multisignature vaults,
                    using the lightning network, and designing one simple,
                    unified view of users' different wallets, this brings us
                    even closer to that goal.
                  </p>

                  <p>
                    To try it out, head over to the{" "}
                    <Link href="/download">
                      <a className="underline !text-green-500 hover:!text-green-600 dark:hover:!text-green-400">
                        download page
                      </a>
                    </Link>{" "}
                    on the Lily Wallet website.
                  </p>

                  <p>
                    As always, the code is open source and can be reviewed in
                    the{" "}
                    <a
                      href="https://github.com/Lily-Technologies/lily-wallet"
                      target="_blank"
                      className="underline !text-green-500 hover:!text-green-600 dark:hover:!text-green-400"
                    >
                      Github
                    </a>{" "}
                    repository.
                  </p>
                  <div className="flex align-center justify-center m-6">
                    <img className="h-16" src="/logo.svg" />
                  </div>

                  <hr className="dark:!border-slate-200 dark:!border-opacity-5" />

                  <h4 className="tracking-tight text-slate-800 dark:!text-slate-300">
                    Lily Wallet at TABConf
                  </h4>
                  <p>
                    Lily Wallet will be at the{" "}
                    <a
                      href="https://2022.tabconf.com/"
                      target="_blank"
                      className="underline !text-green-500 hover:!text-green-600 dark:hover:!text-green-400"
                    >
                      Atlanta Bitcoin Conference
                    </a>{" "}
                    this year.
                  </p>
                  <p>
                    If you are business holding bitcoin on your balance sheet, a
                    developer who wants to contribute, or a bitcoiner with
                    questions about Lily Wallet please stop by and say hello at
                    the conference.
                  </p>

                  <h4 className="tracking-tight text-slate-800 dark:!text-slate-300">
                    For developers
                  </h4>
                  <p>
                    In addition to new features, this release also modularizes
                    the Lily Wallet codebase into a more maintainable project
                    for developers.
                  </p>
                  <p>
                    The frontend, electron application, and express server for
                    running the application in the browser are all contained in
                    a single monorepo that also includes shared bitcoin logic
                    and Typescript definitions used throughout all of the
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LilyVOneNine;
