import { message } from "antd";
import Question from "../questions.json";
import { combineReducers, isAction } from "redux";
export interface answer{
    score:number[],
}
export interface QuizzesState {
    countredux: {
      count: number;
    };
    ansredux: {
        score: number[];
      };
  }
const initialscore={
    score: [...Array(30)].map(() => 0),
};
export interface quescountinterface{
    count:number,
}
const initcount={
    count:1,
}
export const ansreducer=(state=initialscore,action: { type: any; payload:{choice:number[],index:number}})=>{
    switch(action.type)
    {
        case 'QUES':
            var idx;
            var ans;
            const uscore=[...state.score];
            action.payload.choice.map((e,index)=>{
                if(e===1)
                {
                        idx=index;
                }
                return null;
            })
            if(idx===0) ans='A';
            else if(idx===1) ans='B';
            else if(idx===2) ans='C';
            else if(idx===3) ans='D';
            if(ans===Question[action.payload.index].answer)
            {
                uscore[action.payload.index]=1;
                message.success("passed");
            }
            else{
                uscore[action.payload.index]=0;
            }
            return{
                ...state,
                score:uscore
            };
        default:
            return state;
    }
}
export const countreducer=(state=initcount,action:{type:any;payload:{count:number}})=>{
    switch(action.type)
    {
        case 'COUNT':
            let ucount=state.count;
            ucount=action.payload.count;
            return{
                ...state,
                count:ucount
            }
        default:
            return state;
    }
}
