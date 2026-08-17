import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Fade.module.scss';

function Fade({ in: inProp, children }) {
  const ref = useRef(null);

  return (
    <CSSTransition
      in={inProp}
      nodeRef={ref}
      unmountOnExit
      timeout={1000}
      appear
      classNames={styles}
    >
      <div ref={ref}>{children}</div>
    </CSSTransition>
  );
}

export default Fade;
