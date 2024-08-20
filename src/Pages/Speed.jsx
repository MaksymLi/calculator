import { useEffect, useState, useRef } from 'react'
import OtherKeyboard from "/src/Components/OtherKeyboard/OtherKeyboard"
import DoubleTypeArea from "/src/Components/DoubleTypeArea/DoubleTypeArea"

export default function Speed(){
  const data = {
    km: 3.6,
    mph: 2.237,
    yps: 1.0936,
    ft: 3.2809,
    ips: 39.3701,
    kn: 1.9439
  }
  const list = {
    m: 'Metre per Second',
    km: 'Kilometre per Hour',
    mph: 'Mile per Hour',
    yps: 'Yard per Second',
    ft: 'Feet per Second',
    ips: 'Inch per Second',
    kn: 'Knot'
  }
  const names = [
    'm',
    'km',
    'mph',
    'yps',
    'ft',
    'ips',
    'kn'
  ]
  const [ amount, setAmount ] = useState(['1', '1'])
  const [ unit, setUnit ] = useState([`m`, 'ft'])
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
        after={unit[0] === 'm' || unit[0] === 'ft' ? '/s' : unit[0] === 'km' ? '/h' : ''}
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
        after={unit[1] === 'm' || unit[1] === 'ft' ? '/s' : unit[1] === 'km' ? '/h' : ''}
      />
      <OtherKeyboard handleButtonClick={handleButtonClick} />
    </>
  )
}