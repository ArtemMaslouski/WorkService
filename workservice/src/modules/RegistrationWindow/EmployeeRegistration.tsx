import react from 'react'

import './sass/RegistrationWindow.scss'

const EmployeeRegistration: React.FC = () => {
    return (
        <div className='employee-registration__wrapper'>
            <div className='employee-registration__wrapper__text'>Регистрация соискателя</div>
            <div className='employee-registration__login__text'>Логин</div>
            <input type="text" className='employee-registration__login__input' placeholder='Введите логин' />

            <div className='employee-registration__password__text'>Пароль</div>
            <input type="password" className='employee-registration__password__input' placeholder='Введите пароль' />
            <button className='employee-registration__wrapper__button'>Зарегестрироваться</button>
        </div>
    )
}

export default EmployeeRegistration;