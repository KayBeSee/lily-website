import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const URL =
  "https://kevinmulcrone.us1.list-manage.com/subscribe/post?u=e930e174de002e33d747cb68e&amp;id=60f4bfbc03";

const EmailSubscribe = ({ className }) => {
  const [email, setEmail] = useState("");
  return (
    <MailchimpSubscribe
      url={URL}
      render={({ subscribe, status, message }) => (
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
                  : className
              } border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500`}
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
      )}
    />
  );
};

export default EmailSubscribe;
