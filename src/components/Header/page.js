import React from "react"
import Image from "next/image"
import Link from "next/link"

import styles from '@/components/Header/page.module.css'

export default function Header () {
  return(
    <div className={styles.main}>

      <div className={styles.logoContent}>
        <Image src='/logoAri.png' 
               width={80} height={80}
               alt="Logo do Site"
        />
      </div>

      <div className={styles.navBar}>
        <Link href='/' className={styles.btnNav}>Sobre</Link>
        <Link href='/' className={styles.btnNav}>FAQ</Link>
        <Link href='/' className={styles.btnNav}>Ideias</Link>
        <Link href='/' className={styles.btnNavLog}>log in</Link>
        <Link href='/' className={styles.btnNavLog}>Sign Up</Link>
      </div>

    </div>
  )
}