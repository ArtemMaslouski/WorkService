import React from 'react'
import './sass/MainWindow.scss'

const MainSearchInput = () => {
    return (
        <div className='main-window__search-input__header'>
            <input className='main-window__search-input' type="text" maxLength={50} placeholder='Профессия,должность,компания'/>
            <button className='main-window__search-button'>Найти</button>
        </div>
    )
}

export default MainSearchInput