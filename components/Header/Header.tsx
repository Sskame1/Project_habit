import React from 'react'
import Link from 'next/link'
import style from "./Header.module.scss"

export default function Header() {
  return (
    <div className={style.Header}>
        <div className={style.Header__container}>
            <Link href='/' className={style.logo}>Momentum</Link>
            <ul>
                <Link href='/About' className="NavItem">Об проекте</Link>
                <Link href='/Testing' className="NavItem">Тест</Link>
            </ul>
        </div>
    </div>
  )
}
