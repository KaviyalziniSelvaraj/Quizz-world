import { useState } from "react";
import Ques from "./questions.json";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ansaction } from "./redux/action";
import { QuizzesState, answer } from "./redux/reducer";
import Scoreboard from "./Scoreboard";
import { useNavigate } from "react-router";

interface QuestionCompProps {
  quescount: number;
  start:number;
}
const Questioncomp: React.FC<QuestionCompProps> = ({...props}) => {
    const score=useSelector((state:QuizzesState)=>state.ansredux.score);
    const {quescount,start}=props;
    const nav=useNavigate();
    console.log(score);
  const [idx,setidx]=useState(start);
  const choice = new Array(4);
  choice.fill(0);
  const bg = new Array(4);
  bg.fill(false);
  const [select, setselect] = useState(choice);
  const [bgclr, setbg] = useState(bg);
  const dispatch=useDispatch();
  const [btnname,setbtn]=useState('next');
  return (
    <>
      <div className="py-32 px-10 h-screen grid justify-center">
      <h1 className=" text-2xl font-bold mx-auto ">{idx+1-start}) {Ques[idx].question}</h1>
        <div>
          <p
            className={`my-8 ${
              bgclr[0] ? "bg-pink-300" : "bg-white"
            } shadow-lg h-auto hover:bg-pink-300 rounded-2xl px-5`}
            onClick={() => {
              setselect([1, 0, 0, 0]);
              setbg([true, false, false, false]);
            }}
          >
            A) {Ques[idx].A}
          </p>
          <p
            className={`my-8 ${
              bgclr[1] ? "bg-pink-300" : "bg-white"
            } shadow-lg h-auto hover:bg-pink-300 rounded-2xl px-5`}
            onClick={() => {
              setselect([0, 1, 0, 0]);
              setbg([false, true, false, false]);
            }}
          >
            B) {Ques[idx].B}
          </p>
          <p
            className={`my-8 ${
              bgclr[2] ? "bg-pink-300" : "bg-white"
            } shadow-lg h-auto hover:bg-pink-300 rounded-2xl px-5`}
            onClick={() => {
              setselect([0, 0, 1, 0]);
              setbg([false, false, true, false]);
            }}
          >
            C) {Ques[idx].C}
          </p>
          <p
            className={`my-8 ${
              bgclr[3] ? "bg-pink-300" : "bg-white"
            } shadow-lg h-auto hover:bg-pink-300 rounded-2xl px-5`}
            onClick={() => {
              setselect([0, 0, 0, 1]);
              setbg([false, false, false, true]);
            }}
          >
            D) {Ques[idx].D}
          </p>
        </div>
        <div className="flex justify-end">
          <button
            className="rounded-xl w-18 h-10 text-center text-md font-serif font-bold bg-green-200 hover:scale-95 shadow-md"
            onClick={() => {
              if (select.every((e) => e === 0)) {
                message.error("Please select any one of the choice");
              } else {
                dispatch(ansaction(select,idx));
                if(idx<quescount-1)
                {
                  setidx(idx+1);
                  setbg(bg);
                  setselect(choice);
                }
                else
                {
                  nav('/scoredash');
                }
              }
            }
          }
          >
            {(idx<quescount-1)?btnname:"Submit"}
          </button>
        </div>
      </div>
    </>
  );
};
export default Questioncomp;
