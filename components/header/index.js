import React from 'react'
import styles from "./styles.module.css";
import Link from 'next/link'
import {FaPlayCircle} from 'react-icons/fa'

export default function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo}  href="/">
        <FaPlayCircle/> NEXTFLIX
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="#">MOVIES</Link>
          <Link href="#">SERIES</Link>
          <Link href="#">KIDS</Link>
        </nav>
      </div>
    </header>
  )
}
