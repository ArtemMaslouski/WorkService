import React from 'react'
import './sass/MainWindow.scss'
import icon from '../../OIG3.png';

const MainNavigation = () => {
    return (
        <div className='main-window__header'>
            <nav className='main-window__navigation'>
                <ul>
                    <li>
                        <a href="/">
                            <img className= 'main-window__navigation__icon' src={icon} alt="Иконка" />
                        </a>
                    </li>
                    <li><a href="vacancies">Вакансии</a></li>
                    <li><a href="nvlds">Пока не придумал</a></li>
                    <li><a href="vndsl">Пока не придумал x2</a></li>
                    <li><a href="vndsl">Пока не придумал x3</a></li>
                </ul>
            </nav>
        </div>
        
    )
}

export default MainNavigation