import { useState } from "react";
import ModalComponent from "./lib/modal";
function App() {
  const [ ModalIsVisible, setModalIsVisible] = useState(false)
  const closeModal = () => { setModalIsVisible(false) }
  return (
    <div className="App">
      <header className="App-header">
        <ModalComponent text="your message" closeButton={closeModal} visible={ModalIsVisible} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setModalIsVisible(true)}>Open Modal</button>
      </header>
    </div>
  );
}

export default App;
