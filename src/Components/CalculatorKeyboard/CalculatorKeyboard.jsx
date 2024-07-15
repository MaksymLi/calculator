import styles from '/src/Components/CalculatorKeyboard/CalculatorKeyboard.module.css'
import CalculatorKeyboardRight from "/src/Components/CalculatorKeyboardRight/CalculatorKeyboardRigth";
import CalculatorKeyboardTop from "/src/Components/CalculatorKeyboardTop/CalculatorKeyboardTop";
import MainKeyboard from "/src/Components/MainKeyboard/MainKeyboard";

export default function CalculatorKeyboard() {

  return (
    <>
      <section className={styles.section}>
        <CalculatorKeyboardTop />
        <MainKeyboard />
        <CalculatorKeyboardRight />
      </section>
    </>
  )
}


