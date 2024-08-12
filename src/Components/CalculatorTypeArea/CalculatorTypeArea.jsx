import styles from '/src/Components/CalculatorTypeArea/CalculatorTypeArea.module.css'

export default function CalculatorTypeArea ({ textareaValue, handleKeyDown, textareaRef }){
  return(
    <section className={styles.section}>
      <textarea 
        placeholder='0'
        className={styles.textarea} 
        value={textareaValue}
        onKeyDown={event => handleKeyDown(event.key)}
        readOnly
        autoFocus
        ref={textareaRef}
      />
    </section>
  )
}