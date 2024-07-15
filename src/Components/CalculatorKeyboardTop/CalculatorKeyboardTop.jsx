import styles from '/src/Components/CalculatorKeyboardTop/CalculatorKeyboardTop.module.css'
import Button from "/src/Components/Button/Button"

export default function CalculatorKeyboardTop(){
  const topButtons = [
    {
      id: 'clear',
      content: 'C'
    },
    {
      id: 'percent',
      content: '%'
    },
    {
      id: 'backspace',
      content: '/public/images/backspace.svg'
    }
  ]
  const tButtons = topButtons.map(topButton => <Button key={topButton.id}>
    {topButton.id !== 'backspace' ? topButton.content : <img src='/images/backspace.svg' />}
  </Button>)

  return(
    <section className={styles.section}>
      {tButtons}
    </section>
  )
}