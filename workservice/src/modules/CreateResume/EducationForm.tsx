import React from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'

interface Options{
    value: string;
    label:string;
}

const options: Options[] = [
    { value: '', label: 'Не указано' },
    { value: '', label: 'Очная(дневная)' },
    { value: '', label: 'Очная(вечерняя)' },
    { value: '', label: 'Заочная' },
    { value: '', label: 'Дистанционная' },
]
const EducationForm:React.FC = () => {
    return (
        <div className='create-resume__education-form'>
            <div className='create-resume__education-form__text'>Форма обучения</div>
            <select className='create-resume__education-form__select' name='options' id="options">
                {
                    options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default EducationForm