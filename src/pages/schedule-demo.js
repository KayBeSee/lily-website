import React from "react";
import Head from "next/head";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";
import DotBackground from "../components/DotBackground";
import CalendlyWidget from "../components/CalendlyWidget";

const CALENDLY_URL = "https://calendly.com/lilywallet/demo";

const RequestDemo = () => {
  return (
    <div className="flex flex-col relative pt-6 bg-gray-50 min-h-screen">
      <Head>
        <title>Schedule a Demo - Lily Wallet</title>
        <HeaderStuff />
      </Head>

      <Navigation />

      <div className="relative flex-grow h-full overflow-hidden">
        <DotBackground />
        <div className="relative mx-auto px-4 my-4 sm:my-0 sm:px-6 lg:px-8 lg:max-w-screen-lg">
          <span className="mt-1 block text-2xl tracking-tight font-extrabold sm:text-3xl xl:text-4xl">
            Schedule a demo
          </span>
          <span className="mt-4 max-w-3xl mx-auto text-center text-lg leading-7 text-green-600">
            and start securing your bitcoin today
          </span>
        </div>
        <div className="z-20 relative pb-10">
          <CalendlyWidget url={CALENDLY_URL} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default RequestDemo;
