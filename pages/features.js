import Head from "next/head";
import Link from "next/link";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";
import Features from "../components/Features";

const FeaturesPage = () => {
  return (
    <div className="relative pt-6 bg-white">
      <Head>
        <title>Features - Lily Wallet</title>
        <HeaderStuff />
      </Head>

      <Navigation />
      <Features />
      <div class="bg-gray-50">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Ready to dive in?</span>
            <span class="block text-green-600">
              Start your free trial today.
            </span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <Link href="/download">
                <a class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  Download Lily
                </a>
              </Link>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <a
                href="/schedule-demo"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
              >
                Talk to an expert
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
