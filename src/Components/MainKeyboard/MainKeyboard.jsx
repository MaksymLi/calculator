import styles from '/src/Components/MainKeyboard/MainKeyboard.module.css'
import Button from "/src/Components/Button/Button"

export default function MainKeyboard(){
  const buttons = [
    {
      id: '7',
      content: '7'
    },
    {
      id: '8',
      content: '8'
    },
    {
      id: '9',
      content: '9'
    },
    {
      id: '4',
      content: '4'
    },
    {
      id: '5',
      content: '5'
    },
    {
      id: '6',
      content: '6'
    },
    {
      id: '1',
      content: '1'
    },
    {
      id: '2',
      content: '2'
    },
    {
      id: '3',
      content: '3'
    },
    {
      id: '7',
      content: '00'
    },
    {
      id: '7',
      content: '0'
    },
    {
      id: '7',
      content: '.'
    },
  ]
  const ulButtons = buttons.map(button => <Button key={button.id}>{button.content}</Button>)

  return(
    <section className={styles.section}>
      {ulButtons}
    </section>
  )
}