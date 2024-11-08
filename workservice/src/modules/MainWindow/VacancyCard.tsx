import React, { useState } from 'react'

import './sass/MainWindow.scss'
interface Props{
    Position: string;
    Salary: string;
    Company: string;
    City: string;
}

const VacancyCard: React.FC<Props> = ({ Position, Salary, Company, City }) => {
    const [isHover,setIsHover] = useState(false);

    const handleClick = () => {
        alert('Нажато');
    }

    return (
        <div
          className='main-window__vacancy-card__wrapper'
        >
            <div className='main-window__vacancy-card__vacancyName'>{Position}</div>
            <div className='main-window__vacancy-card__vacancySalary'>{Salary}</div>
            <div className='main-window__vacancy-card__vacancyCompany'>{Company}</div>
            <div className='main-window__vacancy-card__vacancyCity'>{City}</div>
            <button className='main-window__vacancy-card__button' onClick={handleClick} >Откликнуться</button>
        </div>
    )
}
    

export default VacancyCard