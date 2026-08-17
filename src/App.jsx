import { useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center ${styles.appContainer}`}
    >
      <button onClick={() => setShow(!show)} className="btn btn-primary mb-20">
        Toggle
      </button>
      {show && <h1>Bonjour</h1>}
    </div>
  );
}

export default App;
