import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  EnvelopeIcon,
  UserIcon,
  InformationCircleIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Navigation from "../../components/Navigation";
import HeaderStuff from "../../components/HeaderStuff";
import DeviceImage from "../../components/DeviceImage";

const QUERY = `?config={"name":"My Sweet Vault","type":"onchain","created_at":1661139721833,"network":"mainnet","addressType":"P2WSH","quorum":{"requiredSigners":1,"totalSigners":0},"extendedPublicKeys":[]}&status=incomplete&returnTo=Kevin%20Mulcrone%20%3CKayBeSee%40gmail.com%3E`;

const to = "to/";
const removeTo = (path) => path.substring(path.indexOf(to) + to.length);

const deepLinkRedirect = () => {
  const router = useRouter();
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

    const infoText =
      status === "incomplete"
        ? `${returnAddress} has invited you to add 2 devices to this
    vault`
        : "This vault's setup is complete";

    return (
      <div className="relative pt-6 bg-white dark:bg-slate-900 min-h-screen">
        <Head>
          <title>{config.name} - Lily Wallet</title>
          <HeaderStuff />
        </Head>

        <Navigation />
        <div className="w-full max-w-7xl flex items-center justify-center mx-auto py-10 px-2 sm:px-8 bg-gray-100 dark:bg-slate-800 mt-20 mb-48 rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 dark:highlight-white/10">
          <div className="w-full justify-center text-gray-900 dark:text-gray-200 overflow-x-hidden px-2 pb-2">
            <div className="flex flex-col mb-6">
              <h3 className="text-gray-600 dark:text-gray-400 text-xl">
                New vault
              </h3>
              <h1 className="text-gray-900 dark:text-gray-200 font-medium text-3xl">
                {status === "complete"
                  ? "Add to your Lily Wallet"
                  : "Add your key(s)"}
              </h1>
              <div className="rounded-md bg-blue-50 p-4 mt-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <InformationCircleIcon
                      className="h-5 w-5 text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-blue-700">{infoText}</p>
                    <p className="mt-3 text-sm md:mt-0 md:ml-6">
                      <a
                        href="#"
                        className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                      >
                        What is this? <span aria-hidden="true">&rarr;</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-700 border-t-8 border-green-600 shadow-sm rounded-t-lg">
              <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-600 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
                <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-2 sm:grid-cols-2 lg:col-span-2">
                  <div>
                    <dt className="font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                      Name
                    </dt>
                    <dd className="mt-1 text-gray-500 dark:text-gray-300">
                      {config.name}
                    </dd>
                  </div>
                  {/* <div className='hidden sm:block'>
                <dt className='font-medium text-gray-900 whitespace-nowrap'>Type</dt>
                <dd className='mt-1 text-gray-500'>Vault</dd>
              </div> */}
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

              <div className="py-6 px-4">
                <div className="bg-gray-50 dark:bg-slate-700 py-8 rounded-lg shadow-inner">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ul
                      role="list"
                      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-3 px-2"
                    >
                      {config.extendedPublicKeys.map((item) => (
                        <li
                          key={item.device.fingerprint}
                          className="col-span-1 flex flex-col flex-none text-center bg-white dark:bg-slate-600  rounded-lg shadow divide-y divide-gray-200 dark:divide-slate-500 border border-gray-200 dark:border-slate-700"
                        >
                          <div className="flex-1 flex flex-col py-6 px-4">
                            <DeviceImage
                              className="w-28 h-48 shrink-0 mx-auto object-contain"
                              device={item.device}
                            />
                            <h3 className="mt-4 text-gray-900 dark:text-white text-md font-medium capitalize">
                              {item.device.type}
                            </h3>
                            <dl className="mt-0 flex-grow flex flex-col justify-between">
                              <dt className="sr-only">Type</dt>
                              <dd className="text-gray-500 dark:text-gray-300 text-xs uppercase">
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
                                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 dark:text-gray-200 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500"
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
              </div>
            </div>
            <button
              className="w-full flex text-lg font-medium items-center justify-center bg-green-600 py-4 px-6 rounded-b-lg shadow-sm text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50"
              onClick={() => openDeepLink()}
            >
              {status === "complete" ? "Add to Lily Wallet" : "Join this vault"}
              <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 mb-1" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default deepLinkRedirect;
