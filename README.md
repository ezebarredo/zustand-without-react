# zustand-without-react

Simple code with Javascript showing how use Zustand without React with count +1 

main.js

import { createStore } from "zustand/vanilla";

const btnMoreDOM = document.querySelector('.more'); 
const numbersDOM = document.querySelector('.numbers');

const {getState, setState} = createStore (() => ({
  count: 1,
}));


btnMoreDOM.addEventListener("click", () => {
  const {count} = getState();
  setState((state) => ({...state, count: state.count +1}),true);
  numbersDOM.textContent = `${count}`;
});
