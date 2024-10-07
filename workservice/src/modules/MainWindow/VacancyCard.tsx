import React, { useState } from 'react'

import './sass/MainWindow.scss'

const VacancyCard: React.FC = () => {
    const [isHover,setIsHover] = useState(false);

    const handleClick = () => {
        alert('Нажато');
    }

    // const MouseEnter = () => {
    //     setIsHover(true);
    //     alert('Зашло');
    // }

    // const MouseLeave = () => {
    //     setIsHover(false);
    //     alert('Вышло');
    // }
    return (
        <div
          className='main-window__vacancy-card__wrapper'
        >
            <div className='main-window__vacancy-card__vacancyName'>Frontend разработчик</div>
            <div className='main-window__vacancy-card__vacancySalary'>600 - 800$ на руки</div>
            <div className='main-window__vacancy-card__vacancyCompany'>Google</div>
            <div className='main-window__vacancy-card__vacancyCity'>Минск</div>
            <button className='main-window__vacancy-card__button' onClick={handleClick} >Откликнуться</button>
        </div>
    )
}
    

export default VacancyCard