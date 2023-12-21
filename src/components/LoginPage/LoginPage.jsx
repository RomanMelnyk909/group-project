import React, { useState } from 'react';
import "./LoginPage.css"
import InputField from '../LoginComponent';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Логін:', username);
        console.log('Пароль:', password);
        setUsername('');
        setPassword('');
    };

    return (
        <div className='login-main-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <InputField
                    className = "input"
                    label="Логін"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <InputField
                    className = "input"
                    label="Пароль"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type="submit">Увійти</button>
            </form>
        </div>
    );
};

export default Login;