import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './index.module.scss';
import Content from '../components/home/content';
import Typeout from '../components/common/Typeout';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="nfong.dev" />
      <section id={styles.nfong} className={styles.section}>
        <div className={styles.content}>
          <Typeout id={styles.name} text="nfong" code={false} />
        </div>
      </section>
      <Content />
    </Layout>
  );
};

export default IndexPage;
