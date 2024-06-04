export const ansaction=(choice:number[],index:number)=>{

    return{
        type:"QUES",
        payload:{choice,index},
    };

}
export const quescountaction=(count:number)=>{

    return{
        type:"COUNT",
        payload:{count},
    };

}