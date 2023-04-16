import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(1);

  const isStart = useRef(false);
  const active = useRef(false);
  const refInterval = useRef(0);

  const startTimer = () => {
    isStart.current = true; 
    active.current.disabled = true;
    refInterval.current = setInterval(() => {
      if(isStart.current){
        setTime((time) => time + 1)
      }
    }, 1000)
    
  };
  const stopTimer = () => {
    active.current.disabled = false;
    clearInterval(refInterval.current);
  };
  const resetTimer = () => {
    clearInterval(refInterval.current);
    active.current.disabled = false;
    setTime(0);
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
