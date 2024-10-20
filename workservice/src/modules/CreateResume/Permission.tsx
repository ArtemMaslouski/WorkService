import React, { useEffect, useState } from 'react'
import { Country } from '../../api/createResume'
import axios from 'axios'

const Permission: React.FC = () => {
    const [permissionCountry, setPermissionCountry] = useState<string>('');
    const [countries, setCountries] = useState<Country[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPermissionCountry(event.target.value);
    }

    useEffect(() => {
        const loadCountries = async () => {
            try{
                const response = await axios.get('https://namaztimes.kz/ru/api/country?type=json')
                const data = response.data;

                const countriesArray: Country[] = Object.entries(data).map(([key,value]) => ({
                    id: Number(key),
                    name: value as string,
                }));

                setCountries(countriesArray);
            } catch(error){
                console.error('Ошибка при загрузке стран: ', error);
            }
        };

        loadCountries();
    },[]);

    return (
        <div className='create-resume__permission'>
            <div className='create-resume__permission__text'>Разрешение на работу</div>
            <select className='create-resume__permission__select' name="select" id="options" >
                {
                    countries.map(country => (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
} 

export default Permission