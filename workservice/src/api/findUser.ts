import axios, { AxiosResponse } from 'axios'

export interface User{
    id: number;
    Login: string;
    Password: string;
    Role: string;
}

export const Users = {
      getUsers: async (): Promise<User[]> =>  {
        const response: AxiosResponse<User[]> = await axios.get('http://localhost:5000/auth/get-users')
        return response.data;
    }
}