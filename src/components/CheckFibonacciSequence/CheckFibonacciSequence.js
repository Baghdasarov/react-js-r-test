import { useState, useMemo } from "react";

import { checkForFibonacciSequence } from "./helpers";

const CheckFibonacciSequence = () => {
  const [formValue, setFormValue] = useState("");
  const [result, setResult] = useState("");

  const memoizedValue = useMemo(() => checkForFibonacciSequence(formValue), [
    formValue,
  ]);

  const handleCheck = (e) => {
    e.preventDefault();

    if (!formValue) {
      return;
    }

    setResult(memoizedValue);
  };

  const handleFormChange = (e) => {
    const { value } = e.target;

    if (value && !value.match(/^[0-9]+$/)) {
      return;
    }

    setFormValue(value);
    setResult("");
  };

  const handleClearFields = () => {
    setResult("");
    setFormValue("");
  };

  return (
    <div className="checkAnagram">
      <h1 className="text-lg font-bold leading-10 text-gray-700 text-center tracking-wide	">
        Check Fibonacci Sequence
      </h1>
      <form onSubmit={handleCheck} className="flex flex-col">
        <input
          placeholder="Number"
          value={formValue}
          onChange={handleFormChange}
          className="h-10 my-1 px-2 py-1 text-gray-700 border rounded focus:outline-none text-sm"
        />
        <button className="w-full h-9 mt-4 px-5 px-3 text-sm text-white bg-blue-500 rounded focus:outline-none">
          Check
        </button>
        <button
          type="button"
          onClick={handleClearFields}
          className="w-full h-9 mt-2 px-5 px-3 text-sm text-gray-800 bg-white rounded border border-blue-400 focus:outline-none"
        >
          Clear field
        </button>
      </form>
      {result && (
        <div className="mt-8 p-5 rounded border bg-white">
          <p className="text-md text-gray-700 text-center">
            Result is - <span className="text-xl text-gray-800">{result}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckFibonacciSequence;
