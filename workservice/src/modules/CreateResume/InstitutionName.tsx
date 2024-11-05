import React from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'

const InstitutionName:React.FC = () => {
    return (
        <div className='create-resume__institution-name'>
            <div className='create-resume__institution-name__text'>Название учреждения образования</div>
            <input className='create-resume__institution-name__input' />
        </div>
    )
}

export default InstitutionName;