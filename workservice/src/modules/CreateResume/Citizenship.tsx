import React, { useEffect, useState } from 'react';
import { Country } from '../../api/createResume'
import axios from 'axios';


const Citizenship: React.FC = () => {
    const [citizenship, setCitizenship] = useState<string>('');
    const [countries, setCountries] = useState<Country[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCitizenship(event.target.value);
    };

    useEffect(() => {
        const loadCountries = async () => {
            try {
                const response = await axios.get('https://namaztimes.kz/ru/api/country?type=json');
                const data = response.data;

                // Преобразуйте данные в массив объектов типа Country
                const countriesArray: Country[] = Object.entries(data).map(([key, value]) => ({
                    id: Number(key),
                    name: value as string,
                }));

                setCountries(countriesArray);
            } catch (error) {
                console.error('Ошибка при загрузке стран:', error);
            }
        };

        loadCountries();
    }, []);

    return (
        <div className='create-resume__citizenship'>
            <div className='create-resume__citizenship__text'>Гражданство</div>
            <select className='create-resume__citizenship__select' name="select" id="options" value={citizenship} onChange={handleChange}>
                <option value="" disabled>Выберите страну</option>
                {countries.map(country => (
                    <option key={country.id} value={country.id}>
                        {country.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Citizenship;