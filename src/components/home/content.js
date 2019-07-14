import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import styles from './content.module.scss';
import Typeout from '../common/Typeout';
import Dev from './dev';

const contentTypes = ['.dev', '.eat', '.game', '.travel'];
const Content = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const content = contentTypes[contentIndex];
  const cycleContent = useCallback(() => {
    setTimeout(
      () =>
        setContentIndex(
          contentIndex + 1 < contentTypes.length ? contentIndex + 1 : 0,
        ),
      2000 + 250 * content.length,
    );
  }, [contentIndex]);

  return (
    <section id={styles.content} className={styles.section}>
      <div className={styles.content}>
        <Typeout text={content} onTypeout={cycleContent} />
      </div>
      <Dev />
    </section>
  );
};

export default Content;
