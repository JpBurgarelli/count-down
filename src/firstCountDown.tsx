import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";


export const FirstCountDown= () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countdownActive, setCountdownActive] = useState(false);
  const [dropDownValue, setDropDownValue] = useState<number>(0);
  const [buttonText, setButtonText] = useState("Iniciar");


  useEffect(() => {
    let timer: any;
    if (countdownActive && (minutes > 0 || seconds > 0)) {
     timer = setInterval(() => {
      if (seconds > 0) {
       setSeconds((prevSeconds) => prevSeconds - 1);
      } else if (minutes > 0) {
       setMinutes((prevMinutes) => prevMinutes - 1);
       setSeconds(59);
      }
     }, 1000);
    }
  
    if (seconds === 1 && minutes === 0) {
     setButtonText("Reiniciar");
    }
  
    return () => clearInterval(timer);
   }, [countdownActive, minutes, seconds]);
  
   const startCountdown = () => {
    if (buttonText === "Iniciar") {
     setCountdownActive(true);
    } else {
     restartCountDown();
    }
   };
  
   const handleInputChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    setMinutes(value);
    setSeconds(0);
    setDropDownValue(value);
   };
  
   const restartCountDown = () => {
    setMinutes(dropDownValue);
    setSeconds(0);
   };
  return(
    <div className="bg-slate-400 rounded-sm w-[70%] flex flex-col items-center gap-4 p-6">
    <h1 className="text-4xl">First Count Down</h1>
    <div className="flex gap-2 items-center">
     <p>Quero que meu drop down dure </p>
     <Input
      type="number"
      min={0}
      max={60}
      step={5}
      className="w-[80px]"
      onChange={handleInputChange}
     />
     <p>minutos.</p>
    </div>
    <div className="text-9xl flex items-center">
     <span>{String(minutes).padStart(2, "0")}</span>
     <span>:</span>
     <span>{String(seconds).padStart(2, "0")}</span>
    </div>
    <Button className="w-full text-xl p-8" onClick={startCountdown}>
     {buttonText}
    </Button>
   </div>
  )
}