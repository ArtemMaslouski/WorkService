import react, {useState} from 'react'
import { Auth } from '../../api/auth'

import './sass/RegistrationWindow.scss'

const EmployerRegistration: React.FC = () => {
    const [employerLogin, setEmployerLogin] = useState<string>('');
    const [employerPassword, setEmployerPassword] = useState<string>('');

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmployerLogin(event.target.value);
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmployerPassword(event.target.value);
    }

    const handleRegistrationEmployer = async () => {
        return await Auth.registerEmployer(employerLogin, employerPassword);
    }
    return (
        <div className='employer-registration__wrapper'>
            <div className='employer-registration__wrapper__text'>Регистрация работодателя</div>
            <div className='employer-registration__login__text'>Логин</div>
            <input type="text" className='employer-registration__login__input' onChange={handleChangeLogin} placeholder='Введите логин' />

            <div className='employer-registration__password__text'>Пароль</div>
            <input type="password" className='employer-registration__password__input' onChange={handleChangePassword} placeholder='Введите пароль' />
            <button className='employer-registration__wrapper__button' onClick={handleRegistrationEmployer} >Зарегестрироваться</button>
        </div>
    )
}

export default EmployerRegistration