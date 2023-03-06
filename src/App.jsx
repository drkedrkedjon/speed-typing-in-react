import React from "react";
import useTypeGame from "./useTypeGame";

function App() {
  const {
    formRef,
    isFormDisabled,
    form,
    handleForm,
    time,
    buttonRef,
    isButtonDisabled,
    startGame,
    isTimeRunning,
    wordCount,
  } = useTypeGame();

  return (
    <div className="container">
      <h1>How fast can you type in 10sec.?</h1>
      <textarea
        ref={formRef}
        disabled={isFormDisabled}
        value={form}
        onChange={handleForm}
      />
      <h3>Time remaning: {time}</h3>
      <button
        autoFocus={true}
        ref={buttonRef}
        disabled={isButtonDisabled}
        onClick={startGame}
      >
        {isTimeRunning ? "TYPE NOW" : "START"}
      </button>
      <h2>Word Count: {wordCount}</h2>
    </div>
  );
}

export default App;
