import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { quescountaction } from "./redux/action";
const Home:React.FC=()=>{
    const nav=useNavigate();
    const dispatch=useDispatch();
    return(
    <>
    <div className=" bg-gradient-to-bl from-rose-700 to-purple-800  h-full min-h-screen overflow-hidden grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">

               <div className="animate-custom-pulse duration-1000 ease-out text-md justify-start mr-auto">
                <img src="disney.png" alt="icon" />
               </div> 
               <div className=" flex-col">
                  <div className=" flex justify-center shadow-2xl bg-gradient-to-tr  rounded-full h-20 mt-40 w-60 mx-auto hover:bg-gradient-to-bl from-green-400 to-fuchsia-300 bg-transparent">
                  <div className="animate-spin duration-1000 ease-out text-md bg-transparent mt-5"><img src="https://img.icons8.com/?size=100&id=x2R5bx7VULto&format=png&color=000000"  width={50} height={50} alt="icon" /></div> 
                  <button className=" text-3xl font-bold text-neutral-50 " onClick={()=>{
                    dispatch(quescountaction(10));
                    nav('/Quizz',{state:{starttimer:true,quescount:10,start:0,limit:120,level:"EASY"}})}}>EASY</button>
                  <div className=" animate-spin duration-1000 ease-out text-md bg-transparent mt-5"><img src="https://img.icons8.com/?size=100&id=6DXM8bs2tFSU&format=png&color=000000"  width={50} height={50} alt="icon" /></div> 
                  </div>

                  <div className=" flex justify-center shadow-2xl bg-gradient-to-tr  rounded-full h-20 mt-10 w-60 mx-auto hover:bg-gradient-to-bl from-green-400 to-fuchsia-300 bg-transparent">
                  <div className="animate-spin duration-1000 ease-out text-md bg-transparent mt-5"><img src="https://img.icons8.com/?size=100&id=x2R5bx7VULto&format=png&color=000000"  width={50} height={50} alt="icon" /></div> 
                  <button className=" text-3xl font-bold text-neutral-50 " onClick={()=>{
                    dispatch(quescountaction(60));
                    nav('/Quizz',{state:{starttimer:true,quescount:60,start:10,limit:300,level:"MEDIUM"}})}}>MEDIUM</button>
                  <div className=" animate-spin duration-1000 ease-out text-md bg-transparent mt-5"><img src="https://img.icons8.com/?size=100&id=6DXM8bs2tFSU&format=png&color=000000"  width={50} height={50} alt="icon" /></div> 
                  </div>

                  <div className=" flex justify-center shadow-2xl bg-gradient-to-tr  rounded-full h-20 mt-10 w-60 mx-auto hover:bg-gradient-to-bl from-green-400 to-fuchsia-300 bg-transparent">
                  <div className="animate-spin duration-1000 ease-out text-md bg-transparent mt-5"><img src="https://img.icons8.com/?size=100&id=x2R5bx7VULto&format=png&color=000000"  width={50} height={50} alt="icon" /></div> 
                  <button className=" text-3xl font-bold text-neutral-50 " onClick={()=>{
                    dispatch(quescountaction(160));
                    nav('/Quizz',{state:{starttimer:true,quescount:160,start:60,limit:600,level:"HARD"}})}}>HARD</button>
                  <div className=" animate-spin duration-1000 ease-out text-md bg-transparent mt-5"><img src="https://img.icons8.com/?size=100&id=6DXM8bs2tFSU&format=png&color=000000"  width={50} height={50} alt="icon" /></div> 
                  </div>
               </div>
               <div className="ml-auto mt-auto">
               <img src="bgimg.png" className="pt-20" alt="icon" />
               </div>

      </div>
    </>)
}
export default Home;
