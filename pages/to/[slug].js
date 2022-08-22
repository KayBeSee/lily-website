import { useEffect } from "react";
import { useRouter } from "next/router";

const QUERY = `?config={"name":"My Sweet Vault","type":"onchain","created_at":1661139721833,"network":"mainnet","addressType":"P2WSH","quorum":{"requiredSigners":1,"totalSigners":0},"extendedPublicKeys":[]}&status=incomplete&returnTo=Kevin%20Mulcrone%20%3CKayBeSee%40gmail.com%3E`;

const to = "to/";
const removeTo = (path) => path.substring(path.indexOf(to) + to.length);

const deepLinkRedirect = () => {
  const router = useRouter();
  console.log("router: ", router);
  console.log("router.query.slug: ", router.query.slug);
  const slug = router.query.slug;

  const stripped = removeTo(router.asPath);
  console.log("stripped: ", stripped);

  useEffect(() => {
    // setTimeout(() => router.push("/download"), 1000);
    if (slug) {
      window.location = `lily://${stripped}`;
    }
  }, [slug]);

  return null;
};

export default deepLinkRedirect;
