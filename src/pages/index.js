import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import WIP from "../components/wip"

const IndexPage = () => {
  const [isLogoLoaded, setLogoLoaded] = useState(false);

  return (
    <Layout>
      <SEO title="WIP" />
      <Logo onLoad={() => setTimeout(() => setLogoLoaded(true), 2000)} />
      {isLogoLoaded && <WIP />}
    </Layout>
  );
};

export default IndexPage
