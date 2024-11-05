import React from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'

const Faculty: React.FC = () => {
    return ( 
        <div className='create-resume__faculty'>
            <div className='create-resume__faculty__text'>Факультет</div>
            <input className='create-resume__faculty__input' type="text" placeholder='Введите факультет'/>
        </div>
    )
}

export default Faculty;