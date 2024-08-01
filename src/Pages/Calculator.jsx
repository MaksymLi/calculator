import { useRef, useState } from 'react'
import CalculatorTypeArea from '/src/Components/CalculatorTypeArea/CalculatorTypeArea'
import CalculatorKeyboard from '/src/Components/CalculatorKeyboard/CalculatorKeyboard'

export default function Calculator(){
  const [textareaValue, setTextareaValue] = useState('')
  const [parenthesesOpen, setParenthesesOpen] = useState(0)
  const textareaRef = useRef()

  function handleKeyDown(e){
    switch(e){
      case '0':
        setTextareaValue(prev => prev + '0')
        break
      case '1':
        setTextareaValue(prev => prev + '1')
        break
      case '2':
        setTextareaValue(prev => prev + '2')
        break
      case '3':
        setTextareaValue(prev => prev + '3')
        break
      case '4':
        setTextareaValue(prev => prev + '4')
        break
      case '5':
        setTextareaValue(prev => prev + '5')
        break
      case '6':
        setTextareaValue(prev => prev + '6')
        break
      case '7':
        setTextareaValue(prev => prev + '7')
        break
      case '8':
        setTextareaValue(prev => prev + '8')
        break
      case '9':
        setTextareaValue(prev => prev + '9')
        break
      case '.':
        setTextareaValue(prev => prev + '.')
        break
      case '(':
        setTextareaValue(prev => {
          if(!isNaN(textareaValue[prev.length - 1]) || textareaValue[prev.length - 1] == ')'){
            setParenthesesOpen(prev => prev + 1)
            return prev + '×('
          }
          else{
            setParenthesesOpen(prev => prev + 1)
            return prev + '('
          }
        })       
        break
      case ')':
        setParenthesesOpen(prev => prev - 2)
        setTextareaValue(prev => prev + ')')
        break
      case '+':
        setTextareaValue(prev => prev + '+')
        break
      case '-':
        setTextareaValue(prev => prev + '-')
        break
      case '*':
        setTextareaValue(prev => prev + '×')
        break
      case '/':
        setTextareaValue(prev => prev + '÷')
        break
      case 'Enter':
        if(textareaValue.length != 0) setTextareaValue(prev => evaluateExpression(prev.replaceAll('÷', '/').replaceAll('×', '*')))
        break
      case 'Backspace':
        setTextareaValue(prev => {
          if(textareaValue[prev.length - 1] == ')'){
            setParenthesesOpen(prev => prev + 1)
            return prev.toString().slice(0, prev.length - 1)
          }
          else if(textareaValue[prev.length - 1] == '('){
            setParenthesesOpen(prev => prev - 1)
            return prev.toString().slice(0, prev.length - 1)
          }
          else{
            return prev.toString().slice(0, prev.length - 1)
          }
        })
        break
    }
  }

  function handleButtonClick(e){
    switch(e){
      case '0':
        setTextareaValue(prev => prev + '0')
        break
      case '00':
        setTextareaValue(prev => prev + '00')
        break
      case '1':
        setTextareaValue(prev => prev + '1')
        break
      case '2':
        setTextareaValue(prev => prev + '2')
        break
      case '3':
        setTextareaValue(prev => prev + '3')
        break
      case '4':
        setTextareaValue(prev => prev + '4')
        break
      case '5':
        setTextareaValue(prev => prev + '5')
        break
      case '6':
        setTextareaValue(prev => prev + '6')
        break
      case '7':
        setTextareaValue(prev => prev + '7')
        break
      case '8':
        setTextareaValue(prev => prev + '8')
        break
      case '9':
        setTextareaValue(prev => prev + '9')
        break
      case '.':
        setTextareaValue(prev => prev + '.')
        break
      case '()':
        setTextareaValue(prev => {
          if(parenthesesOpen > 0){
            if(!isNaN(textareaValue[prev.length - 1]) || textareaValue[prev.length - 1] == ')'){
              setParenthesesOpen(prev => prev - 1)
              console.log('open number or )')
              return prev + ')'
            }else{
              setParenthesesOpen(prev => prev + 1)
              console.log('open sign')
              return prev + '('
            }
          }else{
            if(!isNaN(textareaValue[prev.length - 1])){
              setParenthesesOpen(prev => prev + 1)
              console.log('closed number')
              return prev + '×('
            }else if(textareaValue[prev.length - 1] == ')'){
              setParenthesesOpen(prev => prev + 1)
              console.log('closed )')
              return prev + '×('
            }else{
              setParenthesesOpen(prev => prev + 1)
              console.log('closed sign')
              return prev + '('
            }
          }
        })
        break
      case '+':
        setTextareaValue(prev => prev + '+')
        break
      case '-':
        setTextareaValue(prev => prev + '-')
        break
      case '*':
        setTextareaValue(prev => prev + '×')
        break
      case '/':
        setTextareaValue(prev => prev + '÷')
        break
      case '=':
        if(textareaValue.length != 0) setTextareaValue(prev => evaluateExpression(prev.replaceAll('÷', '/').replaceAll('×', '*')))
        break
      case 'backspace':
        setTextareaValue(prev => {
          if(textareaValue[prev.length - 1] == ')'){
            setParenthesesOpen(prev => prev + 1)
            return prev.toString().slice(0, prev.length - 1)
          }
          else if(textareaValue[prev.length - 1] == '('){
            setParenthesesOpen(prev => prev - 1)
            return prev.toString().slice(0, prev.length - 1)
          }
          else{
            return prev.toString().slice(0, prev.length - 1)
          }
        })
        break
      case 'clear':
        setParenthesesOpen(0)
        setTextareaValue('')
        break
    }
    textareaRef.current.focus()
  }

  function evaluateExpression(expression){
    try{
      let func = new Function("return " + expression)
      return func() + ''
    }
    catch{
      return errorFunction()
    }
    finally{
      textareaRef.current.focus()
    }
  }
  
  function errorFunction(){
    const timeoutSec = 75

    setTextareaValue('E')

    setTimeout(() => {
      setTextareaValue('Er')
    }, timeoutSec)

    setTimeout(() => {
      setTextareaValue('Err')
    }, timeoutSec*2)

    setTimeout(() => {
      setTextareaValue('Erro')
    }, timeoutSec*3)

    setTimeout(() => {
      setTextareaValue('Error')
    }, timeoutSec*4)

    setTimeout(() => {
      setTextareaValue('Error!')
    }, timeoutSec*5)

    setTimeout(() => {
      setTextareaValue('Error!!')
    }, timeoutSec*6)

    setTimeout(() => {
      setTextareaValue('Error!!!')
    }, timeoutSec*7)

    setTimeout(() => {
      setTextareaValue('Error!!')
    }, timeoutSec*9)

    setTimeout(() => {
      setTextareaValue('Error!')
    }, timeoutSec*10)

    setTimeout(() => {
      setTextareaValue('Error')
    }, timeoutSec*11)

    setTimeout(() => {
      setTextareaValue('Erro')
    }, timeoutSec*12)

    setTimeout(() => {
      setTextareaValue('Err')
    }, timeoutSec*13)

    setTimeout(() => {
      setTextareaValue('Er')
    }, timeoutSec*14)

    setTimeout(() => {
      setTextareaValue('E')
    }, timeoutSec*15)

    setTimeout(() => {
      setTextareaValue('')
    }, timeoutSec*16)
    textareaRef.current.focus()
  }
  return(
    <>
      <CalculatorTypeArea textareaValue={textareaValue} handleKeyDown={handleKeyDown} textareaRef={textareaRef} />
      <CalculatorKeyboard handleButtonClick={handleButtonClick} />  
    </>
  )
}