import react, { useState } from 'react'
import { Auth } from '../../api/auth'

import './sass/RegistrationWindow.scss'

const EmployeeRegistration: React.FC = () => {
    const [userLogin, setUserLogin] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const handleRegistartionUser = async () => {
        return await Auth.registerUser(userLogin, userPassword);
    }

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserLogin(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(event.target.value);
    }
    return (
        <div className='employee-registration__wrapper'>
            <div className='employee-registration__wrapper__text'>Регистрация соискателя</div>
            <div className='employee-registration__login__text'>Логин</div>
            <input type="text" className='employee-registration__login__input' onChange={handleLoginChange} placeholder='Введите логин' />

            <div className='employee-registration__password__text'>Пароль</div>
            <input type="password" className='employee-registration__password__input' onChange={handlePasswordChange} placeholder='Введите пароль' />
            <button className='employee-registration__wrapper__button' onClick={handleRegistartionUser}>Зарегестрироваться</button>
        </div>
    )
}

export default EmployeeRegistration;