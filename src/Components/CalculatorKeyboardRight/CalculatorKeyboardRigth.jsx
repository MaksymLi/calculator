import styles from '/src/Components/CalculatorKeyboardRight/CalculatorKeyboardRight.module.css'
import Button from "/src/Components/Button/Button"

export default function CalculatorKeyboardRight({ handleButtonClick }){
  const buttons = [
    {
      id: '/',
      content: `${import.meta.env.BASE_URL}/images/divide.svg`
    },
    {
      id: '*',
      content: `${import.meta.env.BASE_URL}/images/times.svg`
    },
    {
      id: '-',
      content: `${import.meta.env.BASE_URL}/images/minus.svg`
    },
    {
      id: '+',
      content: `${import.meta.env.BASE_URL}/images/plus.svg`
    },
    {
      id: '=',
      content: `${import.meta.env.BASE_URL}/images/equals.svg`
    }
  ]
  const ulbuttons = buttons.map(button => <Button key={button.id} buttonId={button.id} handleButtonClick={handleButtonClick}><img src={button.content} /></Button>)

  return(
    <section className={styles.section}>
      {ulbuttons}
    </section>
  )
}