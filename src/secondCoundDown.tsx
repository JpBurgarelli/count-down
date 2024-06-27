import { useEffect, useState } from "react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"



    export const SecondCountDown = () => {
      const [startCounting, setStartCounting] = useState(false)
      const [minutes, setMinutes] = useState(0)
      const [seconds, setSeconds] = useState(0)
      const [buttonText, setButtonText] = useState("Iniciar")
      const [dropDownValue, setDropDownValue] = useState(0)

      useEffect(() => {
        let timer: any;
        if(startCounting && (minutes > 0 || seconds > 0)){
          console.log(minutes, 'inside')

         timer =  setInterval(() => {
          if(seconds > 0){
            setSeconds(prevSecond => prevSecond - 1)
          } else if (minutes > 0){
            setMinutes(prevMinute => prevMinute - 1)
            setSeconds(59)
          }
        }, 1000)

        if(minutes === 0 && seconds == 1){
          setButtonText("Reiniciar")
        }
        }

        

        return () => clearInterval(timer);
      }, [startCounting, minutes, seconds])
 
      const handleStartCounting = () => {
        if(buttonText === "Iniciar"){
          setStartCounting(true)
        } else {
          setMinutes(dropDownValue)
        }
      }

      const handleNumber = (e:any) => {
        const number = parseInt(e.target.value, 10)
        setMinutes(number)
        setSeconds(0)
        setDropDownValue(number)
      }

      return(
        <div className="bg-orange-600 rounded-sm w-[70%] flex flex-col items-center gap-4 p-6 mb-10 ">
          <div className="flex flex-col gap-4 items-center ">
          <h1 className="text-4xl">Second Count Down</h1>
          <div className="flex items-center gap-2">
            <p>Quero que meu drop down dure</p>
            <Input className="w-[80px]" type="number" onChange={handleNumber} />
            minutos
          </div>

          <div className="text-9xl">
            <span>{String(minutes)}</span>
            <span>:</span>
            <span>{String(seconds)}</span>
          </div>
          <Button onClick={handleStartCounting} className="w-full">{buttonText}</Button>
          </div>
          
       </div>
      )
    }