import React from "react";
import Head from "next/head";
import Link from "next/link";

import { getAllPostPreviews } from "@/utils/getAllPosts";

import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

let posts = getAllPostPreviews();

export default function Home() {
  return (
    <div className="relative bg-gray-50">
      <Head>
        <title>Lily Wallet - Multisig Bitcoin Wallet</title>
        <HeaderStuff />
      </Head>

      {/* <Navigation /> */}
      <Hero mostRecentPost={posts[0]} />
      <div>
        <div className="bank-note-background">
          <div className="max-w-screen-xl mx-auto pt-16 pb-16 px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-gray-100 text-sm font-semibold uppercase tracking-wide">
              Compatible with the most popular Bitcoin hardware devices
            </h3>
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center items-center md:col-span-1 lg:col-span-1 mb-2">
                <img
                  className="h-12"
                  src="./vendor-logos/cobo.png"
                  alt="Cobo Vault"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1 mt-1">
                <img
                  className="h-12"
                  src="./vendor-logos/coldcard.png"
                  alt="Coldcard"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                <img
                  className="h-12"
                  src="./vendor-logos/trezor.svg"
                  alt="Trezor"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1 mt-1">
                <img
                  className="h-12"
                  src="./vendor-logos/ledger.svg"
                  alt="Ledger"
                />
              </div>
              <div className="col-span-1 flex justify-center text-white items-center md:col-span-1 lg:col-span-1">
                <img
                  className="h-12"
                  src="./vendor-logos/bitbox.svg"
                  alt="BitBox"
                />
                <span className="text-white text-3xl">
                  <span className="font-black">BitBox</span>02
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Features />

      <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            role="img"
            aria-labelledby="svg-workcation"
          >
            <title id="svg-workcation">Workcation</title>
            <defs>
              <pattern
                id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
            />
          </svg>

          <div className="relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <div className="text-2xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
              Self-custody made easy
            </div>
            <blockquote className="mt-10">
              <div className="max-w-3xl mx-auto text-center text-xl md:text-2xl leading-9 font-medium text-gray-900">
                <p>
                  &ldquo;We've written{" "}
                  <Link href="./btc-security-guide">
                    <a
                      class="text-light-blue-600 font-semibold"
                      style={{
                        boxShadow:
                          "inset 0 -0.1666666667em 0 0 #fff, inset 0 -0.3333333333em 0 0 #6ee7b7",
                      }}
                    >
                      an entire guide
                    </a>
                  </Link>{" "}
                  about how normal bitcoiners can easily keep their coins safe
                  with enterprise level security thanks to hardware wallets and
                  multisignature vaults. There are no excuses for{" "}
                  <span className="italic">not</span> controlling your own keys
                  today.&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="./screenshots/kevin-small.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">
                      Kevin Mulcrone
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base font-medium text-gray-500">
                      CEO, Lily Technologies
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="relative mt-20">
        <Testimonials />
      </section>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to secure your Bitcoin?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-green-200">
                  Download Lily, connect your devices, and start securing your
                  bitcoin in under 10 minutes
                </p>
                <Link href="/download">
                  <a className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-green-600 hover:bg-indigo-50">
                    Download Lily
                  </a>
                </Link>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="./screenshots/send.png"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
