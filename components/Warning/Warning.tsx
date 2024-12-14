import React from 'react'
import style from './Warning.module.scss'

interface WarningProps{
  id: number;
}

const Warning: React.FC<WarningProps> = ({ id }) => {
  let content;

  switch (id) {
    case 1:
      content = "Если вы это видите то эта страница ещё не разработанна или не работает."
      break;
    case 2: 
      content = "Такой страницы нету."
      break;
  
    default:
      content = "Выберите значение."
      break;
  }
  return (
    <div className={style.Warning}>
      <div className={style.Warning_text}>
        {content}
      </div>
    </div>
  )
}

export default Warning;