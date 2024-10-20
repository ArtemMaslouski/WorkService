import react from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'

interface Options{
    value: string;
    label: string;
}

const options: Options[] = [
    {value: '',label: 'Выбрать уровень образования'},
    {value: '',label: 'Среднее специальное'},
    {value: '',label: 'Профессионально-техническое'},
    {value: '',label: 'Незаконченное высшее'},
    {value: '',label: 'Среднее'},
    {value: '',label: 'Высшее'},
    {value: '',label: 'Магистр'},
    {value: '',label: 'Кандидат наук'},
    {value: '',label: 'Доктор наук'},
]

const EducationLevel:React.FC = () => {
    return ( 
        <div className='create-resume__education-level'>
            <div className='create-resume__education-level__text'>Уровень образования</div>
            <select className='create-resume__education-level__select' name="options" id="options" >
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

export default EducationLevel;