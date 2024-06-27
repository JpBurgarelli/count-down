import { FirstCountDown } from "./firstCountDown";
import { SecondCountDown } from "./secondCoundDown";

function App() {
  return (
    <div className="bg-slate-600 w-full h-screen flex flex-col gap-6 justify-center items-center">
      <FirstCountDown />
      <SecondCountDown />
    </div>
  );
}

export default App;