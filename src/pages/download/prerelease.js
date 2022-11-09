import React from "react";

import Head from "next/head";
import Link from "next/link";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import HeaderStuff from "../../components/HeaderStuff";
import DownloadButtonsPrerelease from "../../components/DownloadButtonsPrerelease";

const RELEASE_TAG = "v1.1.0-alpha.1";

const Download = () => {
  return (
    <>
      <div class="relative pt-6 ">
        <Head>
          <title>Download Pre-release {RELEASE_TAG} - Lily Wallet</title>
          <HeaderStuff />
        </Head>
        <Navigation />
      </div>

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
          <h4 className="text-xl text-gray-500">Pre-release {RELEASE_TAG}</h4>
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 mb-8 sm:text-5xl sm:leading-none md:text-6xl">
            Download Lily
            <br />
            <span class="text-green-600">
              and start testing the software today
            </span>
          </h2>
          <DownloadButtonsPrerelease />
        </div>
      </div>

      <div className="bg-gray-50">
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
    </>
  );
};

export default Download;
