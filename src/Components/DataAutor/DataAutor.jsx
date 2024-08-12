import { useEffect, useState } from 'react'
import styles from '/src/Components/DataAutor/DataAutor.module.css'

export default function DataAutor({host}){
  const [ date, setDate ] = useState('yyyy-mm-dd')

  useEffect(() => {
    fetch(`https://${host}/latest`)
      .then(resp => resp.json())
      .then(data => {
        setDate(data.date)
      })
  }, [host])
  return(
    <>
      <p className={styles.p}>Data fetched from <a href="https://www.frankfurter.app/" target="_blank">https://www.frankfurter.app/</a><br /><span className={styles.span}>Updated on {date}</span></p>
    </>
  )
}