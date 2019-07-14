import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './wip.module.scss';

const Letter = ({ visible, children }) => (
  <span
    className={classNames(styles.letter, {
      [styles.visible]: visible,
    })}
  >
    {children}
  </span>
);

const letters = 'WIP'.split('');
export default function WIP({}) {
  const [i, setI] = useState(0);

  if (i < letters.length) {
    setTimeout(() => setI(i + 1), 150);
  }
  return (
    <div className={styles.container}>
      {letters.map((l, j) => (
        <Letter key={j} visible={i > j}>
          {l}
        </Letter>
      ))}
    </div>
  );
}
