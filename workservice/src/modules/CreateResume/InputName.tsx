import React from 'react'

import './sass/CreateResume.scss'

const InputName: React.FC = () => {
    return (
        <div className='create-resume__name'>
            <div className='create-resume__name__text'>Имя</div>
            <input type="text" className='create-resume__name__input' placeholder={'Введите имя'} />
        </div>
    )
}

export default InputName;