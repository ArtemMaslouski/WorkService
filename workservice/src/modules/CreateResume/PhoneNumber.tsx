import React from 'react'

import '../CreateResume/sass/CreateResume.scss'

const PhoneNumber:React.FC = () => {
    return (
        <div className='create-resume__phone-number'>
            <div className='create-resume__phone-number__text'>Номер телефона</div>
            <input className='create-resume__phone-number__input' placeholder='Введите номер телефона'></input>
        </div>
    )
}

export default PhoneNumber;