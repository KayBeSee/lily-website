import Link from "next/link";

import {
  HomeIcon,
  LockClosedIcon,
  PencilSquareIcon,
  BoltIcon,
  ServerIcon,
  FingerPrintIcon,
  LifebuoyIcon,
  SquaresPlusIcon,
  TicketIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Unlimited accounts",
    description:
      "Manage all of your accounts from one beautiful, intuitive user interface.",
    icon: SquaresPlusIcon,
  },
  {
    name: "Lightning Network",
    description:
      "Support for lightning network accounts including channel opening/closing from cold storage.",
    icon: BoltIcon,
  },
  {
    name: "Transaction metadata",
    description:
      "Easily add labels to transactions and tags to addresses to stay organized.",
    icon: PencilSquareIcon,
  },
  {
    name: "Fee customization",
    description:
      "Choose what fee you want to pay based on the priority of your transaction.",
    icon: AdjustmentsVerticalIcon,
  },
  {
    name: "PSBT support",
    description:
      "Fully interoperable with wallets and software that support partially signed bitcoin transactions.",
    icon: TicketIcon,
  },
  {
    name: "Connect to your node",
    description:
      "Easily connect to your node at home to verify and broadcast transactions.",
    icon: ServerIcon,
  },
  {
    name: "Privacy by default",
    description:
      "No sign ups, emails, or KYC required. Simply download the software and start using bitcoin.",
    icon: FingerPrintIcon,
  },
  {
    name: "Support available",
    description:
      "Bitcoin experts are on call to help answer questions or provide support.",
    icon: LifebuoyIcon,
  },
];

export default function Features() {
  return (
    <>
      <div className="relative overflow-hidden bg-white pt-16 pb-32">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-600">
                    <HomeIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Manage all of your bitcoin in one place
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Don't use a different application for every bitcoin account
                    you have. Lily Wallet provides a beautiful interface to
                    manage all of your bitcoin holistically.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-emerald-700"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      &ldquo;Cras velit quis eros eget rhoncus lacus ultrices
                      sed diam. Sit orci risus aenean curabitur donec aliquet.
                      Mi venenatis in euismod ut.&rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                          alt=""
                        />
                      </div>
                      <div className="text-base font-medium text-gray-700">
                        Marcia Hill, Digital Marketing Manager
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/screenshots/home-down.png"
                  alt="Lily Wallet Home Page"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-600">
                    <LockClosedIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Upgrade as your wealth appreciates
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    You can start using Lily Wallet with your current custody
                    setup, no matter what that is. Then easily upgrade to
                    multisig for more robust security as your bitcoin increases
                    in value.
                  </p>
                  <div className="mt-6">
                    <Link href="/blog/btc-security-guide">
                      <a className="inline-flex rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-emerald-700">
                        Learn about multisig
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/screenshots/lightning-open-dark.png"
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-emerald-700">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Unlock the full power of bitcoin
          </h2>
          <p className="mt-4 max-w-xl text-lg text-emerald-200">
            We are bitcoiners ourselves, so we have built Lily Wallet with all
            of the features we would expect in a world-class bitcoin wallet.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-emerald-200">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
