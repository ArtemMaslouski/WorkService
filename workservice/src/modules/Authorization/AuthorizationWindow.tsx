    import React from 'react'
    import LoginInput from './LoginInput'
    import PasswordInput from './Passwordinput'
    import AuthorizationButton from './AuthorizationButton'
    import './sass/authorization.scss'

    const Authorization = () => {
        return (
            <div className='authorization__window'>
                <LoginInput />
                <PasswordInput />
                <AuthorizationButton />
            </div>
        )
    }

    export default Authorization 