import styles from '/src/Components/Button/Button.module.css'

export default function Button({ children, handleButtonClick, buttonId }){
  return(
    <button 
      onClick={() => handleButtonClick(buttonId)}
      className={styles.button} 
    >{children}</button>
  )
}