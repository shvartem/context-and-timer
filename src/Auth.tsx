import { ChangeEvent, FormEvent, useId, useState } from 'react';

import { authorize, User } from './api';

interface Props {
    login: (authData: User) => void;
}

const Auth = (props: Props) => {
    const { login } = props;

    const usernameId = useId();
    const passwordId = useId();

    const [authData, setAuthData] = useState<User>({ username: '', password: '' });

    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const toggleVisibility = () => setPasswordVisibility((prev) => !prev);

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;

        setAuthData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        login(authData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={usernameId}>Имя: </label>

                <input id={usernameId} name="username" type="text" onChange={handleChange} value={authData.username} />
            </div>

            <div>
                <label htmlFor={passwordId}>Пароль: </label>
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

            <button type="submit">Войти</button>
        </form>
    );
};

export default Auth;
