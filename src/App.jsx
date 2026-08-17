import { useRef, useState } from 'react';
import styles from './App.module.scss';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  return (
    <div
      className={`d-flex flex-column align-items-center ${styles.appContainer}`}
    >
      <button onClick={() => setShow(!show)} className="btn btn-primary mb-20">
        Toggle
      </button>
      <CSSTransition in={show} nodeRef={ref} unmountOnExit timeout={1000}>
        <h1 ref={ref}>Bonjour</h1>
      </CSSTransition>
    </div>
  );
}

export default App;
