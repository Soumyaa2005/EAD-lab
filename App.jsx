import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './Greet';
import Counter from './Components/Counter';
import Timer from './Components/Timer';

function App() {

  return (
      <div>
        <h1>Hello 🤝</h1>
        <Greet />
        <h2>Counter</h2>
        <Counter />
        <h3>Timer</h3>
        <Timer />
      </div>
  );
}

export default App;
