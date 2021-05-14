import { useEffect, useState } from "react";
import { motion, useTransform, animate, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";

const colors = {
  lightblue: ["from-green-500 to-green-600", "text-green-100", "bg-green-100"],
  purple: ["from-yellow-300 to-yellow-400", "text-yellow-100", "bg-yellow-100"],
  orange: ["from-green-400 to-green-600", "text-green-100", "bg-green-100"],
  violet: ["from-yellow-300 to-yellow-400", "text-yellow-100", "bg-yellow-100"],
  teal: ["from-green-400 to-green-500", "text-green-100", "bg-green-100"],
  pink: ["from-yellow-200 to-yellow-300", "text-yellow-100", "bg-yellow-100"],
  amber: ["from-green-200 to-green-300", "text-green-100", "bg-green-100"],
  // blue: ["from-green-400 to-green-500", "text-green-100", "bg-green-100"],
};

const rotation = [-2, 1, -1, 2, -1, 1];

const testimonials = [
  {
    content:
      "Seriously impressed with Lily Wallet. Makes the process of creating a 2 or 3 multisig with Coldcard, Ledger and Trezor easy & beautiful. Best UI in #Bitcoin wallets?",
    tweetUrl: "https://twitter.com/sundaywar/status/1307572769975009282",
    author: {
      name: "Domingo Guerra",
      role: "Entrepreneur",
      avatar:
        "https://pbs.twimg.com/profile_images/1363012343752441859/m-diKH5l_400x400.jpg",
    },
  },
  {
    content:
      "I have been playing with Lily Wallet and it’s going in a great direction of user friendly multisig. Check it out and try for yourself. The future is multisig!",
    tweetUrl: "https://twitter.com/thebitcoinrabbi/status/1283168010585415680",
    author: {
      name: "Bitcoin Rabbi",
      role: "Torah Maximalist",
      avatar:
        "https://pbs.twimg.com/profile_images/1388887660094238721/NmMHJpBR_400x400.jpg",
    },
  },
  {
    content:
      "This single-handedly simplified multisig setup. Just tried it myself and it is the smoothest multisig wallet I've come across. ",
    tweetUrl: "https://twitter.com/AsILayHodling/status/1291783873316163585",
    author: {
      name: "Colin Harper",
      role: "Tech journalist",
      avatar:
        "https://pbs.twimg.com/profile_images/1362747091924094980/nv3SjCC1_400x400.jpg",
    },
  },
  {
    content:
      "Impressive stuff, making multisig easy is so important to get people familiar with it. No only the setup but more so using it on a regular basis.",
    tweetUrl: "https://twitter.com/ryanflorence/status/1187951799442886656",
    author: {
      name: "Polylunar",
      role: "Bitcoin Enthusiast",
      avatar:
        "https://pbs.twimg.com/profile_images/1286949104946311168/WDojm3wg_400x400.jpg",
    },
  },
  {
    content:
      "Apps like Lily Wallet are making multisig more accessible to the masses. ",
    tweetUrl: "https://twitter.com/FiftySat/status/1296486153428836353",
    author: {
      name: "Andrew",
      role: "Bitcoin Magazine",
      avatar:
        "https://pbs.twimg.com/profile_images/1375244110160744451/h8U5f9EB_400x400.jpg",
    },
  },
];

function Testimonial({ testimonial, base, index, total }) {
  const x = useTransform(
    base,
    [0, (100 / total) * (index + 1), (100 / total) * (index + 1), 100],
    [
      "0%",
      `${(index + 1) * -100}%`,
      `${total * 100 - (index + 1) * 100}%`,
      "0%",
    ]
  );
  const [straight, setStraight] = useState(false);

  const color = colors[Object.keys(colors)[index % Object.keys(colors).length]];
  console.log("xx: ", Object.keys(colors)[index % Object.keys(colors).length]);
  console.log("color: ", color);

  return (
    <motion.li
      className="px-3 md:px-4 flex-none"
      onMouseEnter={() => setStraight(true)}
      onMouseLeave={() => setStraight(false)}
      style={{ x }}
    >
      <motion.figure
        className="shadow-lg rounded-xl flex-none w-80 md:w-xl"
        initial={false}
        animate={
          straight
            ? { rotate: 0 }
            : { rotate: rotation[index % rotation.length] }
        }
      >
        <blockquote className="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
          <svg
            width="45"
            height="36"
            className={`mb-5 fill-current ${color[1]}`}
          >
            <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z" />
          </svg>
          {typeof testimonial.content === "string" ? (
            <p>{testimonial.content}</p>
          ) : (
            testimonial.content
          )}
        </blockquote>
        <figcaption
          className={`flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white ${color[0]}`}
        >
          <div className="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <img
              src={testimonial.author.avatar}
              alt=""
              className={`w-12 h-12 rounded-full ${color[2]}`}
              loading="lazy"
            />
          </div>
          <div className="flex-auto">
            {testimonial.author.name}
            {testimonial.author.role && (
              <>
                <br />
                <span className={color[1]}>{testimonial.author.role}</span>
              </>
            )}
          </div>
          {testimonial.tweetUrl && (
            <cite className="flex">
              <a
                href={testimonial.tweetUrl}
                target="_blank"
                className="opacity-50 hover:opacity-75 transition-opacity duration-200"
              >
                <span className="sr-only">
                  Original tweet by {testimonial.author.name}
                </span>
                <svg width="33" height="32" fill="currentColor">
                  <path d="M32.411 6.584c-1.113.493-2.309.826-3.566.977a6.228 6.228 0 002.73-3.437 12.4 12.4 0 01-3.944 1.506 6.212 6.212 0 00-10.744 4.253c0 .486.056.958.16 1.414a17.638 17.638 0 01-12.802-6.49 6.208 6.208 0 00-.84 3.122 6.212 6.212 0 002.762 5.17 6.197 6.197 0 01-2.813-.777v.08c0 3.01 2.14 5.52 4.983 6.091a6.258 6.258 0 01-2.806.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.501 0-.996-.03-1.482-.087a17.566 17.566 0 009.52 2.79c11.426 0 17.673-9.463 17.673-17.671 0-.267-.007-.536-.019-.803a12.627 12.627 0 003.098-3.213l.002-.004z" />
                </svg>
              </a>
            </cite>
          )}
        </figcaption>
      </motion.figure>
    </motion.li>
  );
}

export default function Testimonials() {
  const x = useMotionValue(0);
  const { inView, ref: inViewRef } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });
  const [duration, setDuration] = useState(150);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(x, 100, {
      type: "tween",
      duration,
      ease: "linear",
      loop: Infinity,
    });

    return controls.stop;
  }, [inView, x, duration]);

  return (
    <div
      ref={inViewRef}
      className="relative"
      onMouseEnter={() => setDuration(250)}
      onMouseLeave={() => setDuration(150)}
    >
      <div
        className="absolute right-0 bottom-1/2 left-0 bg-gradient-to-t from-gray-100 pointer-events-none"
        style={{ height: 607, maxHeight: "50vh" }}
      />
      <div className="flex overflow-hidden -my-8">
        <ul className="flex items-center w-full py-8">
          {testimonials.map((testimonial, i) => (
            <Testimonial
              key={i}
              testimonial={testimonial}
              base={x}
              index={i}
              total={testimonials.length}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
