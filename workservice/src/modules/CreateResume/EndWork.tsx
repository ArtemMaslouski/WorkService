import React from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'

const EndWork:React.FC = () => {
    return (
        <div className='create-resume__end-work'>
            <div className='create-resume__end-work__text'>Дата окончания работы</div>
            <input  className='create-resume__end-work__input'type="date" id='date' name='date'  />
        </div>  
    )
}

export default EndWork