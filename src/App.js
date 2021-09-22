import React from 'react'
import './App.css'
import taylorState from './taylorState.js'



export default function App() {
    const [upCount, downCount, count, quote] = taylorState(1)
    // console.log({img})
  
    return (
        <div className="App">
            <h4>Count: {count}</h4>
            <button onClick={upCount}>Increase Count</button>
            <button onClick={downCount}>Decrease Count</button>
            {/* <h2>{quote}</h2> */}
            <img src={quote} alt="taylor" width="900" height="400"/>
        </div>
    )
}