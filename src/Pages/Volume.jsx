import { useEffect, useState, useRef } from 'react'
import OtherKeyboard from "/src/Components/OtherKeyboard/OtherKeyboard"
import DoubleTypeArea from "/src/Components/DoubleTypeArea/DoubleTypeArea"

export default function Volume(){
  const data = {
    cm: 1000000,
    mi: 0.000000000239913,
    ft: 35.3147,
    in: 61023.7,
    bbls: 6.28981,
    gal: 264.172,
    pt: 1759.75,
    qt: 1056.69,
    bsh: 28.377593258402,
    l: 1000,
    oz: 33814
  }
  const list = {
    m: 'Cubic Meter',
    cm: 'Cubic Centimetre',
    mi: 'Cubic Mile',
    ft: 'Cubic Feet',
    in: 'Cubic Inch',
    bbls: 'Barrel',
    gal: 'Gallon',
    pt: 'Pint',
    qt: 'Quart',
    bsh: 'Bushel',
    l: 'Liter',
    oz: 'Ounce'
  }
  const names = [
    'm',
    'cm',
    'mi',
    'ft',
    'in',
    'bbls',
    'gal',
    'pt',
    'qt',
    'bsh',
    'l',
    'oz'
  ]
  const [ amount, setAmount ] = useState(['1', '1'])
  const [ unit, setUnit ] = useState([`m`, 'l'])
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
        after={unit[0] === 'cm' || unit[0] === 'm' || unit[0] === 'in' || unit[0] === 'ft' || unit[0] === 'mi' ? '³' : ''}
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
        after={unit[1] === 'cm' || unit[1] === 'm' || unit[1] === 'in' || unit[1] === 'ft' || unit[1] === 'mi' ? '³' : ''}
      />
      <OtherKeyboard handleButtonClick={handleButtonClick} />
    </>
  )
}