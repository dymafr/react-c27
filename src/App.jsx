import { useState } from 'react';
import styles from './App.module.scss';
import Fade from './Fade';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div
      className={`d-flex flex-column p-20 align-items-center ${styles.appContainer}`}
    >
      <button onClick={() => setShow(!show)} className="btn btn-primary mb-20">
        Toggle
      </button>
      <Fade in={show}>
        <h1>Bonjour</h1>
      </Fade>
    </div>
  );
}

export default App;
