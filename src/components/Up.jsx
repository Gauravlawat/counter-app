import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Up, Down, Reset } from "../features/counterslice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => dispatch(Up())}
        >
          Up
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => dispatch(Down())}
        >
          Down
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={() => dispatch(Reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Counter;