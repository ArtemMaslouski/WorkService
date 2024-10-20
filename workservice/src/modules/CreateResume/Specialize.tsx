import React from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'

const Specialize:React.FC = () => {
    return ( 
        <div className='create-resume__specialize'>
            <div className='create-resume__specialize__text'>Специальность</div>
            <input className='create-resume__specialize__input' type="text" placeholder='Введите специальность' />
        </div>
    )
}

export default Specialize;