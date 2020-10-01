import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Display from './component/Display';

function App() {
  const [counter, setCounter] = useState(0);
  const incrementClick = (incrementValue)=> setCounter(counter+incrementValue);
  return (
    <div>
  <Button onClickFunction = {incrementClick} increment={1}/>
  <Button onClickFunction = {incrementClick} increment={5}/>
  <Button onClickFunction = {incrementClick} increment={10}/>
  <Button onClickFunction = {incrementClick} increment={20}/>
  <Button onClickFunction = {incrementClick} increment={100}/>
  <Display message={counter} />
      </div>
  );
  // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
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
  // );
}

export default App;
