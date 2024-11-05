import React from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'

const GraduationYear:React.FC = () => {
    return (
        <div className='create-resume__graduation-year'>
            <div className='create-resume__graduation-year__text'>Год выпуска</div>
            <input  className='create-resume__graduation-year__input' type="text" />
        </div>
    )
}

export default GraduationYear