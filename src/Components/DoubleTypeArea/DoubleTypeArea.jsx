import { useState } from 'react'
import styles from '/src/Components/DoubleTypeArea/DoubleTypeArea.module.css'

export default function DoubleTypeArea({ inputPlaceholder, list, names, selected, value, handleChange, handleKeyDown, before, after, textareaRef }){
  const optionList = Array.from(names).map(name => <option key={name} value={name}>{list[`${name}`]}</option>)
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
          {before+selected+after}
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