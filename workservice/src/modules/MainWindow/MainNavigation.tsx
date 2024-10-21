import React from 'react'
import './sass/MainWindow.scss'
import { useNavigate } from 'react-router-dom'

import icon from '../../OIG3.png';

const MainNavigation: React.FC = () => {
    
    const navigate = useNavigate();
    const handleCreate = () => {
        navigate('/createResume')
    }

    return (
        <div className='main-window__header'>
            <nav className='main-window__navigation'>
                <ul>
                    <li>
                        <a href="/">
                            <img className= 'main-window__navigation__icon' src={icon} alt="Иконка" />
                        </a>
                    </li>
                    <li><a href="profile">Профиль</a></li>
                    <li><a href="vacancies">Вакансии</a></li>
                    <li><a href="vndsl">Пока не придумал x2</a></li>
                    <li><a href="vndsl">Пока не придумал x3</a></li>
                    <button className='main-window__navigation__create-resume' onClick={handleCreate}>Создать резюме</button>
                </ul>
            </nav>
        </div>
    )
}

export default MainNavigation