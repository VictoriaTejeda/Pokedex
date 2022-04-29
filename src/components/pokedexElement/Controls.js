import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  initialCounter,
  random,
} from "../../store/actions/index";

export const Controls = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);

  const conditionalDispatch = () => {
    if (counter >= 2) {
      dispatch(decrement());
    } else dispatch(initialCounter());
  };
  return (
    <div>
      <button
        className="btn-random"
        onClick={() => {
          dispatch(random());
        }}
      >
        Random
      </button>
      <button
        className="btn-left"
        onClick={() => {
          conditionalDispatch();
        }}
      >
        <span className="material-symbols-outlined">arrow_left</span>
      </button>
      <button
        className="btn-right"
        onClick={() => {
          dispatch(increment());
        }}
      >
        <span className="material-symbols-outlined">arrow_right</span>
      </button>
    </div>
  );
};
