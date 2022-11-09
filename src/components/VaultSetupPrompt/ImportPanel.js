import Link from "next/link";
import clsx from "clsx";

import {
  EnvelopeIcon,
  UserIcon,
  ArrowLongRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

import DeviceImage from "../DeviceImage";

const ImportPanel = ({ position, returnAddress, config, openDeepLink }) => {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:w-auto">
      <div
        className={clsx(
          "md:w-[27.75rem] absolute left-0 top-0 w-full justify-center text-gray-900 dark:text-gray-200 px-4 pb-2 ease-in-out  duration-300 transition",
          position === 0 ? "opacity-0" : "opacity-100 delay-300"
        )}
      >
        <div className="relative flex flex-col mb-6">
          <h3
            className={clsx(
              "text-gray-600 dark:text-gray-400 text-lg font-base transition duration-300 ease-in-out"
            )}
          >
            New vault
          </h3>
          <h1
            className={clsx(
              "text-gray-900 dark:text-gray-200 font-semibold text-3xl transition duration-300 ease-in-out",
              position === 0 ? "opacity-0" : "opacity-100"
            )}
          >
            Setup instructions
          </h1>

          <p className="font-medium text-slate-500 dark:text-slate-400 my-2">
            Follow the steps below to finish creating your bitcoin vault with
            Lily Wallet.
          </p>

          <div className="flex w-full">
            <ol className="list-decimal px-6 font-semibold text-slate-800 dark:text-slate-200 text-md py-4 space-y-4">
              <li>Download Lily Wallet</li>
              <li>Review the vault setup</li>
              <li>Click "Complete setup" on this page</li>
              <li>Add your devices in the app</li>
              <li>Share the vault configuration with {returnAddress}</li>
            </ol>
          </div>
          <p className="text-md font-medium text-slate-500 dark:text-slate-400 my-4">
            If you get stuck for any reason, reach out to the person who invited
            you to create a vault or our support team! We are happy to answer
            any questions you may have.
          </p>
          <div className="mt-5 group">
            <span>
              <Link href="/support">
                <a
                  target="_blank"
                  className="w-max text-sm text-yellow-600 group-hover:text-yellow-700 dark:text-yellow-500 dark:group-hover:text-yellow-400 flex items-center rounded-md focus:ring-1 focus:ring-yellow-600 dark:focus:ring-yellow-500 outline-none"
                >
                  Contact Lily Wallet onboarding support
                  <ArrowLongRightIcon className="h-5 w-5 fill-current ml-6" />
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
      {/* desktop */}
      <div
        className={clsx(`transition duration-500 ease-in-out hidden md:block`)}
        style={{ transform: `translateX(-${position * 45}%)` }}
      >
        <div className="flex w-full">
          <div className="bg-white w-full dark:bg-slate-700 border-t-8 border-green-600 shadow-sm rounded-2xl w-ful mt-6">
            <div className="md:w-[47.75rem] flex items-center p-4 border-b border-gray-200 dark:border-gray-600 sm:py-4 sm:px-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
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
                    {Array.from(Array(config.quorum.totalSigners).keys()).map(
                      (index) => {
                        let item = config.extendedPublicKeys[index];

                        if (!item) {
                          item = {
                            device: {
                              type: "unknown",
                            },
                          };
                        }
                        return (
                          <li
                            key={item.device.fingerprint}
                            className="col-span-1 flex flex-col flex-none text-center bg-white dark:bg-slate-600  rounded-lg shadow divide-y divide-gray-200 dark:divide-slate-500 border border-gray-200 dark:border-slate-700"
                          >
                            <div className="flex-1 flex flex-col py-2 px-4">
                              <DeviceImage
                                className="w-20 h-32 shrink-0 mx-auto object-contain"
                                device={item.device}
                              />
                              <h3 className="mt-2 text-gray-900 dark:text-white text-sm font-medium capitalize">
                                {item.device.type === "unknown"
                                  ? "Add in Lily Wallet"
                                  : item.device.type}
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
                                  className="relative w-0 flex-1 inline-flex items-center justify-center py-2 text-xs text-gray-700 dark:text-gray-200 font-medium border border-transparent outline-none rounded-bl-lg hover:text-gray-500 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500"
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
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
              <div className="flex justify-end pt-6">
                <button
                  className="flex text-md font-medium items-center justify-center bg-emerald-600 py-2 px-3 rounded-2xl shadow-sm text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50"
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
      {/* mobile */}
      <div
        className={clsx(
          position === 0 && "hidden",
          "md:hidden transition duration-300 ease-in-out"
        )}
      >
        <div className="flex w-full">
          <div className="bg-white w-full dark:bg-slate-700 border-t-8 border-green-600 shadow-sm rounded-2xl w-ful mt-6">
            <div className="md:w-[47.75rem] flex items-center p-4 border-b border-gray-200 dark:border-gray-600 sm:py-4 sm:px-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
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
                    {Array.from(Array(config.quorum.totalSigners).keys()).map(
                      (index) => {
                        let item = config.extendedPublicKeys[index];

                        if (!item) {
                          item = {
                            device: {
                              type: "unknown",
                            },
                          };
                        }
                        return (
                          <li
                            key={item.device.fingerprint}
                            className="col-span-1 flex flex-col flex-none text-center bg-white dark:bg-slate-600  rounded-lg shadow divide-y divide-gray-200 dark:divide-slate-500 border border-gray-200 dark:border-slate-700"
                          >
                            <div className="flex-1 flex flex-col py-2 px-4">
                              <DeviceImage
                                className="w-20 h-32 shrink-0 mx-auto object-contain"
                                device={item.device}
                              />
                              <h3 className="mt-2 text-gray-900 dark:text-white text-sm font-medium capitalize">
                                {item.device.type === "unknown"
                                  ? "Add in Lily Wallet"
                                  : item.device.type}
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
                                  className="relative w-0 flex-1 inline-flex items-center justify-center py-2 text-xs text-gray-700 dark:text-gray-200 font-medium border border-transparent outline-none rounded-bl-lg hover:text-gray-500 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500"
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
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
              <div className="flex justify-end pt-6">
                <button
                  className="flex text-md font-medium items-center justify-center bg-emerald-600 py-2 px-3 rounded-2xl shadow-sm text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50"
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
  );
};

export default ImportPanel;
