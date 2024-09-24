import react from 'react'

 const PasswordInput = () => {
    return (
        <>
             <div className='authorization__window__password__text'>Пароль</div>
             <input type="password" className='authorization__window__password__input' placeholder={"Введите пароль"} required/>
        </>
       
    )
}

export default PasswordInput