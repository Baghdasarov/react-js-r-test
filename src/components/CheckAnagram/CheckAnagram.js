import { useState } from "react";
import cls from "classnames";

import { checkForAnagram } from "./helpers";

const CheckAnagram = () => {
  const [formValues, setFormValues] = useState({
    textOne: "",
    textTwo: "",
  });
  const [isAnagram, setIsAnagram] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();
    const { textOne, textTwo } = formValues;
    if (!textOne && !textTwo) {
      return;
    }
    setIsAnagram(checkForAnagram(textOne, textTwo));
    setShowAnswer(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setShowAnswer(false);
    setIsAnagram(false);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClearFields = () => {
    setFormValues({
      textOne: "",
      textTwo: "",
    });
    setIsAnagram(false);
    setShowAnswer(false);
  };

  return (
    <div className="checkAnagram">
      <h1 className="text-lg font-bold leading-10 text-gray-700 text-center tracking-wide	">
        Check Anagram
      </h1>
      <form onSubmit={handleCheck} className="flex flex-col">
        <input
          placeholder="Text One"
          name="textOne"
          value={formValues.textOne}
          onChange={handleFormChange}
          className="h-10 my-1 px-2 py-1 text-gray-700 border rounded focus:outline-none text-sm"
        />
        <input
          placeholder="Text Two"
          name="textTwo"
          value={formValues.textTwo}
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
          Clear fields
        </button>
      </form>
      {showAnswer && (
        <div
          className={cls("mt-8 p-5 rounded border", {
            "border-red-500": !isAnagram,
            "border-green-500": isAnagram,
          })}
        >
          {isAnagram ? (
            <p className="text-md text-green-500 text-center">
              Anagram is correct
            </p>
          ) : (
            <p className="text-md text-red-500 text-center">
              Anagram is not correct
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckAnagram;
