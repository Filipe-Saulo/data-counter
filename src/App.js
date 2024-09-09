import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />;
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function setarDias(e) {
    e.preventDefault();
  }

  function reset() {
    if (count != 0) {
      setCount(0);
      setStep(1);
    }
  }

  return (
    <>
      <div>
        <div>
          {/* <button onClick={() => setStep((c) => c - 1)}>-</button>
          <span>Step: {step}</span>
          <button onClick={() => setStep((c) => c + 1)}>+</button> */}
          <p>{step}</p>
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </div>
        <div>
          <form onSubmit={setarDias}>
            <button onClick={() => setCount((c) => c - step)}>-</button>
            <input
              defaultValue={null}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            ></input>
            <button onClick={() => setCount((c) => c + step)}>+</button>
            {count != 0 ? <button onClick={() => reset()}>reset</button> : ""}
          </form>
        </div>
        {/* <div>
          <button onClick={() => setCount((c) => c - step)}>-</button>
          <span>Count: {count}</span>
          <button onClick={() => setCount((c) => c + step)}>+</button>
        </div> */}

        <p>
          <span>
            {count == 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
}
