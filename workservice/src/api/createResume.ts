import axios, { AxiosResponse } from 'axios'

export interface Country{
    id:number;
    name: string;
}

export const getCountries = async() : Promise<Country[]> => {
    const response = await axios.get('https://namaztimes.kz/ru/api/country?type=json')
    return response.data;
} 