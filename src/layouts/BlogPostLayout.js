import { formatDate } from "@/utils/formatDate";
import { MDXProvider } from "@mdx-js/react";
import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import EmailSubscribe from "@/components/EmailSubscribe";
import Navigation from "@/components/Navigation";

export function BlogPostLayout({ children, meta }) {
  return (
    <div className="relative pt-6 bg-gray-50 dark:bg-slate-900">
      <Navigation darkMode />
      <div class="relative overflow-hidden">
        <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full pb-10">
          <div
            class="relative h-full text-lg max-w-prose mx-auto "
            aria-hidden="true"
          >
            <svg
              class="absolute top-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                    class="text-gray-200 dark:text-slate-800"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                    class="text-gray-200 dark:text-slate-800"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              class="absolute bottom-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                    class="text-gray-200 dark:text-slate-800"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex px-4 pb-10 lg:px-8">
            <Link href="/blog">
              <a className="group flex font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
                <svg
                  viewBox="0 -9 3 24"
                  className="overflow-visible mr-3 text-slate-400 w-auto h-6 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                >
                  <path
                    d="M3 0L0 3L3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to Blog
              </a>
            </Link>
          </div>
          <div className="lg:-mt-8 mb-16 max-w-3xl mx-auto bg-white shadow-lg dark:bg-slate-800 sm:rounded-2xl ring-1 ring-slate-100 dark:ring-slate-700 pt-12 my-2">
            <div className="px-4 sm:px-6 md:px-8">
              <main>
                <div className="max-w-prose mx-auto px-4 sm:px-6 lg:px-8">
                  <article className="relative">
                    <Metadata meta={meta} />
                    <h1
                      className={clsx(
                        "pt-6 mt-2 block text-2xl font-medium tracking-tight text-slate-900 dark:!text-slate-200"
                      )}
                    >
                      {meta.title}
                    </h1>
                    <div className="text-sm leading-6">
                      <dl>
                        <dt className="sr-only">Date</dt>
                        <dd
                          className={clsx(
                            "absolute top-0 inset-x-0 text-slate-700 dark:text-slate-400"
                          )}
                        >
                          <time dateTime={meta.date}>
                            {formatDate(
                              meta.date,
                              "{dddd}, {MMMM} {DD}, {YYYY}"
                            )}
                          </time>
                        </dd>
                      </dl>
                    </div>
                    <div className="mt-6">
                      <ul
                        className={clsx(
                          "flex flex-wrap text-sm leading-6 -mt-6 -mx-5"
                        )}
                      >
                        {meta.authors.map((author) => (
                          <li
                            key={author.twitter}
                            className="flex items-center font-medium whitespace-nowrap px-5 mt-6"
                          >
                            <img
                              src={author.avatar}
                              alt=""
                              className="mr-3 w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-800"
                              decoding="async"
                            />
                            <div className="text-sm leading-4">
                              <div className="text-slate-900 dark:text-slate-200">
                                {author.name}
                              </div>
                              <div className="mt-1">
                                <a
                                  href={`https://twitter.com/${author.twitter}`}
                                  className="text-emerald-500 hover:text-emerald-600 dark:text-emerald-400"
                                >
                                  @{author.twitter}
                                </a>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={clsx(
                        "mt-12 prose prose-slate dark:prose-invert dark:prose-p:text-slate-400 prose-headings:font-medium prose-a:border-b prose-a:no-underline prose-a:text-emerald-500 prose-a:border-emerald-500 hover:prose-a:text-emerald-400"
                      )}
                    >
                      <MDXProvider>{children}</MDXProvider>
                    </div>
                    <div className="flex items-center justify-center py-16">
                      <img src="/logo.svg" alt="Lily Wallet" class="h-16" />
                    </div>
                  </article>
                </div>
              </main>
            </div>
          </div>
          <footer className="mt-16">
            <div className="relative">
              <section className="relative py-16 border-t border-slate-200 dark:border-slate-200/5 mx-auto max-w-3xl">
                <h2 className="text-xl font-semibold text-slate-900 tracking-tight dark:text-white">
                  Get all of our updates directly to your&nbsp;inbox.
                  <br />
                  Sign up for our newsletter.
                </h2>
                <div className="mt-5 max-w-md">
                  <EmailSubscribe className="bg-green-700 hover:bg-green-600" />
                </div>
              </section>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

function Metadata({ meta }) {
  let router = useRouter();

  return (
    <Head>
      <title>{meta.title} – Lily Wallet</title>
      <meta name="twitter:site" content="@LilyWallet" />
      <meta name="twitter:creator" content="@LilyWallet" />
      <meta name="twitter:title" content={`${meta.title} – Lily Wallet`} />
      <meta name="twitter:description" content={meta.description} />
      {meta.image ? (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content={`https://lily-wallet.com${meta.image.src}`}
          />
          <meta
            property="og:image"
            content={`https://lily-wallet.com${meta.image.src}`}
          />
        </>
      ) : (
        <>
          <meta name="twitter:card" content="summary" />
          {/* <meta
            name="twitter:image"
            content={`https://lily-wallet.com${
              require("@/img/social-square.jpg").default.src
            }`}
          /> */}
        </>
      )}
      <meta
        property="og:url"
        content={`https://lily-wallet.com${router.pathname}`}
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${meta.title} – Lily Wallet`} />
      <meta property="og:description" content={meta.description} />
      <meta name="description" content={meta.description}></meta>
    </Head>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
