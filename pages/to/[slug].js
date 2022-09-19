import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Navigation from "../../components/Navigation";
import HeaderStuff from "../../components/HeaderStuff";
import LoadingSpinner from "../../components/LoadingSpinner";
import Footer from "../../components/Footer";

import VaultSetupPrompt from "../../components/VaultSetupPrompt";

const to = "to/";
const removeTo = (path) => path.substring(path.indexOf(to) + to.length);

const Welcome = () => {
  const router = useRouter();

  const [deepLink, setDeepLink] = useState("");

  const slug = router.query.slug;
  const stripped = removeTo(router.asPath);

  useEffect(() => {
    if (slug) {
      const parsed = `lily://${stripped}`;
      setDeepLink(parsed);
    }
  }, [slug]);

  if (router.query.config) {
    const config = JSON.parse(router.query.config);
    const status = router.query.status;
    const returnAddress = router.query.returnTo;

    return (
      <div className="relative pt-6 bg-white dark:bg-slate-900 min-h-screen">
        <Head>
          <title>Welcome - Lily Wallet</title>
          <HeaderStuff />
        </Head>

        <Navigation darkBg={true} />
        <VaultSetupPrompt
          config={config}
          deepLink={deepLink}
          returnAddress={returnAddress}
          className="mb-24 md:rounded-2xl"
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Head>
        <title>Welcome - Lily Wallet</title>
        <HeaderStuff />
      </Head>
      <LoadingSpinner />
    </div>
  );
};

export default Welcome;
