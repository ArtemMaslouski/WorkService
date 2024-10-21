import React from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'

const Salary:React.FC = () => {
    return (
        <div className='create-resume__salary'>
            <div className='create-resume__salary__text'>Желаемая зарплата</div>
            <input className='create-resume__salary__input' type="text" />
        </div>
    )
}

export default Salary