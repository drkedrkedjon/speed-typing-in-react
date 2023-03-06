import React from "react";

function useTypeGame() {
  const [form, setForm] = React.useState("");
  const [wordCount, setWordCount] = React.useState(0);
  const [time, setTime] = React.useState(10);
  const [isTimeRunning, setIsTimeRunning] = React.useState(false);
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);
  const formRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  function startGame() {
    setForm("");
    setIsFormDisabled(false);
    setIsButtonDisabled(true);
    setTime(10);
    setWordCount(0);
    setIsTimeRunning(true);
  }

  function stopGame() {
    wordCounter(form);
    setIsFormDisabled(true);
    setIsButtonDisabled(false);
    setTimeout(() => {
      buttonRef.current.focus();
    }, 3000);
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
      formRef.current.focus();
      setTimeout(() => {
        setTime((oldTime) => oldTime - 1);
      }, 1000);
    } else if (time === 0) {
      stopGame();
    }
  }, [time, isTimeRunning]);

  return {
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
  };
}

export default useTypeGame;
