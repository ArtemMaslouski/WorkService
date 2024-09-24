import React from 'react';

import './sass/authorization.scss'

const LoginInput = () => {
    return (
        <>
            <div className='authorization__window__login__text'>Логин</div>
            <input type="text" className='authorization__window__login__input' minLength={1} maxLength={30} placeholder={"Введите логин"} required  />
        </>
        
    )
}

export default LoginInput;