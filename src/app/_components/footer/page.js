import styles from '@/app/_components/footer/page.module.css'

export function Footer(){
    return(
        <div className={styles.footer}>

         <div className={styles.copy}>
          <span>© 2024, Richard, Todos os direitos reservados </span>  
         </div>   

         <div className={styles.contactBox}>
          <span>WhatsApp: 55+ (14) 99887-7665</span>
          <span>Email: pontoDoBolo@gmail.com</span>
          <span>Telefone: 123 456</span>
         </div>

        </div>
    )    
}