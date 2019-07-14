import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import styles from './typeout.module.scss';

const proptypes = {
  Component: PropTypes.elementType,
  text: PropTypes.string.isRequired,
  onTypeout: PropTypes.func,
  delay: PropTypes.number,
  code: PropTypes.bool,
};
const defaultprops = {
  Component: 'h1',
  onTypeout: _.noop,
  delay: 200,
  code: true,
};
const Typeout = ({ Component, text, onTypeout, delay, code, ...props }) => {
  const [len, setLen] = useState(0);
  // desync prop text from rendered text -- only change this once delete is done running
  const [renderText, setrenderText] = useState(text);
  const [isDeleting, setDeleting] = useState(false);
  let text_ = code ? `${renderText}_` : renderText;

  // trigger delete for text change
  useEffect(() => {
    // prevent flicker before state change
    text_ = renderText;
    setDeleting(true);
  }, [text]);
  useEffect(() => {
    if (isDeleting) {
      if (len === 0) {
        setDeleting(false);
        setrenderText(text);
      } else {
        setTimeout(() => setLen(len - 1), 100);
      }
    } else if (len < text_.length) {
      setTimeout(() => setLen(len + 1), delay * _.random(0.2, 1.3));
    } else {
      onTypeout(text);
    }
  }, [len, isDeleting]);

  return (
    <h1 {...props}>
      {len === 0 && <span>&nbsp;</span>}
      {text_.split('').map(
        (c, i) =>
          i < len && (
            <span key={i} className={code ? styles.letter : ''}>
              {c}
            </span>
          ),
      )}
    </h1>
  );
};
Typeout.propTypes = proptypes;
Typeout.defaultProps = defaultprops;
export default Typeout;
