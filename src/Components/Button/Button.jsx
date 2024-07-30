import styles from '/src/Components/Button/Button.module.css'

export default function Button({ children }){

  
  return(
    <button 
      className={styles.button}
    >{children}</button>
  )
}