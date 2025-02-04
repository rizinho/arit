import styles from '@/app/cakeCenoura/page.module.css'

export default function CakeCenoura() {
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
            <div className={styles.titleContent}>
             <h2>Ingredientes</h2>
            </div>

            <div className={styles.ingredientesContent}>

            <h3>Massa:</h3>

              <ol className={styles.ingredientes}>
                <li>
                  <p>1/2 xícara (chá) de óleo</p>
                </li>
                <li>
                  <p>4 ovos</p>
                </li>
                <li>
                  <p>2 e 1/2 xícaras (chá) de farinha de trigo</p>
                </li>
                <li>
                  <p>3 cenouras médias raladas</p>
                </li>
                <li>
                  <p>2 xícaras (chá) de açúcar</p>
                </li>
                <li>
                  <p>1 colher (sopa) de fermento em pó</p>
                </li>
              </ol>

              <h3>Calda:</h3>

              <ol className={styles.ingredientes}>
                <li>
                  <p>1 colher (sopa) de manteiga</p>
                </li>
                <li>
                  <p>1 xícara (chá) de açúcar</p>
                </li>
                <li>
                  <p>3 colheres (sopa) de chocolate em pó</p>
                </li>
                <li>
                  <p>1 xícara (chá) de leite</p>
                </li>
              </ol>

            </div>

           </div>

            <div className={styles.imgContent}>
              <img src='/boloDeCenoura.jpg'/>
              <div className={styles.overlayImg}>
                Agora aproveite a receita com a Familia😊🍰
              </div>
            </div>

         </div>
        </div>
    )
}

