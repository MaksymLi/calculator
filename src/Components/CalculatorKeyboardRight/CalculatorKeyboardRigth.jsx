import styles from '/src/Components/CalculatorKeyboardRight/CalculatorKeyboardRight.module.css'
import Button from "/src/Components/Button/Button"

export default function CalculatorKeyboardRight({ handleButtonClick }){
  const buttons = [
    {
      id: '/',
      content: '/images/divide.svg'
    },
    {
      id: '*',
      content: '/images/times.svg'
    },
    {
      id: '-',
      content: '/images/minus.svg'
    },
    {
      id: '+',
      content: '/images/plus.svg'
    },
    {
      id: '=',
      content: '/images/equals.svg'
    }
  ]
  const ulbuttons = buttons.map(button => <Button key={button.id} buttonId={button.id} handleButtonClick={handleButtonClick}><img src={button.content} /></Button>)

  return(
    <section className={styles.section}>
      {ulbuttons}
    </section>
  )
}