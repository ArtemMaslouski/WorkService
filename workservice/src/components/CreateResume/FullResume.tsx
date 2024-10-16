import React from 'react'
import InputName from '../../modules/CreateResume/InputName';
import SurnameInput from '../../modules/CreateResume/SurnameInput';
import ThirdNameInput from '../../modules/CreateResume/ThirdNameInput';
import UserCity from '../../modules/CreateResume/City'
import Sex from '../../modules/CreateResume/Sex'

import './scss/FullResume.scss'
import DataPicker from '../../modules/CreateResume/DataPicker';

const FullResume = () => {
    return (
        <>
          <h1 className='create-resume__full-resume__text'>Создание резюме</h1>
          <div className='create-resume__full-resume__name-block'>
            <SurnameInput />
            <InputName />
            <ThirdNameInput />
            <UserCity />
            <DataPicker/>
            <Sex/>
          </div>
        </>
    )
}

export default FullResume;