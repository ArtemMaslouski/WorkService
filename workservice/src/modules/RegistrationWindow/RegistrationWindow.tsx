import React, { useState } from 'react';
import { Users, User } from '../../api/users';

import './sass/RegistrationWindow.scss';
import { useNavigate } from 'react-router-dom'

const RegistrationWindow: React.FC = () => {
    const [userLogin, setUserLogin] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [users, setUsers] = useState<User[]>([]);
    const navigate = useNavigate();

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserLogin(event.target.value);
    };

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(event.target.value);
    };

    const employerRegistration = () => {
        navigate('registration-employer');
    }

    const employeeRegistration = () => {
        navigate('registration-employee');
    }

    const handleEnter = async (login: string, password: string): Promise<void> => {
        try{
            const response = await Users.loginUsers(login, password)
            
            console.log(response)
            if(response.data.status === 'success'){
                navigate('/');
            }
        }catch(error){
            console.error("Произошла ошибка")
        }
    };

    return (
        <div className='registrationWindow__wrapper'>
            <div className='registrationWindow__enter'>
                <div className='registrationWindow__enter__text'>Вход</div>
                <div className='registrationWindow__enter__block'>
                    <div className='registrationWindow__enter__login__text'>Логин</div>
                    <input className='registrationWindow__enter__login__input'type="text" onChange={handleChangeLogin} />
                    <div className='registrationWindow__enter__password__text'>Пароль</div>
                    <input className='registrationWindow__enter__password__input' type="password" onChange={handleChangePassword} />
                </div>
                <button className='registrationWindow__enter__button' onClick={() => handleEnter(userLogin,userPassword)}>Войти</button>
            </div>
            <div className='registrationWindow__registration'>
                <div className='registrationWindow__registration__block'>
                    <div className='registrationWindow__registration__employee__name'>Соискателям</div>
                    <div className='registrationWindow__registration__employee__text'>Зарегистрировавшись, соискатели могут размещать резюме и откликаться на заинтересовавшие их вакансии.</div>
                    <button className='registrationWindow__registration__employee__button' onClick={employeeRegistration}>Регистрация соискателя</button>
                    <div className='registrationWindow__registration__employer__name'>Работодателям</div>
                    <div className='registrationWindow__registration__employer__text'>Зарегистрировавшись, работодатели могут размещать свои вакансии.</div>
                    <button className='registrationWindow__registration__employer__button' onClick={employerRegistration}> Регистрация работодателя</button>
                </div>
                
            </div>
        </div>
    );
};

export default RegistrationWindow;