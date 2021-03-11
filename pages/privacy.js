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

      <div class="relative bg-white w-screen pt-8">
        <div class="lg:absolute lg:inset-0">
          <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              class="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://live.staticflickr.com/65535/50197334191_319fb3751f_h.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div class="lg:col-start-2 lg:pl-8">
            <div class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Privacy Policy
              </h2>
              <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Promise
              </h3>
              <p class="mt-8 text-lg text-gray-500">
                Lily doesn't collect any personal information about you or your
                funds. We believe privacy is a human right and we respect
                individual's desire to transact privately. This is why we
                bitcoin.
              </p>
              <div class="mt-5 prose prose-indigo text-gray-500">
                <h3>Our Policy</h3>
                <p>
                  This Lily Privacy Notice describes the privacy practices that
                  are applicable to your use of the Lily mobile application (the
                  “App”) provided by Lily Technologies (the “Company”).
                </p>
                <p>
                  A. Privacy Practices. The Company intends for users to be able
                  to use the functionality of the App on a decentralized,
                  anonymous basis. The Company therefore does not collect, use,
                  maintain or share any personal information about you when you
                  use the App, and the Company does not use any tracking
                  technology to track your use of the App. The Company also does
                  not allow third parties to collect personal information about
                  you when you use the App, or to use tracking technology to
                  track your use of the App. Any information that you provide to
                  us when you communicate with our customer or technical support
                  departments will only be used for purposes of addressing your
                  specific support request.
                </p>
                <p>
                  B. Third Party App Stores. If you purchase or access the App
                  through a third party app store, such as iTunes or Google Play
                  (an “App Store”), you will have a separate, additional account
                  relationship with that App Store and the information you
                  provide to that App Store will be handled in accordance with
                  the privacy practices of the applicable App Store. App Stores
                  are not partners or representatives of the Company and the
                  Company is not responsible for the acts or omissions of an App
                  Store with regard to the collection, use, maintenance or
                  disclosure of your information. If you want to change your
                  preferences with regard to how an applicable App Store
                  collects or uses your information, you should review the
                  privacy practices of the applicable App Store and adjust your
                  privacy or other settings directly through the applicable App
                  Store. The Company will not receive or have access to any of
                  the information you provide to, or that is collected by, an
                  applicable App Store.
                </p>
                <p>
                  C. No Use by Children. The App is not intended for use by
                  children under the age of thirteen (13). If you are under the
                  age of thirteen (13), please do not use the App.
                </p>
                <p>
                  D. Modifications to this Privacy Notice. We will notify you of
                  material changes to this Privacy Notice, including changes
                  regarding how we collect, use, maintain or share your
                  information, by posting the modified privacy notice on the App
                  at least thirty (30) days before the effective date of the
                  changes. If you do not agree to the changes, you should
                  discontinue your use of the App prior to the time the modified
                  privacy notice takes effect. If you continue using the App
                  after the modified privacy notice takes effect, you will be
                  bound by the modified privacy notice.
                </p>
                <p>
                  E. <span class="font-bold">How to Contact Us</span>. Please
                  also feel free to contact us at kaybesee@gmail.com if you have
                  any questions about this Privacy Notice.
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

export default Privacy;
