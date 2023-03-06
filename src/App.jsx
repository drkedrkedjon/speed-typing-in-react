import React from "react";

function App() {
  const [form, setForm] = React.useState("");
  const [wordCount, setWordCount] = React.useState(0);
  const [time, setTime] = React.useState(5);
  const [isTimeRunning, setIsTimeRunning] = React.useState(false);
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  function startGame() {
    setForm("");
    setIsFormDisabled(false);
    setIsButtonDisabled(true);
    setTime(5);
    setWordCount(0);
    setIsTimeRunning(true);
  }

  function stopGame() {
    wordCounter(form);
    setIsFormDisabled(true);
    setIsButtonDisabled(false);
    setIsTimeRunning(false);
  }

  function handleForm(e) {
    setForm(e.target.value);
  }

  function wordCounter(formValue) {
    const number = formValue
      .trim()
      .split(" ")
      .filter((word) => word !== "").length;
    setWordCount(number);
  }

  React.useEffect(() => {
    if (time > 0 && isTimeRunning) {
      setTimeout(() => {
        setTime((oldTime) => oldTime - 1);
      }, 1000);
    } else if (time === 0) {
      stopGame();
    }
  }, [time, isTimeRunning]);

  return (
    <div className="container">
      <h1>How fast do you type?</h1>
      <textarea disabled={isFormDisabled} value={form} onChange={handleForm} />
      <h3>Time remaning: {time}</h3>
      <button disabled={isButtonDisabled} onClick={startGame}>
        START
      </button>
      <h2>Word Count: {wordCount}</h2>
    </div>
  );
}

export default App;
