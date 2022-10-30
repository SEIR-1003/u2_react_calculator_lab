import { useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';


const toLocalString = (num) =>
  String(num)

const removeSpaces = (num) => num.toString()

const btnValues = [
  ['C', '+-', '%','/'],
  [7,8,9,'X'],
  [4,5,6,'-'],
  [1,2,3,'+'],
  [0,'.','='],
]


function App() {

  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  })

  const numClickHandler = (event) => {
    event.preventDefault()
    const value = event.target.innerHTML

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === '0'
          ? '0'
          : removeSpaces(calc.num) % 1 === 0
          ? toLocalString(Number(removeSpaces(calc.num) + value))
          : toLocalString(calc.num + value),
        res: !calc.sign ? 0 : calc.res
      })}}

  
  const decimalClickHandler = (event) => {
    event.preventDefault()
    const value= event.target.innerHTML

    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') 
            ? calc.num + value 
            : calc.num,
    })
  }


  const signClickHandler = (event) => {
    event.preventDefault()
    const value= event.target.innerHTML

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    })
  }

  const equalClickHandler = (event) => {
    if (calc.sign && calc.num) {
      const math = (a,b, sign) => 
        sign === '+'
        ? a+b
        : sign === '-'
        ? a-b
        : sign === 'X'
        ? a*b
        : a/b

        setCalc({
          ...calc,
          res:
            calc.num === '0' && calc.sign === '/'
            ? "Can't dvivde with 0"
            : toLocalString( 
                math(
                  Number(removeSpaces(calc.res)), 
                  Number(removeSpaces(calc.num)), 
                  calc.sign)),
          sign: '',
          num: 0,
        })}}


  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1): 0,
      sign: "",
    })
  }

  
  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0

    setCalc({
      ...calc,
      num: (num /= Math.pow(100,1)),
      res: (res /= Math.pow(100, 1)),
      sign: ''
    })
  }


  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: '',
      num: 0,
      res: 0,
    })
  }

  

    return (
      <Wrapper>
        <Screen value={calc.num ? calc.num : calc.res} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
              return(
                <Button
                  key={i}
                  className={btn === '=' ? 'equals' : ''}
                  value={btn}
                  onClick={
                    btn === 'C'
                      ? resetClickHandler
                      : btn === '+-'
                      ? invertClickHandler
                      : btn === '%'
                      ? percentClickHandler
                      : btn === '='
                      ? equalClickHandler
                      : btn === '/' || btn === 'X' || btn ==='+' || btn === '-'
                      ? signClickHandler
                      : btn === '.'
                      ? decimalClickHandler
                      : numClickHandler
                }/>
              )
            })
          }
          
        </ButtonBox>
      </Wrapper>
    );
}

export default App;
