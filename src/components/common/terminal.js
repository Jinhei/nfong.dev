import React from 'react';
import _ from 'lodash';

import * as devicons from '../../svg/devicons';

import styles from './terminal.module.scss';
import letterStyles from './typeout.module.scss';

const skills = {
  'react.js': devicons.react,
  'node.js': devicons.node,
  'core.java': devicons.java,
  'flask.python': devicons.python,
  '.travis.yml': devicons.travis,
  'versioning.git': devicons.git,
  '(...)': null,
};
const Terminal = () => (
  <figure className={styles.container}>
    <div className={styles.bar}>
      <div className={styles.closeBtn} />
      <div className={styles.minBtn} />
      <div className={styles.plusBtn} />
    </div>

    <div className={styles.body}>
      <pre>
        <pre className={styles.user}>
          <code>[guest@nfong.dev]</code>
        </pre>
        <pre>
          <code>&gt; tree skills</code>
        </pre>

        {_.map(skills, (IconType, name) => (
          <React.Fragment key={name}>
            <pre>
              <code>{`| ${name}`}</code>
              {IconType && <IconType />}
            </pre>
          </React.Fragment>
        ))}
      </pre>
      <pre>
        <code>
          <span>&gt; </span>
          <span className={letterStyles.letter}>_</span>
        </code>
      </pre>
    </div>
  </figure>
);

export default Terminal;
