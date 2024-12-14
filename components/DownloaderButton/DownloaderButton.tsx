"use client"
import React, { useState } from 'react'
import style from './DownloaderButton.module.scss'

export default function DownloaderButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((open) => !open)
  };
  return (
    <div className={style.DownloaderButton}>
      <div className={style.containerForButton}>
        <button className={style.buttonDownload}>Скачать</button>
        <button className={style.buttonDownloadForVers} onClick={handleButtonClick}>{isOpen ? '✖' : '▶'}</button>
      </div>
      {isOpen && (
        <div className={style.VersionApp}>
          <button>скачать для телефона</button>
        </div>
      )}
    </div>
  )
}
