import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './logo.module.scss';

const Logo = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "nfong-v1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2160) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <div className={styles.logo}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} {...props} />
    </div>
  );
};

export default Logo;
