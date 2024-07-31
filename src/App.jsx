import React, { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [storedValue, setStoredValue] = useState("");
  const [operator, setOperator] = useState(null);
  const [solution, setSolution] = useState(0);

  const handleNumberClick = (number) => {
    setCurrentValue((prev) => (prev === "0" ? String(number) : prev + number));
  };

  const handleOperatorClick = (op) => {
    if (currentValue !== "") {
      if (operator !== null) {
        const newValue = calculate();
        setSolution(newValue);
        setStoredValue(newValue);
      } else {
        setStoredValue(currentValue);
      }
      setCurrentValue("");
      setOperator(op);
    }
  };

  const calculate = () => {
    const firstNum = parseFloat(storedValue);
    const secondNum = parseFloat(currentValue);

    switch (operator) {
      case "+":
        return firstNum + secondNum;
      case "-":
        return firstNum - secondNum;
      case "*":
        return firstNum * secondNum;
      case "/":
        return firstNum / secondNum;
      case "%":
        return firstNum % secondNum;
      default:
        return secondNum;
    }
  };

  const handleEqualClick = () => {
    if (operator && currentValue !== "") {
      const result = calculate();
      setSolution(result);
      setCurrentValue(result.toString());
      setStoredValue("");
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setCurrentValue("0");
    setStoredValue("");
    setOperator(null);
    setSolution(0);
  };

  const handleToggleSign = () => {
    setCurrentValue((prev) => String(-parseFloat(prev)));
  };

  return (
    <div className="flex h-full justify-center items-center p-12">
      <div className="grid grid-cols-4 h-12">
        <div className="col-span-4 bg-gray-500 px-5 flex justify-end items-center text-4xl text-white font-medium h-20">
          {currentValue || solution}
        </div>
        <Button text="AC" onClick={handleClearClick} />
        <Button text="%" onClick={() => handleOperatorClick("%")} />
        <Button text="+/-" onClick={handleToggleSign} />
        <Button
          text="/"
          bg="orange-500"
          onClick={() => handleOperatorClick("/")}
        />
        <Button text={7} onClick={() => handleNumberClick(7)} />
        <Button text={8} onClick={() => handleNumberClick(8)} />
        <Button text={9} onClick={() => handleNumberClick(9)} />
        <Button
          text="*"
          bg="orange-500"
          onClick={() => handleOperatorClick("*")}
        />
        <Button text={4} onClick={() => handleNumberClick(4)} />
        <Button text={5} onClick={() => handleNumberClick(5)} />
        <Button text={6} onClick={() => handleNumberClick(6)} />
        <Button
          text="-"
          bg="orange-500"
          onClick={() => handleOperatorClick("-")}
        />
        <Button text={1} onClick={() => handleNumberClick(1)} />
        <Button text={2} onClick={() => handleNumberClick(2)} />
        <Button text={3} onClick={() => handleNumberClick(3)} />
        <Button
          text="+"
          bg="orange-500"
          onClick={() => handleOperatorClick("+")}
        />
        <Button text="0" span={2} onClick={() => handleNumberClick(0)} />
        <Button text="." onClick={() => handleNumberClick(".")} />
        <Button text="=" bg="orange-500" onClick={handleEqualClick} />
      </div>
    </div>
  );
};

export default App;
