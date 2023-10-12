import logo from './logo.svg';
import './App.css';
import Labs from "./Labs";
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';
import { HashRouter } from 'react-router-dom';
import { Routes, Route,  Navigate } from 'react-router';


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

        <Route path='/' element={<Navigate to="/Labs/"/>}/>
        <Route path='/Labs/*' element={ <Labs/>}/>
        <Route path='/hello' element={<HelloWorld/>}/>
        <Route path='/kanbas/*' element={<Kanbas/>}/>

      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
