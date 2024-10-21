import React from 'react'
import InputName from '../../modules/CreateResume/InputName';
import SurnameInput from '../../modules/CreateResume/SurnameInput';
import ThirdNameInput from '../../modules/CreateResume/ThirdNameInput';
import UserCity from '../../modules/CreateResume/City'
import Sex from '../../modules/CreateResume/Sex'
import Citizenship from '../../modules/CreateResume/Citizenship'
import Permission from '../../modules/CreateResume/Permission'
import PhoneNumber from '../../modules/CreateResume/PhoneNumber'
import Email from '../../modules/CreateResume/Email'
import EducationLevel from '../../modules/CreateResume/EducationLevel'
import InstitutionName from '../../modules/CreateResume/InstitutionName';
import Faculty from '../../modules/CreateResume/Faculty';
import Specialize from '../../modules/CreateResume/Specialize';
import EducationForm from '../../modules/CreateResume/EducationForm';
import GraduationYear from '../../modules/CreateResume/GraduationYear';
import Position from '../../modules/CreateResume/Position'
import Salary from '../../modules/CreateResume/Salary';
import Experience from '../../modules/CreateResume/Experience';
import DataPicker from '../../modules/CreateResume/DataPicker';

import './scss/FullResume.scss'
import OrganizationName from '../../modules/CreateResume/OrganizationName';


const FullResume = () => {
    return (
        <>
          <h1 className='create-resume__full-resume__text'>Создание резюме</h1>
          <div className='create-resume__full-resume__name-block'>
            <div className='create-resume__full-resume__name-block__text'>Общая информация</div>
            <SurnameInput />
            <InputName />
            <ThirdNameInput />
            <UserCity />
            <DataPicker/>
            <Sex/>
            <Citizenship />
            <Permission/>
            <PhoneNumber />
            <Email/>
          </div>
          <div className='create-resume__full-resume__education-block'>
            <div className='create-resume__full-resume__education-block__text'>Образование</div>
            <EducationLevel/>
            <InstitutionName/>
            <Faculty />
            <Specialize />
            <EducationForm/>
            <GraduationYear/>
          </div>
          <div className='create-resume__full-resume__career-block'>
            <div className='create-resume__full-resume__career-block__text'>Карьера</div>
            <Position/>
            <Salary/>
            <Experience />
          </div>
        </>
    )
}

export default FullResume;