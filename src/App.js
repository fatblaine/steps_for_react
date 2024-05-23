import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  /**
   * 虽然可以直接修改 test.name，但这并不推荐。React 的设计理念是将状态视为不可变的，因此应该遵循以下最佳实践：
   * 不要直接修改状态对象的属性：虽然在技术上可以直接修改对象自身的内容，但应该像处理数字、布尔值、字符串一样将状态对象视为不可变的。因此应该替换它们的值，而不是对它们进行修改。
   * 使用状态更新函数：为了真正地触发一次重新渲染，应该使用状态更新函数。
   */
  // const [test] = useState({ name: "Fan" });

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
      // test.name = "Liu";
    }
  }

  function handleNext() {
    if (step < 3) {
      /**
       * 如果写两个 setStep(step + 1);
       * React 在处理状态更新时会进行优化，将多个 setState 调用合并为单个更新，以提高性能。
       * 在这里，两次调用 setStep(step + 1) 实际上被合并为一次更新，因此 step 只会增加一次。
       * 需要使用函数式更新 setStep((s) => s + 2); 将前一个状态作为参数传递给回调函数
       */
      // setStep(step + 1);
      // setStep(step + 1);
      setStep((s) => s + 1);
    }
  }

  function closeApp() {
    // setIsOpen(isOpen == true ? false : true);
    setIsOpen((is) => !is);
    // setStep(1);
  }

  return (
    <div>
      <button className="close" onClick={closeApp}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              // onMouseEnter={() => alert()}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
