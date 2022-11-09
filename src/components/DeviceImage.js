import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const Coldcard = "/devices/coldcard.png";
const LedgerNanoS = "/devices/ledger_nano_s.png";
const LedgerNanoX = "/devices/ledger_nano_x.png";
const TrezorOne = "/devices/trezor_1.png";
const TrezorT = "/devices/trezor_t.png";
const Cobo = "/devices/cobo.png";
const Bitbox = "/devices/bitbox02.png";
const Iphone = "/devices/iphone.png";
const Unchained = "/devices/unchained.png";

export const DeviceImage = ({ device, className }) => {
  if (device.type === "unknown") {
    return (
      <div className="flex items-center justify-center py-14 px-7 text-slate-600 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 rounded">
        <QuestionMarkCircleIcon className="h-10 w-10" />
      </div>
    );
  }
  return (
    <img
      className={className}
      src={
        device.type === "coldcard"
          ? Coldcard
          : device.type === "ledger" && device.model === "ledger_nano_s"
          ? LedgerNanoS
          : device.type === "ledger" && device.model === "ledger_nano_x"
          ? LedgerNanoX
          : device.type === "trezor" && device.model === "trezor_1"
          ? TrezorOne
          : device.type === "trezor" && device.model === "trezor_t"
          ? TrezorT
          : device.type === "trezor"
          ? TrezorOne
          : device.type === "cobo"
          ? Cobo
          : device.type === "bitbox02"
          ? Bitbox
          : device.type === "unchained"
          ? Unchained
          : Iphone
      }
    />
  );
};

export default DeviceImage;
