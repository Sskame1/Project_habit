import React from 'react';
import style from './Footer.module.scss'
import Link from 'next/link';

const urlInterArticles = "https://i.pinimg.com/736x/e5/1d/0a/e51d0a496551425d41d76c62cd92a7a0.jpg"

export default function Footer() {
  return (
    <div className={style.Footer}>
        <div className={style.Footer__logo}>Logo Name</div>
        <div className={style.Footer__content}>
            <div className={style.interestingArticles}>
                <Link href={urlInterArticles}>Очень важная статья</Link>
            </div>
            <div className={style.navPanel}>
                <Link href="#container_Down">Об проекте</Link>
                <Link href="#container_Down">Пройти тест</Link>
            </div>
        </div>
    </div>
  )
}
