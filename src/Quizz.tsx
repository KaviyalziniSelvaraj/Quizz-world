import Question from "./questions.json";
import Questioncomp from "./Questioncomponent";
import { useSelector } from "react-redux";
import { answer } from "./redux/reducer";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Quizz:React.FC=()=>{
    const [stateeffect,setstateeffect]=useState(false);
    const {state}=useLocation();
    let start=state.limit;
    const [seconds, setSeconds] = useState(start);
    const nav=useNavigate();
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };
      
      useEffect(() => {
        if (state) {
            setstateeffect(state.starttimer || false); // Initialize stateeffect with the value of startTimer from state or false if startTimer is undefined
        }
    }, [state]);

    useEffect(() => {
        if (stateeffect && seconds > 0) {
            const interval = setInterval(() => {
                setSeconds((prevSeconds: number) => prevSeconds - 1);
            },1000);

            return () => clearInterval(interval);
        } else if (seconds === 0) {
            nav('/scoredash');
        }
    }, [stateeffect, seconds, nav]);
    return(<>
    <div className=" row-auto h-20 mx-5 bg-gradient-to-t from-purple-400 to-sky-300 shadow-xl grid grid-cols-2">
    <p className="justify-start pt-5 ml-5 text-2xl font-medium">LEVEL: {state.level}</p>
    <p className="flex justify-end font-medium text-4xl mr-9 pt-5 text-slate-600">⏰{formatTime(seconds)}</p>
    </div> 
    <div className="shadow-xl flex-1 my-5 mx-5 bg-gradient-to-t from-red-300 to-purple-400 rounded-md">
       <div className="bg-white rounded-full mx-5">
        <Questioncomp quescount={state.quescount} start={state.start}/>
       </div>
    </div>
    </>)
}
export default Quizz;