import React from 'react'

import './sass/CreateResume.scss'
const ThirdNameInput: React.FC = () => {
    return (
        <div className='create-resume__third-name'>
            <div className='create-resume__third-name__text'>Отчество</div>
            <input className='create-resume__third-name__input' type="text" placeholder={'Введите отчество'} />
        </div>
    )
}

export default ThirdNameInput