import styles from '@/app/page.module.css'
import {Header} from '@/app/_components/header/page'
import {Footer} from '@/app/_components/footer/page'
import {List} from '@/app/_components/list/page'
// import styles from './cakeCenoura/'

export default function Home() {
    return(
        <div className={styles.main}>
            <Header/>
         <div className={styles.mainContent}>

          <div className={styles.textBox}>
           <h1> As melhores receitas de bolo em um só lugar! 
                Descubra, teste e saboreie delícias que vão adoçar seu dia.
            </h1> 
          </div>  

            <List/>
         </div>   
            <Footer/>
        </div>
    )
}