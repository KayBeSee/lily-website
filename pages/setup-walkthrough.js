import React, { useEffect } from "react";
import Head from "next/head";

import { InlineWidget } from "react-calendly";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";
import DotBackground from "../components/DotBackground";

const SetupWalkthrough = () => {
  return (
    <div className="flex flex-col relative pt-6 bg-gray-50 min-h-screen">
      <Head>
        <title>Setup Walkthrough - Lily Wallet</title>
        <HeaderStuff />
      </Head>

      <Navigation />

      <div className="relative flex-grow h-full h-24 overflow-hidden">
        <DotBackground />
        <div className="relative lg:max-w-xl mx-auto px-4 my-4 sm:my-0 sm:px-6 lg:px-8 lg:max-w-screen-lg">
          <span className="mt-1 block text-2xl tracking-tight font-extrabold sm:text-3xl xl:text-4xl">
            Setup Walkthrough
          </span>
          <span className="mt-4 max-w-3xl mx-auto text-center text-lg leading-7 text-green-600">
            Get guided support setting up Lily Wallet
          </span>
        </div>
        <div className="z-20 relative pb-10">
          <InlineWidget
            url="https://calendly.com/lilywallet/setup-walkthrough"
            styles={{
              height: "655px",
              margin: 0,
            }}
            pageSettings={{
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              primaryColor: "059669",
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SetupWalkthrough;
