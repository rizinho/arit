
import styles from '@/app/_components/header/page.module.css'

export function Header() {
    return(
        <div className={styles.header}>
         <div className={styles.logoBox}>
          <img src='./logo.png'/>       
         </div>
         <div className={styles.textBox}>
         </div>

        </div>
    )
}