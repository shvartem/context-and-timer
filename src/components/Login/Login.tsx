import {ChangeEvent, FormEvent, useId, useState} from 'react';

import {User} from "../../domain";

import styles from './Login.module.scss';

interface Props {
    onLogin: (authData: User) => void;
}

const Login = ({onLogin}: Props) => {
    const usernameId = useId();
    const passwordId = useId();

    const [authData, setAuthData] = useState<User>({username: '', password: ''});

    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const toggleVisibility = () => setPasswordVisibility((prev) => !prev);


    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = evt.target;

        setAuthData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        onLogin(authData);
    };

    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.input}>
                    <label htmlFor={usernameId} className={styles.label}>Имя: </label>

                    <input
                        id={usernameId}
                        name="username"
                        type="text"
                        onChange={handleChange}
                        value={authData.username}
                        required
                    />
                </div>

                <div className={styles.input}>
                    <label htmlFor={passwordId} className={styles.label}>Пароль: </label>

                    <input
                        id={passwordId}
                        name="password"
                        type={passwordVisibility ? 'text' : 'password'}
                        onChange={handleChange}
                        value={authData.password}
                    />

                    <button onClick={toggleVisibility} type="button">
                        {passwordVisibility ? 'Скрыть' : 'Показать'}
                    </button>
                </div>

                <button type="submit" className={styles.submitButton}>Войти</button>
            </form>
        </div>

    );
};

export default Login;
