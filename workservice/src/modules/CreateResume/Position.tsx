import React from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'


const Position:React.FC = () => {
    return ( 
        <div className='create-resume__position'>
            <div className='create-resume__position__text'>Желаемая должность</div>
            <input className='create-resume__position__input' type="text" />
        </div>
    )
}

export default Position;