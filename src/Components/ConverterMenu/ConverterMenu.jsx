import { Link } from 'react-router-dom' 
import styles from '/src/Components/ConverterMenu/ConverterMenu.module.css'
import Button from '/src/Components/Button/Button'

export default function ConverterMenu(){
  const buttons = [
    {
      id: 'Length',
      content: '/images/length.svg'
    },
    {
      id: 'Area',
      content: '/images/area.svg'
    },
    {
      id: 'Volume',
      content: '/images/volume.svg'
    },
    {
      id: 'Speed',
      content: '/images/speed.svg'
    },
    {
      id: 'Weight',
      content: '/images/weight.svg'
    },
    {
      id: 'Data',
      content: '/images/data.svg'
    },
    {
      id: 'Pressure',
      content: '/images/pressure.svg'
    }
  ]

  function handleButtonClick(){}

  const ulButtons = buttons.map(button => <Link key={button.id} to={`/converter/${button.id.toLowerCase()}`}><Button buttonId={button.id} handleButtonClick={handleButtonClick}><img src={button.content} /></Button><p>{button.id}</p></Link>)
  
  return(
    <section className={styles.section}>
      {ulButtons}
    </section>
  )
}