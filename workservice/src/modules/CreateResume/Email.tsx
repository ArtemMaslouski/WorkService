import React from 'react'

import '../CreateResume/sass/CreateResume.scss' 

const Email:React.FC = () => {
    return ( 
        <div className='create-resume__email'>
            <div className='create-resume__email__text'>Электронная почта</div>
            <input className='create-resume__email__input' placeholder='Введите электронную почту' type="text" />
        </div>
    )
}

export default Email