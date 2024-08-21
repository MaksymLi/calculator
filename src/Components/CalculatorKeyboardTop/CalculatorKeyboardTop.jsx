import styles from '/src/Components/CalculatorKeyboardTop/CalculatorKeyboardTop.module.css'
import Button from "/src/Components/Button/Button"

export default function CalculatorKeyboardTop({ handleButtonClick }){
  const buttons = [
    {
      id: 'clear',
      content: 'C'
    },
    {
      id: '()',
      content: '( )'
    },
    {
      id: 'backspace',
      content: `${import.meta.env.BASE_URL}/images/backspace.svg`
    }
  ]
  const ulbuttons = buttons.map(button => <Button key={button.id} buttonId={button.id} handleButtonClick={handleButtonClick}>
    {button.id !== 'backspace' ? button.content : <img src={button.content} />}
  </Button>)

  return(
    <section className={styles.section}>
      {ulbuttons}
    </section>
  )
}