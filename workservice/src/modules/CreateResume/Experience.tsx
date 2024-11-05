import React,{ useState } from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'
import OrganizationName from './OrganizationName';
import OrganizationSite from './OrganizationSite';
import ActivityField from './ActivityField';
import StartWork from './StartWork';
import EndWork from './EndWork';

const Experience:React.FC = () => {
    const [ selectedExperience, setSelectedExperience ] = useState<string | null>(null)
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedExperience(event.target.value);
    }
    return (
        <>
            <div className='create-resume__experience'>
                <div className='create-resume__experience__text'>Опыт работы</div>
                <div className='create-resume__experience__have-experience'>
                    <label className='create-resume__experience__have-experince__text' htmlFor="have">Есть опыт</label>
                    <input
                        className='create-resume__experience__have-experience__input' 
                        id='have'
                        type="radio"
                        name="experience"
                        value='Есть опыт'
                        checked={selectedExperience === "Есть опыт"}
                        onChange={handleChange} 

                    />
                </div>
                <div className='create-resume__experience__dont-have-experience'>
                    <label className='create-resume__experience__dont-have-experience__text' htmlFor="dont-have">Нет опыта</label>
                    <input 
                        className='create-resume__experience__dont-have-experience__input'
                        id='dont-have'
                        type="radio"
                        name="experience" 
                        value='Нет опыта'
                        checked={selectedExperience === 'Нет опыта'}
                        onChange={handleChange}
                    />
                </div>

            </div>
            <div>
                {selectedExperience === 'Есть опыт' && (
                    <>
                        <div className='create-resume__organizationName__container'>
                            <OrganizationName />
                        </div>
                        <div className='create-resume__organizationSite__container'>
                            <OrganizationSite/>
                        </div>
                        <div className='create-resume__activity-field__container'>
                            <ActivityField/>
                        </div>
                        <div className='create-resume__start-work__container'>
                            <StartWork/>
                        </div>
                        <div className='create-resume__end-work__container'>
                            <EndWork/>
                        </div>
                        <p className='create-resume__add-work-place'> + Добавить место работы </p>
                        <p className='create-resume__delete-work-place'> Удалить</p>
                    </>
                    )}
            </div>
       </>
    )
}

export default Experience