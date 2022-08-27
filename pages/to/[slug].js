import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import {
  ArrowLongRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

import Navigation from "../../components/Navigation";
import HeaderStuff from "../../components/HeaderStuff";
import LoadingSpinner from "../../components/LoadingSpinner";
import DeviceImage from "../../components/DeviceImage";
import Footer from "../../components/Footer";

const QUERY = `?config={"name":"My Sweet Vault","type":"onchain","created_at":1661139721833,"network":"mainnet","addressType":"P2WSH","quorum":{"requiredSigners":1,"totalSigners":0},"extendedPublicKeys":[]}&status=incomplete&returnTo=Kevin%20Mulcrone%20%3CKayBeSee%40gmail.com%3E`;

const to = "to/";
const removeTo = (path) => path.substring(path.indexOf(to) + to.length);

const ListItem = ({ text }) => (
  <li className="flex items-center">
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="h-8 w-8 flex-none text-green-500 fill-current"
    >
      <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
    </svg>
    <span className="ml-4 text-sm">{text}</span>
  </li>
);

const listItems = [
  "Eliminate single points of failure",
  "Retain full control of your bitcoin",
  "Preserve privacy and autonomy",
  "Pleasant user experience",
  "Easy to setup",
];

const WelcomePanel = ({ returnAddress, style, setPosition, className }) => {
  console.log("style: ", style);
  return (
    <div
      className={clsx(
        "w-full justify-center text-gray-900 dark:text-gray-200 px-4 pb-2",
        className
      )}
    >
      <div className="flex flex-col mb-6" style={{ width: "47.75rem" }}>
        <h3 className="text-gray-600 dark:text-gray-400 text-lg">New vault</h3>
        <h1 className="text-gray-900 dark:text-gray-200 font-medium text-3xl">
          You have been invited!
        </h1>
        <div className="max-w-xl">
          <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-50 text-opacity-80">
            {returnAddress} has invited you to collaborate on a multisignature
            bitcoin vault.
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-50 text-opacity-80">
            Using Lily Wallet to manage a collaborative vault makes your bitcoin
            more resilient.
          </p>
          <ul role="list" className="mt-4 space-y-1">
            {listItems.map((item) => (
              <ListItem text={item} />
            ))}
          </ul>

          <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-50 text-opacity-80">
            In order to participate, you will need to add one or more of your
            bitcoin hardware wallet(s) or key(s) using Lily Wallet.
          </p>

          <div className="mt-5 group">
            <span>
              <a
                href=""
                target="_blank"
                className="w-max text-sm text-yellow-600 group-hover:text-yellow-700 dark:text-yellow-500 dark:group-hover:text-yellow-400 flex items-center rounded-md focus:ring-1 focus:ring-yellow-600 dark:focus:ring-yellow-500 outline-none"
              >
                Learn more about multisignature vaults
                <ArrowLongRightIcon className="h-5 w-5 fill-current ml-6" />
              </a>
            </span>
          </div>
          <div className="mt-8 flex gap-4">
            <button
              className="inline-flex justify-center rounded-lg text-sm font-medium py-3 px-4 bg-green-500 border border-green-600 text-slate-50 hover:bg-green-600 focus:ring-1 focus:ring-green-800 dark:focus:ring-green-600 outline-none"
              onClick={() => setPosition(1)}
            >
              Get started
            </button>
            <a
              className="inline-flex justify-center rounded-lg text-sm font-medium py-3 px-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-slate-100/20  outline-none"
              href="/"
            >
              Download Lily Wallet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Welcome = () => {
  const router = useRouter();
  const [position, setPosition] = useState(0);
  const [deepLink, setDeepLink] = useState("");

  const slug = router.query.slug;
  const stripped = removeTo(router.asPath);

  useEffect(() => {
    // setTimeout(() => router.push("/download"), 1000);
    if (slug) {
      const parsed = `lily://${stripped}`;
      setDeepLink(parsed);
    }
  }, [slug]);

  const openDeepLink = () => {
    window.location = deepLink;
  };

  if (router.query.config) {
    const config = JSON.parse(router.query.config);
    const status = router.query.status;
    const returnAddress = router.query.returnTo;

    return (
      <div className="relative pt-6 bg-white dark:bg-slate-900 min-h-screen">
        <Head>
          <title>Welcome - Lily Wallet</title>
          <HeaderStuff />
        </Head>

        <Navigation darkBg={true} />
        <div className="w-full max-w-7xl mx-auto bg-slate-50 dark:bg-slate-800 mt-20 mb-24 rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 dark:highlight-white/10">
          <div className="block">
            <div className="relative mt-20 overflow-hidden px-7 py-8 xl:px-12">
              <div className="-mx-5 flex">
                <WelcomePanel
                  returnAddress={returnAddress}
                  className={clsx(position === 1 ? "invisible" : "")}
                  style={{ transform: `translateX(-${position * 100}%)` }}
                  setPosition={setPosition}
                />
                <div
                  className="transition duration-500 ease-in-out"
                  style={{ transform: `translateX(-${position * 66}%)` }}
                >
                  <h3
                    className={clsx(
                      "text-gray-600 dark:text-gray-400 text-lg",
                      position === 0 ? "invisible" : ""
                    )}
                  >
                    New vault
                  </h3>
                  <h1
                    className={clsx(
                      "text-gray-900 dark:text-gray-200 font-medium text-3xl",
                      position === 0 ? "invisible" : ""
                    )}
                  >
                    Review vault details
                  </h1>
                  {/* <h3 className="text-gray-600 dark:text-gray-400 text-xl">
                    New vault
                  </h3>
                  <h1 className="text-gray-900 dark:text-gray-200 font-medium text-3xl">
                    You have been invited!
                  </h1> */}
                  <div className="bg-white dark:bg-slate-700 border-t-8 border-green-600 shadow-sm rounded-2xl w-ful mt-6">
                    <div
                      className="flex items-center p-4 border-b border-gray-200 dark:border-gray-600 sm:py-4 sm:px-6 sm:grid sm:grid-cols-4 sm:gap-x-6"
                      style={{ width: "72.75rem" }}
                    >
                      <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-2 sm:grid-cols-2 lg:col-span-2">
                        <div>
                          <dt className="font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                            Name
                          </dt>
                          <dd className="mt-1 text-gray-500 dark:text-gray-300">
                            {config.name}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-gray-900  dark:text-gray-100 whitespace-nowrap">
                            Required signers
                          </dt>
                          <dd className="mt-1 text-gray-500  dark:text-gray-300">
                            {config.quorum.requiredSigners} of{" "}
                            {config.quorum.totalSigners}
                          </dd>
                        </div>
                      </dl>

                      <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4"></div>
                    </div>

                    <div className="py-4 px-4">
                      <div className="bg-gray-50 dark:bg-slate-800 py-4 rounded-lg shadow-inner">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                          <ul
                            role="list"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-3 px-2"
                          >
                            {config.extendedPublicKeys.map((item) => (
                              <li
                                key={item.device.fingerprint}
                                className="col-span-1 flex flex-col flex-none text-center bg-white dark:bg-slate-600  rounded-lg shadow divide-y divide-gray-200 dark:divide-slate-500 border border-gray-200 dark:border-slate-700"
                              >
                                <div className="flex-1 flex flex-col py-2 px-4">
                                  <DeviceImage
                                    className="w-20 h-32 shrink-0 mx-auto object-contain"
                                    device={item.device}
                                  />
                                  <h3 className="mt-4 text-gray-900 dark:text-white text-sm font-medium capitalize">
                                    {item.device.type}
                                  </h3>
                                  <dl className="mt-0 flex-grow flex flex-col justify-between">
                                    <dt className="sr-only">Type</dt>
                                    <dd className="text-gray-500 dark:text-gray-300 text-xxs uppercase">
                                      {item.device.fingerprint}
                                    </dd>
                                    <dt className="sr-only">Fingerprint</dt>
                                  </dl>
                                </div>
                                <div className="px-4 py-3">
                                  <p className="flex items-center text-xs text-gray-700 dark:text-gray-200 truncate">
                                    <UserIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                    {item.device.owner?.name || "Not set"}
                                  </p>
                                  <p className="mt-2 flex items-center text-xs text-gray-700 dark:text-gray-200 truncate">
                                    <EnvelopeIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                    {item.device.owner?.email || "Not set"}
                                  </p>
                                </div>
                                <div className="-mt-px flex divide-x divide-gray-200">
                                  <div className="w-0 flex-1 flex">
                                    <button
                                      className="relative w-0 flex-1 inline-flex items-center justify-center py-2 text-xs text-gray-700 dark:text-gray-200 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500"
                                      onClick={() =>
                                        openInModal(
                                          <DeviceDetails
                                            extendedPublicKey={item}
                                            closeModal={() => closeModal()}
                                            hideActionButtons={true}
                                            onSave={onSave}
                                          />
                                        )
                                      }
                                    >
                                      <span>View details</span>
                                    </button>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-end pt-6">
                        <button
                          className="animate-bounce flex text-md font-medium items-center justify-center bg-green-600 py-2 px-3 rounded-2xl shadow-sm text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50"
                          onClick={() => openDeepLink()}
                        >
                          Complete setup in Lily Wallet
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Head>
        <title>Welcome - Lily Wallet</title>
        <HeaderStuff />
      </Head>
      <LoadingSpinner />
    </div>
  );
};

export default Welcome;
