import React, { useState } from "react"
import ReactDOM from "react-dom"
import "src\index.css"

function Counter() {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }
    return <div>
        <h1>{counter}</h1>
        <button onClick={increment}></button>
    </div>

}
ReactDOM.render(<Counter />, document.getElementById("root"))


