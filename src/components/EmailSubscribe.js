import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const URL =
  "https://kevinmulcrone.us1.list-manage.com/subscribe/post?u=e930e174de002e33d747cb68e&amp;id=60f4bfbc03";

const EmailSubscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <MailchimpSubscribe
      url={URL}
      render={({ subscribe, status, message }) => (
        <div className="mt-8 xl:mt-0">
          <h3 className="text-sm font-semibold text-yellow-300 tracking-wider uppercase">
            Subscribe to our newsletter
          </h3>
          <p className="mt-4 text-base text-white">
            The latest news, articles, and resources, sent to your inbox.
          </p>
          <form
            className="mt-4 sm:flex sm:max-w-md"
            onSubmit={(e) => {
              e.preventDefault();
              subscribe({ EMAIL: email });
            }}
          >
            <label htmlFor="emailAddress" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className={`w-full ${
                  status === "success"
                    ? "bg-emerald-500 hover:bg-emerald-400"
                    : status === "error"
                    ? "bg-red-500 hover:bg-red-400"
                    : "bg-yellow-400 hover:bg-yellow-300"
                } border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500`}
              >
                {status === "success"
                  ? "Subscribed"
                  : status === "error"
                  ? "Error"
                  : status === "sending"
                  ? "Subscribing..."
                  : "Subscribe"}
              </button>
            </div>
          </form>
        </div>
      )}
    />
  );
};

export default EmailSubscribe;
