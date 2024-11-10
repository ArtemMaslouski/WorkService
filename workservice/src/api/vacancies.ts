import axios from 'axios'

export interface Vacancy{
    id: string,
    Position: string,
    Salary: string,
    Company: string,
    City: string,

}

export const Vacancies = {
    getVacancies: async () => {
        return axios.get('http://localhost:5000/vacancies/get')
    }
} 