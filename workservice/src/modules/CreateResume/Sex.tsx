import React, { useState } from 'react';
import '../../modules/CreateResume/sass/CreateResume.scss';

const Sex: React.FC = () => {
    const [selectedSex, setSelectedSex] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value); 
        setSelectedSex(event.target.value);
    };

    return (
        <div className='create-resume__sex'>
            <div className='create-resume__sex__text'>Пол</div>
            <div className='create-resume__sex__male-radioButton'>
                <label className='create-resume__sex__male-radioButton__text' htmlFor='male'>Мужской</label>
                <input 
                    className='create-resume__sex__male-radioButton__input' 
                    type='radio' 
                    id='male' 
                    name='sex' 
                    value='Мужской'
                    checked={selectedSex === "Мужской"}
                    onChange={handleChange}
                />
            </div>
            <div className='create-resume__sex__female-radioButton'>
                <label className='create-resume__sex__female-radioButton__text' htmlFor='female'>Женский</label>
                <input 
                    className='create-resume__sex__female-radioButton__input' 
                    type='radio' 
                    id='female' 
                    name='sex' 
                    value='Женский'
                    checked={selectedSex === "Женский"}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default Sex;