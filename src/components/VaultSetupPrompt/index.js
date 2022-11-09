import { useState } from "react";
import clsx from "clsx";

import WelcomePanel from "./WelcomePanel";
import ImportPanel from "./ImportPanel";

export const ImportSetupPrompt = ({
  config,
  returnAddress,
  deepLink,
  className,
}) => {
  const [position, setPosition] = useState(0);

  const openDeepLink = () => {
    window.location = deepLink;
  };

  return (
    <div
      className={clsx(
        className,
        "w-full max-w-7xl mx-auto bg-slate-50 dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 dark:highlight-white/10"
      )}
    >
      <div className="block">
        <div className="relative mt-20 overflow-hidden px-7 py-8 xl:px-12">
          <div className="relative -mx-5 flex flex-col md:flex-row">
            <WelcomePanel
              returnAddress={returnAddress}
              className={clsx(
                "transition duration-500 ease-in-out",
                position === 0
                  ? "opacity-100 duration-700 z-10"
                  : "opacity-0 duration-500 z-0"
              )}
              style={{ transform: `translateX(-${position * 100}%)` }}
              setPosition={setPosition}
            />
            <ImportPanel
              position={position}
              returnAddress={returnAddress}
              config={config}
              openDeepLink={openDeepLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportSetupPrompt;
