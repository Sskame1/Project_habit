import React from 'react'
import Image from 'next/image'
import Header from '../Header/Header'
import style from './MainH.module.scss'
import DownloaderButton from '../DownloaderButton/DownloaderButton'
import DescForDown from '../DescForDown/DescForDown'

export default function MainH() {
  return (
    <div className={style.MainH}>
        <Header />
        <div className={style.MainH__container_main}>
            <div className={style.container_Down}>
                <DescForDown />
                <DownloaderButton />
            </div>
            <Image 
            className={style.Image_main}
            src="/image_main.png"
            alt='Image main'
            width={180}
            height={38}
            />
        </div>
    </div>
  )
}
