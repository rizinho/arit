import styles from '@/app/_components/list/page.module.css'
import Link from 'next/link'

export function List () {
    return(
        <div className={styles.listBox}>
         <div className={styles.cakesList}>
          <Link href='./cakeCenoura' className={styles.button}>Bolo de Cenoura
          <img src='./iconCake.png'
               className={styles.iconBtn}
          />
          </Link>
          <Link href='./cakeFuba' className={styles.button}>Bolo de Fuba
          <img src='./iconCake.png'
               className={styles.iconBtn}
          />
          </Link>   
         </div> 
        </div>
    )
}