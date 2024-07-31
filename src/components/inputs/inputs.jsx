import { useState } from 'react';
import './inputs.css';

export default function Inputs() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='all'>
            <div className='firstName'>
                <label htmlFor="firstName">
                    <img src="src/assets/images/ava.png" alt="" />
                </label>
                <input type="text" id='firstName' />
            </div>

            <div className='secondName'>
                <label htmlFor="secondName">
                    <img src="src/assets/images/lock.png" alt="" />
                </label>
                <div className='password-container'>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id='secondName'
                    />
                    <img
                        src={showPassword ? "src/assets/images/open-eye.png" : "src/assets/images/closed-eye.png"}
                        alt="Toggle Password Visibility"
                        onClick={togglePasswordVisibility}
                        className="toggle-password"
                    />
                </div>
            </div>
        </div>
    );
}
