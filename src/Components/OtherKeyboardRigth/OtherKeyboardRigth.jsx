import styles from '/src/Components/OtherKeyboardRigth/OtherKeyboardRigth.module.css'
import Button from '/src/Components/Button/Button'

export default function OtherKeyboardRigth({ handleButtonClick }){
  const buttons = [
    {
      id: 'clear',
      content: 'C'
    },
    {
      id: 'backspace',
      content: '/images/backspaceRed.svg'
    }
  ]

  const ulButtons = buttons.map(button => <Button key={button.id} buttonId={button.id} handleButtonClick={handleButtonClick}>{button.id != 'backspace' ? button.content : <img src={button.content} />}</Button>)

  return(
    <>
      <section className={styles.section}>
        {ulButtons}
      </section>
    </>
  )
}