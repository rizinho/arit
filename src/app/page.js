'use client'
import React from "react"
import Header from '@/components/Header/page'
import styles from '@/app/page.module.css'

import { useState } from "react"


export default function Home () {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('0');

  const Soma = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  }
  const Subtração = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  }
  const Multiplicação = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  }
  const Divisão = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  }


  return(
    <div className={styles.main}>
      <Header/>
      <div className={styles.mainContent}>

          <div className={styles.iptContent}>
            <input className={styles.input}
                   onChange={(e) => setNum1(e.target.value)}
                   placeholder='Primeiro numero'
                   type="number"
            />
            <input className={styles.input} 
                   onChange={(e) => setNum2(e.target.value)}
                   placeholder='Primeiro numero'
                   type="number"
            />
            <h1 className={styles.res}>= {result}</h1>
          </div>
        {/* <h1>Selecione o tipo de Conta deseja fazer:</h1> */}

          <div className={styles.btnContent}>
            <button className={styles.btnA} onClick={Soma}>Adição</button>
            <button className={styles.btnS} onClick={Subtração}>Subtração</button>
            <button className={styles.btnM} onClick={Multiplicação}>Multiplicação</button>
            <button className={styles.btnD} onClick={Divisão}>Divisão</button>
          </div>

      </div>

    </div>
  )
}