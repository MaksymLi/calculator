import styles from '/src/Components/CalculatorKeyboardRight/CalculatorKeyboardRight.module.css'
import Button from "/src/Components/Button/Button"

export default function CalculatorKeyboardRight(){
  const rightButtons = [
    {
      id: 'divide',
      content: '/images/divide.svg'
    },
    {
      id: 'times',
      content: '/images/times.svg'
    },
    {
      id: 'minus',
      content: '/images/minus.svg'
    },
    {
      id: 'plus',
      content: '/images/plus.svg'
    },
    {
      id: 'equals',
      content: '/images/equals.svg'
    }
  ]
  const rButtons = rightButtons.map(rightButton => <Button key={rightButton.id}><img src={rightButton.content} /></Button>)

  return(
    <section className={styles.section}>
      {rButtons}
    </section>
  )
}