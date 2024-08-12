import { useState } from 'react'
import styles from '/src/Components/DoubleTypeArea/DoubleTypeArea.module.css'

export default function DoubleTypeArea({ inputPlaceholder, currenciesList, currenciesNames, selected, value, handleChange, handleKeyDown, textareaRef }){
  const optionList = Array.from(currenciesNames).map(name => <option key={name} value={name}>{currenciesList[`${name}`]}</option>)
  const [ focused, setFocused ] = useState(false)
  return(
    <>
      <section className={styles.section}>
        <select 
          className={focused ? `${styles.selectFocused}` : `${styles.select}`}
          onBlur={() => setFocused(false)}
          onClick={() => {
            if(focused) setFocused(false)
            else setFocused(true)
          }}
          value={selected}
          onChange={handleChange}
          readOnly
          >
          {optionList}
        </select>
        <p className={styles.p}>
          {selected}
        </p>
        <input 
          ref={textareaRef}
          placeholder={inputPlaceholder}
          className={styles.input} 
          value={value}
          onKeyDown={handleKeyDown}
          readOnly
        />
      </section>
    </>
  )
}