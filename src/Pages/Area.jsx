import { useEffect, useState, useRef } from 'react'
import OtherKeyboard from "/src/Components/OtherKeyboard/OtherKeyboard"
import DoubleTypeArea from "/src/Components/DoubleTypeArea/DoubleTypeArea"

export default function Area(){
  const data = {
    km: 0.000001,
    cm: 10000,
    mm: 1000000,
    ha: 0.0001,
    ac: 0.000247105,
    bigha: 0.0003953686105,
    mi: 0.0000003861,
    yd: 1.19599,
    ft: 10.7639,
    in: 1550
  }
  const list = {
    m: 'Square Meter',
    km: 'Square Kilometre',
    cm: 'Square Centimetre',
    mm: 'Square Millimetre',
    ha: 'Hectare',
    ac: 'Acre',
    bigha: 'Bigha',
    mi: 'Square Mile',
    yd: 'Square Yard',
    ft: 'Square Feet',
    in: 'Square Inch'
  }
  const names = [
    'm',
    'km',
    'cm',
    'mm',
    'ha',
    'ac',
    'bigha',
    'mi',
    'yd',
    'ft',
    'in'
  ]
  const [ amount, setAmount ] = useState(['1', '1'])
  const [ unit, setUnit ] = useState([`m`, 'yd'])
  const textareaRef = useRef()

  useEffect(() => {
    setAmount([ 
      amount[0],
      Math.round(
        amount[0] * ( (1 / (unit[0] == 'm' ? 1 : data[`${unit[0]}`])) / (1 / (unit[1] == 'm' ? 1 : data[`${unit[1]}`])) * 10000)) / 10000
    ])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount[0], unit])
  
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
        list={list}
        names={names}
        selected={unit[0]}
        value={amount[0]}
        handleChange={event => {
          if(event.target.value === unit[1]) setUnit([unit[1], unit[0]])
          else setUnit([event.target.value, unit[1]])
        }}
        handleKeyDown={event => setAmount(prev => [handleKeyDown(event.key, prev[0]), amount[1]])}
        textareaRef={textareaRef}
        before=''
        after={unit[0] === 'ha' || unit[0] === 'ac' || unit[0] === 'bigha' ? '' : '²'}
      />
      <DoubleTypeArea 
        inputPlaceholder='0'
        list={list}
        names={names}
        selected={unit[1]}
        value={amount[1]}
        handleChange={event => {
          if(event.target.value === unit[0]) setUnit([unit[1], unit[0]])
          else setUnit([unit[0], event.target.value])
        }}
        before=''
        after={unit[1] === 'ha' || unit[1] === 'ac' || unit[1] === 'bigha' ? '' : '²'}
      />
      <OtherKeyboard handleButtonClick={handleButtonClick} />
    </>
  )
}