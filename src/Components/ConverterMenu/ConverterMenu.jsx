import { Link } from 'react-router-dom' 
import styles from '/src/Components/ConverterMenu/ConverterMenu.module.css'
import Button from '/src/Components/Button/Button'

export default function ConverterMenu(){
  const buttons = [
    {
      id: 'Length',
      content: `${import.meta.env.BASE_URL}/images/length.svg`
    },
    {
      id: 'Area',
      content: `${import.meta.env.BASE_URL}/images/area.svg`
    },
    {
      id: 'Volume',
      content: `${import.meta.env.BASE_URL}/images/volume.svg`
    },
    {
      id: 'Speed',
      content: `${import.meta.env.BASE_URL}/images/speed.svg`
    },
    {
      id: 'Weight',
      content: `${import.meta.env.BASE_URL}/images/weight.svg`
    },
    {
      id: 'Data',
      content: `${import.meta.env.BASE_URL}/images/data.svg`
    },
    {
      id: 'Pressure',
      content: `${import.meta.env.BASE_URL}/images/pressure.svg`
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