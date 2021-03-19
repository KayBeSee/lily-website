import Head from "next/head";
import Link from "next/link";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeaderStuff from "../components/HeaderStuff";

const About = () => {
  return (
    <div className="relative pt-6 bg-white">
      <Head>
        <title>About - Lily Wallet</title>
        <HeaderStuff />
      </Head>

      <Navigation />
      <div>
        <div class="relative py-16 bg-white overflow-hidden">
          <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              class="relative h-full text-lg max-w-prose mx-auto"
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
                      class="text-gray-200"
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
                      class="text-gray-200"
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
                      class="text-gray-200"
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
          <div class="relative px-4 sm:px-6 lg:px-8">
            <div class="text-lg max-w-prose mx-auto">
              <h1>
                <span class="block text-base text-center text-green-600 font-semibold tracking-wide uppercase">
                  Introducing
                </span>
                <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Lily Wallet
                </span>
              </h1>
              <p class="mt-8 text-xl text-gray-500 leading-8">
                Our mission is to make securing bitcoin safe and easy. We
                believe that bitcoin is the best monetary network ever created.
                Because of this belief, we build products and provide support
                for normal people to make using bitcoin secure and easy.
              </p>
              {/* </div> */}
              <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <p>
                  Our flagship product is Lily Wallet, an ultra secure bitcoin
                  wallet that runs on your computer. Lily makes it easy to
                  create and manage multisignature vaults, a type of bitcoin
                  account that requires approvals from multiple devices in order
                  to send coins to other people.
                </p>
                <p>
                  Lily combines bitcoin standard practices with an easy to
                  understand user interface to keep your bitcoin{" "}
                  <strong>secure</strong> and <strong>accessible</strong>.
                </p>
                <p>At Lily, we focus on:</p>
                <ul>
                  <li>Security</li>
                  <li>Privacy</li>
                  <li>Usability</li>
                </ul>
                {/* <p>
              Quis semper vulputate aliquam venenatis egestas sagittis quisque
              orci. Donec commodo sit viverra aliquam porttitor ultrices gravida
              eu. Tincidunt leo, elementum mattis elementum ut nisl, justo,
              amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet,
              duis sed elit interdum dignissim.
            </p> */}
                <h2>Made for normal folks</h2>
                <p>
                  Lily was designed to make securing bitcoin easy. We build
                  products for everyday users to use and provide expert support
                  for when they get stuck. We think this approach will help get
                  the next million bitcoin users online.
                </p>
                {/*<blockquote>
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
            </blockquote>
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p> */}
                {/*<figure>
              <img
                class="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                alt=""
                width="1310"
                height="873"
              />
              <figcaption>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
              </figcaption>
            </figure> */}
                {/*<h2>Everything you need to get up and running</h2>
            <p>
              Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>.
              Amet, massa quam varius orci dapibus volutpat cras. In amet eu
              ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
              viverra ridiculus non molestie. Gravida quis fringilla amet eget
              dui tempor dignissim. Facilisis auctor venenatis varius nunc,
              congue erat ac. Cras fermentum convallis quam.
            </p>
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p> */}
              </div>
            </div>

            <div class="bg-white">
              <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                  <div class="space-y-5 sm:space-y-4">
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                      About Us
                    </h2>
                    <p class="text-xl text-gray-500">
                      Lily was started in March 2020 because its founder was
                      frustrated by how complex multisignature wallets for
                      Bitcoin were. The company set out to create a secure
                      multisignature wallet that anyone could use.
                    </p>
                  </div>
                  <div class="lg:col-span-2">
                    <ul class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                      <li class="sm:py-8">
                        <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                          <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                            <img
                              class="object-cover shadow-lg rounded-lg"
                              src="./screenshots/kevin.jpeg"
                              alt=""
                            />
                          </div>
                          <div class="sm:col-span-2">
                            <div class="space-y-4">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Kevin Mulcrone</h3>
                                <p class="text-green-600">Co-Founder / CEO</p>
                              </div>
                              <div class="text-lg">
                                <p class="text-gray-500 mb-3">
                                  Kevin first heard about Bitcoin in 2012 when
                                  his AP Computer Science classmates began
                                  mining it in their high school's computer lab.
                                </p>

                                <p class="text-gray-500">
                                  He believes Bitcoin will help foster a society
                                  that is more free, productive, ethical, and
                                  fun than our world today.
                                </p>
                              </div>
                              <ul class="flex space-x-5">
                                <li>
                                  <a
                                    href="https://twitter.com/KayBeSee"
                                    target="_blank"
                                    class="text-gray-400 hover:text-gray-500"
                                  >
                                    <span class="sr-only">Twitter</span>
                                    <svg
                                      class="w-5 h-5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      aria-hidden="true"
                                    >
                                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://www.linkedin.com/in/kevinmulcrone/"
                                    target="_blank"
                                    class="text-gray-400 hover:text-gray-500"
                                  >
                                    <span class="sr-only">LinkedIn</span>
                                    <svg
                                      class="w-5 h-5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Ready to dive in?</span>
            <span class="block text-green-600">
              Start your free trial today.
            </span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <Link href="/download">
                <a class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  Download Lily
                </a>
              </Link>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <a
                href="https://calendly.com/lilywallet/setup-walkthrough"
                target="_blank"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
              >
                Talk to an expert
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
