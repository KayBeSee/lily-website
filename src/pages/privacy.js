import React from "react";

import Head from "next/head";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";

const Privacy = () => {
  return (
    <div class="relative pt-6">
      <Head>
        <title>Privacy - Lily Wallet</title>
        <HeaderStuff />
      </Head>
      <Navigation />

      <div class="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div class="max-w-max lg:max-w-7xl mx-auto">
          <div class="relative z-10 mb-8 md:mb-2 md:px-6">
            <div class="text-base max-w-prose lg:max-w-none">
              <h2 class="leading-6 text-green-600 font-semibold tracking-wide uppercase">
                Privacy Policy
              </h2>
              <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Philosophy
              </p>
            </div>
          </div>
          <div class="relative">
            <svg
              class="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              class="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
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
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <div class="relative md:bg-white md:p-6">
              <div class="lg:grid lg:grid-cols-2 lg:gap-6">
                <div class="prose prose-green prose-lg text-gray-500 lg:max-w-none">
                  <p>
                    Lily doesn't collect any personal information about you or
                    your funds. We believe privacy is a human right and we
                    respect individual's preference to transact privately. This
                    is why we bitcoin.
                  </p>

                  <h3>Our Policy</h3>
                  <p>
                    This Lily Privacy Notice describes the privacy practices
                    that are applicable to your use of the Lily mobile
                    application (the “App”) provided by Lily Technologies (the
                    “Company”).
                  </p>
                  <p>
                    A. Privacy Practices. The Company intends for users to be
                    able to use the functionality of the App on a decentralized,
                    anonymous basis. The Company therefore does not collect,
                    use, maintain or share any personal information about you
                    when you use the App, and the Company does not use any
                    tracking technology to track your use of the App. The
                    Company also does not allow third parties to collect
                    personal information about you when you use the App, or to
                    use tracking technology to track your use of the App. Any
                    information that you provide to us when you communicate with
                    our customer or technical support departments will only be
                    used for purposes of addressing your specific support
                    request.
                  </p>
                  <p>
                    B. Third Party App Stores. If you purchase or access the App
                    through a third party app store, such as iTunes or Google
                    Play (an “App Store”), you will have a separate, additional
                    account relationship with that App Store and the information
                    you provide to that App Store will be handled in accordance
                    with the privacy practices of the applicable App Store.
                  </p>
                </div>
                <div class="mt-6 prose prose-green prose-lg text-gray-500 lg:mt-0">
                  <p>
                    App Stores are not partners or representatives of the
                    Company and the Company is not responsible for the acts or
                    omissions of an App Store with regard to the collection,
                    use, maintenance or disclosure of your information. If you
                    want to change your preferences with regard to how an
                    applicable App Store collects or uses your information, you
                    should review the privacy practices of the applicable App
                    Store and adjust your privacy or other settings directly
                    through the applicable App Store. The Company will not
                    receive or have access to any of the information you provide
                    to, or that is collected by, an applicable App Store.
                  </p>
                  <p>
                    C. No Use by Children. The App is not intended for use by
                    children under the age of thirteen (13). If you are under
                    the age of thirteen (13), please do not use the App.
                  </p>

                  <p>
                    D. Modifications to this Privacy Notice. We will notify you
                    of material changes to this Privacy Notice, including
                    changes regarding how we collect, use, maintain or share
                    your information, by posting the modified privacy notice on
                    the App at least thirty (30) days before the effective date
                    of the changes. If you do not agree to the changes, you
                    should discontinue your use of the App prior to the time the
                    modified privacy notice takes effect. If you continue using
                    the App after the modified privacy notice takes effect, you
                    will be bound by the modified privacy notice.
                  </p>

                  <p>
                    E. How to Contact Us. Please also feel free to contact us at
                    kaybesee@gmail.com if you have any questions about this
                    Privacy Notice.
                  </p>
                </div>
              </div>
              <div class="mt-8 inline-flex rounded-md shadow">
                <a
                  href="/download"
                  class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  Download Lily Wallet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
