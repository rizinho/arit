import styles from '@/app/page.module.css'
import Link from 'next/link'
// import styles from './cakeCenoura/'

export default function Home() {
    return(
        <div className={styles.main}>
         <div className={styles.mainContent}>
            <h1>Bolos:</h1>

            <div className={styles.cakesList}>
                <Link href='./cakeCenoura' className={styles.button}>- Bolo de Cenoura</Link>
                <Link href='./cakeFuba' className={styles.button}>- Bolo de Fuba</Link>   
            </div>

         </div>   
        </div>
    )
}