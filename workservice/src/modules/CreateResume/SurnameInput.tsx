import React from 'react'

const SurnameInput:React.FC = () => {
    return (
        <div className='create-resume__surname'>
             <div className='create-resume__surname__text'>Фамилия</div>
             <input type="text" className='create-resume__surname__input' placeholder={'Введите фамилию'} />
        </div>
    )
}

export default SurnameInput