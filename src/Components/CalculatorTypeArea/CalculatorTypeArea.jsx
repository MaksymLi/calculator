import { useState } from 'react'
import styles from '/src/Components/CalculatorTypeArea/CalculatorTypeArea.module.css'

export default function CalculatorTypeArea (){
  const [textareaValue, setTextareaValue] = useState('')

  function handleKeyDown(e){
    console.log(e)
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
      case '%':
        setTextareaValue(prev => prev + '%')
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
        setTextareaValue(prev => prev.toString().slice(0, prev.length - 1))
        break
    }
  }

  function evaluateExpression(expression){
    try{
      let func = new Function("return " + expression)
      return func() + ''
    }
    catch{
      return errorFunction()
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
  }

  return(
    <section className={styles.section}>
      <textarea 
        placeholder='Type here...'
        className={styles.textarea} 
        value={textareaValue}
        onKeyDown={event => handleKeyDown(event.key)}
        readOnly
      />
    </section>
  )
}