import { useRef, useState } from 'react';
import styles from './App.module.scss';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

function App() {
  const [show, setShow] = useState(true);
  const refA = useRef(null);
  const refB = useRef(null);
  const ref = show ? refA : refB;

  return (
    <div
      className={`d-flex flex-column p-20 align-items-center ${styles.appContainer}`}
    >
      <button onClick={() => setShow(!show)} className="btn btn-primary mb-20">
        Switch
      </button>
      <SwitchTransition mode="in-out">
        <CSSTransition
          key={show ? '1' : '2'}
          nodeRef={ref}
          classNames={styles}
          timeout={1000}
        >
          <div ref={ref}>
            {show && <h1>A</h1>}
            {!show && <h1>B</h1>}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
