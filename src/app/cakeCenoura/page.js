"use client";
import { useState } from "react";
import styles from '@/app/cakeCenoura/page.module.css'

export default function CakeCenoura() {

    const [selecionado, setSelecionado] = useState("");
    const handleClick = (valor) => {
      if(selecionado === valor) {
        setSelecionado("")
      } else {
        setSelecionado(valor)
      }
    }
    return(
        <div className={styles.main}>
         <div className={styles.mainContent}>

           <header className={styles.header}>

            <div className={styles.part1}>
             <h1>Bolo de Cenoura Tradicional</h1>
             <p>Bolo de Cenoura feito com Farinha de Trigo Renata e calda de chocolate.</p>
            </div>

            <div className={styles.part2}>
                <div className={styles.item}>  
                 <span>1h 0 minutos</span > 
                </div>
                <span className={styles.itemSep}></span>
                 <div className={styles.item}>  
                 <span>Facil</span> 
                </div>
                <span className={styles.itemSep}></span>
                <div className={styles.item}>  
                 <span>10 Porções</span > 
                </div>
            </div>

           </header>

           <div className={styles.recContent}>
            <h2>Ingredientes</h2>

            <input
          type="radio"
          name="opcao"
          value="opcao1"
          checked={selecionado === "opcao1"}
          onClick={() => handleClick("opcao1")}
          readOnly
        />Farinha
           </div>

         </div>
        </div>
    )
}

