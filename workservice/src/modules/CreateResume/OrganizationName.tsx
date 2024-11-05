import React from 'react'

const OrganizationName:React.FC = () => {
    return (
        <div className='create-resume__organizationName'>
            <div className='create-resume__organizationName__text'>Наименование организации</div>
            <input className='create-resume__organizationName__input' type="text" />
        </div>
    )
}

export default OrganizationName