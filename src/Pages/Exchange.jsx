import { useEffect, useState, useRef } from 'react'
import OtherKeyboard from "/src/Components/OtherKeyboard/OtherKeyboard"
import DoubleTypeArea from "/src/Components/DoubleTypeArea/DoubleTypeArea"
import DataAutor from "/src/Components/DataAutor/DataAutor"

export default function Exchange(){
  const host = 'api.frankfurter.app'
  const [ data, setData ] = useState()
  const [ currenciesList, setCurrenciesList ] = useState('')
  const [ currenciesNames, setCurrenciesNames ] = useState('')  
  const [ amount, setAmount ] = useState(['1', '1'])
  const [ currency, setCurrency ] = useState(['USD', 'PLN'])
  const textareaRef = useRef()

  useEffect(() => {
    textareaRef.current.focus()
    fetch(`https://${host}/currencies`)
      .then(resp => resp.json())
      .then(data => {
        setCurrenciesList(data)
        setCurrenciesNames(Object.getOwnPropertyNames(data))
      })
    fetch(`https://${host}/latest`)
      .then(resp => resp.json())
      .then(result => {
        setData(result)
        setAmount([ 
          amount[0], 
          Math.round(
            amount[0] * ( (1 / (currency[0] == 'EUR' ? 1 : result.rates[`${currency[0]}`])) / (1 / (currency[1] == 'EUR' ? 1 : result.rates[`${currency[1]}`])) * 1000)) / 1000
        ])
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (data != undefined) setAmount([ 
      amount[0], 
      Math.round(
        amount[0] * ( (1 / (currency[0] == 'EUR' ? 1 : data.rates[`${currency[0]}`])) / (1 / (currency[1] == 'EUR' ? 1 : data.rates[`${currency[1]}`])) * 1000)) / 1000
    ])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount[0], currency])
  
  function handleKeyDown(e, prev){
    switch(e){
      case '0':
        return(prev + '0')
      case '1':
        return(prev + '1')
      case '2':
        return(prev + '2')
      case '3':
        return(prev + '3')
      case '4':
        return(prev + '4')
      case '5':
        return(prev + '5')
      case '6':
        return(prev + '6')
      case '7':
        return(prev + '7')
      case '8':
        return(prev + '8')
      case '9':
        return(prev + '9')
      case '.':
        return(prev + '.')        
      case 'Backspace':
        return(prev.toString().slice(0, prev.length - 1))
      default:
        return(prev + '')
    }
  }
  function handleButtonClick(buttonId){
    function handleClick(e, prev){
      switch(e){
        case '0':
          return(prev + '0')
        case '00':
          return(prev + '00')
        case '1':
          return(prev + '1')
        case '2':
          return(prev + '2')
        case '3':
          return(prev + '3')
        case '4':
          return(prev + '4')
        case '5':
          return(prev + '5')
        case '6':
          return(prev + '6')
        case '7':
          return(prev + '7')
        case '8':
          return(prev + '8')
        case '9':
          return(prev + '9')
        case '.':
          return(prev + '.')        
        case 'backspace':
          return(prev.toString().slice(0, prev.length - 1))
        case 'clear':
          return('')
        default:
          return(prev + '')
      }
    }
    setAmount(prev => [handleClick(buttonId, prev[0]), amount[1]])
    textareaRef.current.focus()
  }

  return(
    <>
      <DoubleTypeArea 
        inputPlaceholder='0'
        currenciesList={currenciesList}
        currenciesNames={currenciesNames}
        selected={currency[0]}
        value={amount[0]}
        handleChange={event => {
          textareaRef.current.focus()
          if(event.target.value === currency[1]) setCurrency([currency[1], currency[0]])
          else setCurrency([event.target.value, currency[1]])
        }}
        handleKeyDown={event => setAmount(prev => [handleKeyDown(event.key, prev[0]), amount[1]])}
        textareaRef={textareaRef}
      />
      <DoubleTypeArea 
        inputPlaceholder='0'
        currenciesList={currenciesList}
        currenciesNames={currenciesNames}
        selected={currency[1]}
        value={amount[1]}
        handleChange={event => {
          textareaRef.current.focus()
          if(event.target.value === currency[0]) setCurrency([currency[1], currency[0]])
          else setCurrency([currency[0], event.target.value])
        }}
      />
      <DataAutor host={host}/>
      <OtherKeyboard handleButtonClick={handleButtonClick} />
    </>
  )
}