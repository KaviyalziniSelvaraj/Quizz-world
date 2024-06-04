import { useSelector } from "react-redux";
import { QuizzesState, answer, quescountinterface } from "./redux/reducer";
import { useLocation, useNavigate } from "react-router";
import { Progress } from "antd";
import { useEffect, useState } from "react";

const Scoreboard:React.FC=()=>{
    const quescount=useSelector((state:QuizzesState)=>state.countredux.count);
    
    console.log(quescount);
    useEffect(()=>{
            if(scoreper>=50 && scoreper<=70)
                {
                    setstatus("Good Job 👍");
                }
             else if(scoreper>70 && scoreper<=90)
                {
                    setstatus("Excellent 👏");
                }
            else if(scoreper>90 && scoreper<100)
                {
                    setstatus("Bravo 🤩");
                }
            else if(scoreper==100)
                {
                    setstatus("You made it 🏆😍");
                }
    },[]);
    const [status,setstatus]=useState('Oops 😢')
    const nav=useNavigate();
    const score=useSelector((state:QuizzesState)=>state.ansredux.score);
    const sum = score.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const scoreper=(sum/quescount)*100;
    window.onpopstate = () => {
        nav("/");
      }
     
    return(
    <>
    <div className="grid justify-center py-40 bg-gradient-to-tl  from-red-300 to-purple-400 h-full min-h-screen overflow-hidden">
    <h1 className=" text-3xl font-bold text-green-900 ml-auto">{status}</h1>
    <Progress type="circle" percent={scoreper} size={200} status="active"/>

    </div>
    </>)
}
export default Scoreboard;