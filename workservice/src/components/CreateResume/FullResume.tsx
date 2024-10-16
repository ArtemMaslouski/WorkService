import React from 'react'
import InputName from '../../modules/CreateResume/InputName';
import SurnameInput from '../../modules/CreateResume/SurnameInput';
import ThirdNameInput from '../../modules/CreateResume/ThirdNameInput';

import './scss/FullResume.scss'

const FullResume = () => {
    return (
        <>
          <h1 className='create-resume__full-resume__text'>Создание резюме</h1>
          <div className='create-resume__full-resume__name-block'>
            <InputName />
            <SurnameInput />
            <ThirdNameInput />
          </div>
        </>
    )
}

export default FullResume;