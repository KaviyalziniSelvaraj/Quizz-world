import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Quizz from './Quizz';
import Scoreboard from './Scoreboard';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/Quizz' element={<Quizz/>}></Route>
   <Route path='/scoredash' element={<Scoreboard/>}></Route>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
