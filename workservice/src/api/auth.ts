import axios from 'axios'

export const Auth = {
    registerUser: async (login:string, password:string) => {
        return axios.post('http://localhost:5000/auth/register-user',{
            Login: login,
            Password: password,
            Role: 'user',
        })
    },

    registerEmployer: async (login: string,password:string) => {
        return axios.post('http://localhost:5000/auth/register-user',{
            Login: login,
            Password: password,
            Role: 'employer',
        })
    }
}