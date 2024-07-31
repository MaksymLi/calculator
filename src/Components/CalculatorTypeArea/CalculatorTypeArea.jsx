import styles from '/src/Components/CalculatorTypeArea/CalculatorTypeArea.module.css'

export default function CalculatorTypeArea ({ textareaValue, handleKeyDown }){
  return(
    <section className={styles.section}>
      <textarea 
        placeholder='Type here...'
        className={styles.textarea} 
        value={textareaValue}
        onKeyDown={event => handleKeyDown(event.key)}
        readOnly
      />
    </section>
  )
}