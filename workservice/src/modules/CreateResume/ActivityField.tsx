import React from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'

interface Sphere {
    value: string;
    label: string;
}

const spheres: Sphere[] = [
    { value: '', label: 'Банковское дело'},
    { value: '', label: 'Бытовые и коммунальные услуги'},
    { value: '', label: 'Гостиницы.Рестораны и предприятия общепита'},
    { value: '', label: 'Интернет и информационные технологии'},
    { value: '', label: 'Консалтинговые услуги'},
    { value: '', label: 'Искусство и культура'},
    { value: '', label: 'Медицина и формацевтика'},
    { value: '', label: 'Наука и образование'},
    { value: '', label: 'Недвижимость'},
    { value: '', label: 'Охрана правопорядка. Безопасность'},
    { value: '', label: 'Общественные объединения. Негосударственные организации'},
    { value: '', label: 'Органы власти и управления'},
    { value: '', label: 'Оптовая торговля. Импорт-экспорт'},
    { value: '', label: 'Подбор персонала и трудоустройство'},
    { value: '', label: 'Полиграфия'},
    { value: '', label: 'Пищевая промышленность'},
    { value: '', label: 'Промышленное производство'},
    { value: '', label: 'Реклама, маркетинг, PR'},
    { value: '', label: 'Розничная торговля'},
    { value: '', label: 'Сельское и лесное хозяйство'},

]

const ActivityField:React.FC = () => {
    return (
        <div className='create-resume__activity-field'>
            <div className='create-resume__activity-field__text'>Сфера деятельности</div>
            <select className='create-resume__activity-field__select' name="select" id='options'>
                {
                    spheres.map((sphere) => (
                        <option  key={sphere.value} value={sphere.value}>
                            {sphere.label}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default ActivityField