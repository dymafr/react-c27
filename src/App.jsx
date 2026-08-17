import { createRef, useState } from 'react';
import styles from './App.module.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  function addToList() {
    setList([
      ...list,
      {
        value: input,
        key: crypto.randomUUID(),
        ref: createRef(),
      },
    ]);
    setInput('');
  }

  return (
    <div className={`d-flex flex-column p-20 ${styles.appContainer}`}>
      <div>
        <input
          type="text"
          className="mr-15"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={addToList} className="btn btn-primary">
          Submit
        </button>
      </div>
      <ul>
        <TransitionGroup>
          {list.map(({ key, ref, value }) => (
            <CSSTransition
              nodeRef={ref}
              timeout={500}
              classNames={styles}
              key={key}
            >
              <li ref={ref}>
                <span className="mr-15">{value}</span>
                <button
                  onClick={() => setList(list.filter((el) => el.key !== key))}
                >
                  x
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  );
}

export default App;
