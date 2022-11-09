import Link from "next/link";
import clsx from "clsx";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

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
  "Retain complete control of your bitcoin",
  "Preserve privacy and autonomy",
  "Pleasant user experience",
  "Easy to setup",
];

const WelcomePanel = ({ returnAddress, setPosition, className }) => {
  return (
    <div
      className={clsx(
        "w-full justify-center px-4 pb-2 ease-in-out transition",
        className
      )}
    >
      <div className="relative flex flex-col mb-6 md:w-[47.75rem]">
        <h3 className="text-gray-600 dark:text-gray-400 text-lg">New vault</h3>
        <h1 className="text-gray-900 dark:text-gray-200 font-semibold text-3xl">
          You have been invited!
        </h1>
        <div className="max-w-xl">
          <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {returnAddress} has invited you to collaborate on a multisignature
            bitcoin vault.
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            Using Lily Wallet to manage a collaborative vault makes your bitcoin
            more resilient.
          </p>
          <ul
            role="list"
            className="mt-4 space-y-0 text-slate-900 dark:text-slate-200"
          >
            {listItems.map((item) => (
              <ListItem text={item} />
            ))}
          </ul>

          <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
            To participate, you will need to add one or more of your bitcoin
            hardware wallet(s) or key(s) using Lily Wallet.
          </p>

          <div className="mt-5 group">
            <span>
              <Link href="/btc-security-guide">
                <a
                  target="_blank"
                  className="w-max text-sm text-yellow-600 group-hover:text-yellow-700 dark:text-yellow-500 dark:group-hover:text-yellow-400 flex items-center rounded-md focus:ring-1 focus:ring-yellow-600 dark:focus:ring-yellow-500 outline-none"
                >
                  Learn more about multisignature vaults
                  <ArrowLongRightIcon className="h-5 w-5 fill-current ml-6" />
                </a>
              </Link>
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <button
              className="inline-flex justify-center rounded-lg text-sm font-medium py-3 px-4 bg-green-500 border border-green-600 text-slate-50 hover:bg-green-600 focus:ring-1 focus:ring-green-800 dark:focus:ring-green-600 outline-none"
              onClick={() => setPosition(1)}
            >
              Get started
            </button>
            <Link href="/download">
              <a
                target="_blank"
                className="inline-flex justify-center rounded-lg text-sm font-medium py-3 px-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-slate-100/20  outline-none"
              >
                Download Lily Wallet
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePanel;
