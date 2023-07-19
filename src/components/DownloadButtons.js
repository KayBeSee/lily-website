import React from "react";

const DownloadButtons = () => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
      <a
        href="https://github.com/Lily-Technologies/lily-wallet/releases/download/v1.4.0/Lily.Wallet.Setup.1.4.0.exe"
        className="col-span-1 flex justify-center py-8 px-2 sm:px-8 bg-gray-50 flex-col items-center mx-4 my-4 shadow-md rounded-2xl hover:-translate-y-1 transform duration-500 ease-in-out"
      >
        <div>
          <img
            className="max-h-12"
            src="./windows-logo.png"
            alt="Windows Logo"
          />
        </div>
        <div className="flex flex-col mt-4 items-center justify-center">
          <span>Windows</span>
          <span className="text-gray-500 text-xxs sm:text-xs">
            Lily.Wallet.Setup.1.4.0.exe
          </span>
        </div>
      </a>
      <a
        href="https://github.com/Lily-Technologies/lily-wallet/releases/download/v1.4.0/Lily.Wallet-1.4.0.AppImage"
        className="col-span-1 flex justify-center py-8 px-2 sm:px-8 bg-gray-50 flex-col items-center mx-4 my-4 shadow-md rounded-2xl hover:-translate-y-1 transform duration-500 ease-in-out"
      >
        <div>
          <img className="max-h-12" src="./linux-logo.png" alt="Linux Logo" />
        </div>
        <div className="flex flex-col mt-4 items-center justify-center">
          <span>Linux</span>
          <span className="text-gray-500 text-xxs sm:text-xs">
            Lily.Wallet-1.4.0.AppImage
          </span>
        </div>
      </a>
      <a
        href="https://github.com/Lily-Technologies/lily-wallet/releases/download/v1.4.0/Lily.Wallet-1.4.0-arm64.dmg"
        className="col-span-1 flex justify-center py-8 px-2 sm:px-8 bg-gray-50 flex-col items-center mx-4 my-4 shadow-md rounded-2xl hover:-translate-y-1 transform duration-500 ease-in-out"
      >
        <div>
          <img className=" max-h-12" src="./apple-logo.png" alt="Mac Logo" />
        </div>
        <div className="flex flex-col mt-4 items-center justify-center">
          <span>Mac</span>
          <span className="text-gray-500 text-xxs sm:text-xs">
            Lily.Wallet-1.4.0-arm64.dmg
          </span>
        </div>
      </a>
    </div>
  );
};

export default DownloadButtons;
