import VaultSetupPrompt from "@/components/VaultSetupPrompt";

const RETURN_ADDRESS = "Lily Technologies, Inc. <help@lily-wallet.com>";
const CONFIG = {
  name: "My New Vault",
  type: "onchain",
  created_at: 1661822773228,
  network: "mainnet",
  addressType: "P2WSH",
  quorum: {
    requiredSigners: 2,
    totalSigners: 3,
  },
  extendedPublicKeys: [
    {
      id: "2919dbb83f73666691ed7ec69a36401f",
      created_at: 1661822899320,
      parentFingerprint: "4F60D1C9",
      network: "mainnet",
      bip32Path: "m/48'/0'/0'/2'",
      xpub: "xpub6F2wuvSo8gSRjE9JsMgSva9cDZGa2Hh9SEJ9yczCLd1q2SRFV6N4vRUKFoecbatfhgZcG5rNwTxygNLoPrKpjRt94czCzQQPnoVY1RauiL6",
      device: {
        type: "coldcard",
        fingerprint: "4F60D1C9",
        model: "unknown",
        owner: {
          name: "Lily Technologies, Inc.",
          email: "help@lily-wallet.com",
        },
      },
    },
  ],
};

export const BlogVaultSetupPrompt = () => {
  return (
    <VaultSetupPrompt
      config={CONFIG}
      returnAddress="Lily Technologies, Inc. <help@lily-wallet.com>"
      className="-translate-y-6 rounded-2xl"
      deepLink={`lily://setup?config=${JSON.stringify(CONFIG)}`}
    />
  );
};
