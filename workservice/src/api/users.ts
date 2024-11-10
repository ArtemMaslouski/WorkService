import axios from 'axios'

export interface User{
    id: number;
    Login: string;
    Password: string;
    Role: string;
}

export const Users = {
      loginUsers: async (login: string, password: string) => {
        return axios.post('http://localhost:5000/auth/test',{
            Login: login,
            Password: password
        })
      }

      
}   