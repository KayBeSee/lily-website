import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/outline";

import DeviceImage from "./DeviceImage";

const VaultDisplayPanel = ({ config }) => {
  return (
    <div
      className="bg-white dark:bg-slate-700 border-t-8 border-green-600 shadow-sm rounded-2xl w-full"
      style={{ transform: "translateX(--100%)" }}
    >
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
              {config.quorum.requiredSigners} of {config.quorum.totalSigners}
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
  );
};

export default VaultDisplayPanel;
