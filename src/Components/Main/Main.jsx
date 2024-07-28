import TypeArea from "/src/Components/CalculatorTypeArea/CalculatorTypeArea";
import Header from "/src/Components/Header/Header";
import styles from '/src/Components/Main/Main.module.css'

export default function Main(){
  return (
    <section className={styles.section}>
      <Header />
      <TypeArea />
    </section>
  )
}