import React from "react";

const DownloadButtons = () => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
      <a
        href="https://github.com/KayBeSee/lily-wallet/releases/download/v1.1-rc-1/Lily.Wallet.Setup.1.0.2.exe"
        className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 flex-col items-center mx-4 my-4 shadow-md rounded-2xl hover:-translate-y-1 transform duration-500 ease-in-out"
      >
        <div>
          <img className="max-h-12" src="./windows-logo.png" alt="Workcation" />
        </div>
        <div className="flex flex-col mt-4 items-center justify-center">
          <span>Windows</span>
          <span className="text-gray-500 text-xs">
            Lily.Wallet.Setup.1.0.2.exe
          </span>
        </div>
      </a>
      <a
        href="https://github.com/KayBeSee/lily-wallet/releases/download/v1.1-rc-1/Lily.Wallet-1.0.2.AppImage"
        className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 flex-col items-center mx-4 my-4 shadow-md rounded-2xl hover:-translate-y-1 transform duration-500 ease-in-out"
      >
        <div>
          <img className="max-h-12" src="./linux-logo.png" alt="Mirage" />
        </div>
        <div className="flex flex-col mt-4 items-center justify-center">
          <span>Linux</span>
          <span className="text-gray-500 text-xs">
            Lily.Wallet-1.0.2.AppImage
          </span>
        </div>
      </a>
      <a
        href="https://github.com/KayBeSee/lily-wallet/releases/download/v1.1-rc-1/Lily.Wallet-1.0.2.dmg"
        className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 flex-col items-center mx-4 my-4 shadow-md rounded-2xl hover:-translate-y-1 transform duration-500 ease-in-out"
      >
        <div>
          <img className=" max-h-12" src="./apple-logo.png" alt="Tuple" />
        </div>
        <div className="flex flex-col mt-4 items-center justify-center">
          <span>Mac</span>
          <span className="text-gray-500 text-xs">Lily.Wallet-1.0.2.dmg</span>
        </div>
      </a>
    </div>
  );
};

export default DownloadButtons;
