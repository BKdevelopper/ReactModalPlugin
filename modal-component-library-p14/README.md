# Presentation

Modal component library is a modal library. It's goal is to provide easy, flexible, configurable and accessible way to display modals for your application.

## Authors

- [@BKdevelopper](https://github.com/BKdevelopper)

## Demo

![demo gif](https://user-images.githubusercontent.com/72107589/149371773-01322567-8701-43f6-b0f5-940a84859318.gif)

## Installation

```bash
    npm i modal-component-library-p14
```

## Usage

Import Modal component from "modal-component-library" where you want to use this.

```jsx
import React from "react";
import ModalComponent from "modal-component-library-p14";
function App() {
  const [ModalIsVisible, setModalIsVisible] = useState(false)
  const closeModal = () => { setModalIsVisible(false) }
  return (
    <div className="App">      
        <ModalComponent text="your message" closeButton={closeModal} visible={ModalIsVisible} />
        <button onClick={() => setModalIsVisible(true)}>Open Modal</button>     
    </div>
  );
}
```

## Props

| Name            | Type          | Required | Description                                                              |
| --------------- | ------------- | -------- | ------------------------------------------------------------------------ |
| visible         | `boolean`     | `true`   | Display the modal                                                        |
| closeBtnContent | `func`        | `true`   | The function to close the modal                                          |
| text            | `string`      | `true`   | Message to show                                                          |