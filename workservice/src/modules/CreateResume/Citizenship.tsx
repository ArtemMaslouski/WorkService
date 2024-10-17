import React,{ useEffect, useState } from 'react'
import { getCountries } from '../../api/createResume'
import { Country } from '../../api/createResume'

import '../../modules/CreateResume/sass/CreateResume.scss'



const Citizenship:React.FC = () => {
    const [citizenship, setCitizenship] = useState<string>('');
    const [countries, setCountries] = useState<Country[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCitizenship(event.target.value);
    }

    useEffect(() => {
        const loadCountries = async() => {
            const data = await getCountries();
            setCountries(data);
            
        }

        loadCountries()
    },[])

    const countriesArray = Object.entries(countries).map(([key, value]) => ({
        value: key,
        label: value,
    }));
    return (
        <div className='create-resume__citizenship'>
            <div className='create-resume__citizenship__text'>Гражданство</div>
            <select className='create-resume__citizenship__select' name="select" id="options" value={citizenship} onChange={handleChange}>
                <option value="" disabled>Выберите страну</option>
                {
                    countriesArray.map(country => (
                        <option  key={country.value} value={country.value}>
                            {country.label}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default Citizenship