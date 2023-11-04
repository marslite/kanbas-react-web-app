import logo from './logo.svg';
import './App.css';
import Labs from "./Labs";
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';
import { HashRouter } from 'react-router-dom';
import { Routes, Route,  Navigate } from 'react-router';
// import Add from './Labs/a3/Add';
import PathParamters from './Labs/a3/PathParameters';
import Redo from './Labs/test/RedoExam';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <h3>Hello world</h3>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <HashRouter>
    <div>
      <Routes>

        {/* <Route path='/' element={<Navigate to="/Labs/"/>}/> */}
        <Route index element={ <Labs/>}/>
        {/* //Just for testing the midterm answers */}
        <Route path='/redo' element={<Redo />}/>
        <Route path='/hello' element={<HelloWorld/>}/>
        <Route path='/kanbas/*' element={<Kanbas/>}/>
        <Route path='/Labs/*' element={<Labs />}/>




      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
