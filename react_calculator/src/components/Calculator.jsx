import { useState } from "react"

const Calculator = () => {

    
    
    const [result, setResult] = useState("")

    const clear = () => {
        setResult("")
    }

    const calculate = () => {
        setResult(eval(result))
    }

    return (

        <div className="calculator">

            <div className="calc-container">

                <div className="result">

                    <input className="resultBar" value={result}/>

                </div>

                <div className="buttons">

                    <button className="b1" value="A/C" onClick={(e) => clear()}>A/C</button>
                    <button className="b2" value="(" onClick={(e) => setResult(result + e.target.value)}>(</button>
                    <button className="b3" value=")" onClick={(e) => setResult(result + e.target.value)}>)</button>
                    <button className="b4" value="/" onClick={(e) => setResult(result + e.target.value)}>/</button>
                    <button className="b5" value="7" onClick={(e) => setResult(result + e.target.value)}>7</button>
                    <button className="b6" value="8" onClick={(e) => setResult(result + e.target.value)}>8</button>
                    <button className="b7" value="9" onClick={(e) => setResult(result + e.target.value)}>9</button>
                    <button className="b8" value="*" onClick={(e) => setResult(result + e.target.value)}>X</button>
                    <button className="b9" value="4" onClick={(e) => setResult(result + e.target.value)}>4</button>
                    <button className="b10" value="5" onClick={(e) => setResult(result + e.target.value)}>5</button>
                    <button className="b11" value="6" onClick={(e) => setResult(result + e.target.value)}>6</button>
                    <button className="b12" value="-" onClick={(e) => setResult(result + e.target.value)}>-</button>
                    <button className="b13" value="1" onClick={(e) => setResult(result + e.target.value)}>1</button>
                    <button className="b14" value="2" onClick={(e) => setResult(result + e.target.value)}>2</button>
                    <button className="b15" value="3" onClick={(e) => setResult(result + e.target.value)}>3</button>
                    <button className="b16" value="+" onClick={(e) => setResult(result + e.target.value)}>+</button>
                    <button className="b17" value="0" onClick={(e) => setResult(result + e.target.value)}>0</button>
                    <button className="b18" value="" onClick={(e) => setResult(result + e.target.value)}></button>
                    <button className="b19" value="." onClick={(e) => setResult(result + e.target.value)}>.</button>
                    <button className="b20" value="=" onClick={() => calculate()}>=</button>
                    

                </div>
                
            </div>                  

        </div>
    )
}

export default Calculator