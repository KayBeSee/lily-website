import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { Transition } from "@headlessui/react";

import scenicBg from "public/scenic.jpg";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import HeaderStuff from "../../components/HeaderStuff";

import TwitterImage from "@/images/v1.9/header.png";

const downloadLink = {
  Windows:
    "https://github.com/Lily-Technologies/lily-wallet/releases/download/v1.3.0/Lily.Wallet.Setup.1.3.0.exe",
  MacOS:
    "https://github.com/Lily-Technologies/lily-wallet/releases/download/v1.3.0/Lily.Wallet-1.3.0-arm64.dmg",
  UNIX: "https://github.com/Lily-Technologies/lily-wallet/releases/tag/v1.3.0",
  Linux:
    "https://github.com/Lily-Technologies/lily-wallet/releases/download/v1.3.0/Lily.Wallet-1.3.0.AppImage",
};

export const getStaticProps = async () => {
  const { base64, img } = await getPlaiceholder("/logo.svg");

  return {
    props: {
      imageProps: {
        ...img,
        blurDataURL: base64,
      },
    },
  };
};

const Download = ({ imageProps }) => {
  const [operatingSystem, setOperatingSystem] = useState("");

  useEffect(() => {
    if (navigator.appVersion.indexOf("Win") != -1) {
      setOperatingSystem("Windows");
    }
    if (navigator.appVersion.indexOf("Mac") != -1) {
      setOperatingSystem("MacOS");
    }
    if (navigator.appVersion.indexOf("X11") != -1) {
      setOperatingSystem("UNIX");
    }
    if (navigator.appVersion.indexOf("Linux") != -1) {
      setOperatingSystem("Linux");
    }
  }, []);

  return (
    <div className="h-screen relative overflow-hidden overflow-y-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
        <Image
          src={scenicBg}
          layout="fill"
          objectFit="cover"
          priority
          placeholder="blur"
          className="z-[-2] animate-float"
        />
      </div>
      <Head>
        <title>Download - Lily Wallet</title>
        <HeaderStuff />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LilyWallet" />
        <meta name="twitter:title" content="Lily Wallet - Download v1.1" />
        <meta
          name="twitter:description"
          content="Bitcoin wallet designed for everyone on their journey towards financial freedom."
        />
        <meta
          name="twitter:image"
          content={`https://lily-wallet.com${TwitterImage.src}`}
        />
      </Head>
      <div class="relative py-6 z-10 bg-gradient-to-t from-transparent to-slate-900">
        <Navigation darkBg />
      </div>

      <div className="relative text-center bg-cover h-screen flex items-center justify-center z-10">
        <div className="max-w-3xl mx-auto py-12 px-6 w-full">
          <Transition
            appear={true}
            show={true}
            enter="transition-all duration-500"
            enterFrom="opacity-0 blur-xl scale-50"
            enterTo="opacity-100 blur-0 scale-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-black p-6 rounded-2xl max-w-7xl w-fit mx-auto bg-gradient-to-br to-slate-100 from-slate-300 mb-12">
              <div className="w-24 h-24 mx-auto relative">
                <Image {...imageProps} placeholder="blur" />
              </div>
            </div>
          </Transition>
          <Transition
            appear={true}
            show={true}
            enter="transition-all duration-500 delay-200"
            enterFrom="opacity-0 translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <h1 className="text-4xl tracking-tight leading-10 font-semibold font-sans text-white my-4 sm:leading-none md:text-5xl">
              Download Lily Wallet
              <br />
            </h1>
          </Transition>
          <Transition
            appear={true}
            show={true}
            enter="transition-all duration-500 delay-300"
            enterFrom="opacity-0 translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <h2 className="text-md md:text-lg text-slate-100 mb-8">
              Take control of your bitcoin today.
            </h2>
          </Transition>
          <Transition
            appear={true}
            show={true}
            enter="transition-all duration-500 delay-500"
            enterFrom="opacity-0 translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <a
              href={downloadLink[operatingSystem]}
              className="py-4 px-8 bg-emerald-600 rounded-xl text-white font-semibold font-sans hover:bg-emerald-500 transition-all duration-300"
            >
              Download for {operatingSystem}
            </a>
          </Transition>
        </div>
      </div>

      <div className="bg-gray-50 z-10 relative">
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
    </div>
  );
};

export default Download;
