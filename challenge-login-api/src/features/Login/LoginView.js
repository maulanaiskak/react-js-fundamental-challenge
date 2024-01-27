import { useState } from 'react';
import { useDeps } from '../../shared/DepContext';
import localStorageHelper from '../../shared/localStorageHelper';
import './LoginView.css';

const LoginView = () => {
    const { loginService } = useDeps();
    const [isLoading, setLoading] = useState(false);
    const { onSetItemLocalStorage } = localStorageHelper('token');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async () => {
        setLoading(true);
        try {
            const response = await loginService.login(username, password);
            onSetItemLocalStorage(response.token);
            window.alert('Login Success');
        } catch (e) {
            window.alert('Invalid Username/Password');
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="login-container">
            <div className="app-title">
                <div className="title">SMM Batch 2</div>
                <div className="subtitle">Challenge Login API</div>
            </div>
            <div className="login">
                <form className="login-form">
                    <div className="login-form-item">
                        <label>Username</label>
                        <input type="text" onChange={onChangeUsername}></input>
                    </div>
                    <div className="login-form-item">
                        <label>Password</label>
                        <input type="password" onChange={onChangePassword}></input>
                    </div>
                    <div className="login-button">
                        <button
                            type="submit"
                            disabled={isLoading}
                            onClick={onLogin}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginView;
