import React, { useState } from 'react'

import '../CreateResume/sass/CreateResume.scss'

interface Option {
    value: string;
    label: string;
}

const options: Option[] = [
    { value: '', label: 'Выбрать город'},
    { value: 'minsk', label: 'Минск'},
    { value: 'vitebsk', label: 'Брест'},
    { value: 'grodno', label: 'Гродно'}
]

const UserCity:React.FC = () => {

    const [selectedOptions, setSelectedOption] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    }
    return (
        <div className='create-resume__user-city'>
            <div className='create-resume__user-city__text'>Город проживания</div>
            <select className='create-resume__user-city__select' id='options' value={selectedOptions} onChange={handleChange}>
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

export default UserCity