import { useEffect, useState, useRef } from 'react'
import OtherKeyboard from "/src/Components/OtherKeyboard/OtherKeyboard"
import DoubleTypeArea from "/src/Components/DoubleTypeArea/DoubleTypeArea"

export default function Weight(){
  const data = {
    kg: 0.001,
    mg: 1000,
    t: 0.000001,
    st: 0.000157473,
    lb: 0.00220462,
    oz: 0.035274,
    ct: 5
  }
  const list = {
    g: 'Gram',
    kg: 'Kilogram',
    mg: 'Milligram',
    t: 'Tonne',
    st: 'Stone',
    lb: 'Pound',
    oz: 'Ounce',
    ct: 'Carat'
  }
  const names = [
    'g',
    'kg',
    'mg',
    't',
    'st',
    'lb',
    'oz',
    'ct'
  ]
  const [ amount, setAmount ] = useState(['1', '1'])
  const [ unit, setUnit ] = useState([`g`, 'oz'])
  const textareaRef = useRef()

  useEffect(() => {
    setAmount([ 
      amount[0],
        amount[0] * ( (1 / (unit[0] == 'g' ? 1 : data[`${unit[0]}`])) / (1 / (unit[1] == 'g' ? 1 : data[`${unit[1]}`])))
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