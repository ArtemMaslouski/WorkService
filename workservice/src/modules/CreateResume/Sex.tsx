import React from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'

const Sex: React.FC = () => {
    return (
        <div className='create-resume__sex'>
            <div className='create-resume__sex__text'>Пол</div>
            <div>
                <label className='create-resume__sex__male-radioButton__text'htmlFor='male-radioButton'>Мужской</label>
                <input className='create-resume__sex__male-radioButton' type="radio" id='male-radioButton' value="Мужской"/>
            </div>
            <div>
                <label className='create-resume__sex__female-radioButton__text' htmlFor='female-radioButton'>Женский</label>
                <input className='create-resume__sex__female-radioButton' type="radio" id='female-radioButton' value="Женский"/>
            </div>
        </div>
    )
}

export default Sex;