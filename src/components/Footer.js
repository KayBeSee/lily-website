import React, { useEffect } from "react";
import Link from "next/link";

import EmailSubscribe from "./EmailSubscribe";

const Footer = () => {
  const YEAR = new Date().getFullYear();

  useEffect(() => {
    zE("webWidget:on", "chat:status", function (status) {
      zE("webWidget", "updateSettings", {
        webWidget: {
          chat: {
            suppress: !!!(status === "online"),
          },
        },
      });
    });
  }, []);

  useEffect(() => {
    window.zESettings = {
      webWidget: {
        launcher: {
          chatLabel: {
            "*": "Live support available now",
          },
        },
        chat: {
          suppress: true,
        },
        contactForm: {
          suppress: true,
        },
        helpCenter: {
          suppress: true,
        },
        talk: {
          suppress: true,
        },
        answerBot: {
          suppress: true,
        },
      },
    };
  }, []);

  return (
    <footer className="bg-emerald-700" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-yellow-300 tracking-wider uppercase">
                  Products
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/">
                      <a className="text-base text-white hover:text-emerald-200">
                        Lily Wallet
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/btc-security-guide">
                      <a className="text-base text-white hover:text-emerald-200">
                        Security Guide
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-yellow-300 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="https://docs.lily-wallet.com">
                      <a
                        target="_blank"
                        className="text-base text-white hover:text-emerald-200"
                      >
                        Documentation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a
                        target="_blank"
                        className="text-base text-white hover:text-emerald-200"
                      >
                        Pricing
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/support">
                      <a className="text-base text-white hover:text-emerald-200">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-yellow-300 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about">
                      <a className="text-base text-white hover:text-emerald-200">
                        About
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/blog">
                      <a className="text-base text-white hover:text-emerald-200">
                        Blog
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/press">
                      <a className="text-base text-white hover:text-emerald-200">
                        Press
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-yellow-300 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy">
                      <a className="text-base text-white hover:text-emerald-200">
                        Privacy
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/terms">
                      <a className="text-base text-white hover:text-emerald-200">
                        Terms
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-yellow-300 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-white">
              The latest news, articles, and resources, sent to your inbox.
            </p>
            <EmailSubscribe className="bg-yellow-500 hover:bg-yellow-400" />
          </div>
        </div>
        <div className="mt-8 border-t border-emerald-800 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              target="_blank"
              href="https://twitter.com/LilyWallet"
              className="text-white hover:text-emerald-100"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>

            <a
              target="_blank"
              href="https://github.com/Lily-Technologies/lily-wallet"
              className="text-white hover:text-emerald-100"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-sm sm:text-base text-white md:mt-0 md:order-1">
            &copy; {YEAR} Lily Technologies, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
