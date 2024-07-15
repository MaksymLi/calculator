import styles from '/src/Components/MainKeyboard/MainKeyboard.module.css'
import Button from "/src/Components/Button/Button"

export default function MainKeyboard(){
  const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, '00', 0, '.']
  const mButtons = numberButtons.map(numberButton => <Button key={numberButton}>{numberButton}</Button>)

  return(
    <section className={styles.section}>
      {mButtons}
    </section>
  )
}