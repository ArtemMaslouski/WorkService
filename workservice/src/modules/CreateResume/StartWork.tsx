import React from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'

const StartWork: React.FC = () => {
    return ( 
        <div className='create-resume__start-work'>
            <div className='create-resume__start-work__text'>Дата начала работы</div>
            <input  className='create-resume__start-work__input'type="date" id="date" name="date" />
        </div>
    )
}

export default StartWork