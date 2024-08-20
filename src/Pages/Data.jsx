import { useEffect, useState, useRef } from 'react'
import OtherKeyboard from "/src/Components/OtherKeyboard/OtherKeyboard"
import DoubleTypeArea from "/src/Components/DoubleTypeArea/DoubleTypeArea"

export default function Data(){
  const data = {
    kbit: 0.001,
    Mbit: 0.000001,
    Gbit: 0.000000001,
    Tbit: 0.000000000001,
    Pbit: 0.000000000000001,
    B: 0.125,
    kB: 0.000125,
    MB: 0.000000125,
    GB: 0.000000000125,
    TB: 0.000000000000125,
    PB: 0.000000000000000125
  }
  const list = {
    b: 'Bit',
    kbit: 'Kilobit',
    Mbit: 'Megabit',
    Gbit: 'Gigabit',
    Tbit: 'Terabit',
    Pbit: 'Petabit',
    B: 'Byte',
    kB: 'Kilobyte',
    MB: 'Megabyte',
    GB: 'Gigabyte',
    TB: 'Terabyte',
    PB: 'Petabyte'
  }
  const names = [
    'b',
    'kbit',
    'Mbit',
    'Gbit',
    'Tbit',
    'Pbit',
    'B',
    'kB',
    'MB',
    'GB',
    'TB',
    'PB'
  ]
  const [ amount, setAmount ] = useState(['1', '1'])
  const [ unit, setUnit ] = useState([`b`, 'B'])
  const textareaRef = useRef()

  useEffect(() => {
    setAmount([ 
      amount[0],
      amount[0] * ( (1 / (unit[0] == 'b' ? 1 : data[`${unit[0]}`])) / (1 / (unit[1] == 'b' ? 1 : data[`${unit[1]}`])))
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
        after=''
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
        after=''
      />
      <OtherKeyboard handleButtonClick={handleButtonClick} />
    </>
  )
}