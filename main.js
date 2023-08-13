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

