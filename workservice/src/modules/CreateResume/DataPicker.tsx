import React from 'react'

import '../CreateResume/sass/CreateResume.scss'

const DataPicker: React.FC = () => {
    return (
        <div className='create-resume__data-picker'>
            <div className='create-resume__data-picker__text'> Дата рождения</div>
            <input className='create-resume__data-picker__input' type="date" id="date" name="date" />
        </div>
    )
}

export default DataPicker