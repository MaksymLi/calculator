import MainKeyboard from '/src/Components/MainKeyboard/MainKeyboard'
import OtherKeyboardRight from "/src/Components/OtherKeyboardRigth/OtherKeyboardRigth"
import styles from '/src/Components/OtherKeyboard/OtherKeyboard.module.css'

export default function OtherKeyboard({ handleButtonClick }){
  return(
    <>
      <section className={styles.section}>
        <MainKeyboard handleButtonClick={handleButtonClick} />
        <OtherKeyboardRight handleButtonClick={handleButtonClick} />
      </section>
    </>
  )
}