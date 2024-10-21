import React from 'react'

import '../../modules/CreateResume/sass/CreateResume.scss'

const OrganizationSite:React.FC = () => {
    return (
        <div className='create-resume__oraganizationSite'>
            <div className='create-resume__organizationSite__text'>Сайт компании</div>
            <input className='create-resume__organizationSite__input' type="text" placeholder="http://" />
        </div>
    )
}

export default OrganizationSite