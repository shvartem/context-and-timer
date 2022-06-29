export interface User {
    username: string;
    password: string;
}

const db: User[] = [
    {
        username: 'sibur',
        password: 'siburushka',
    },
    {
        username: 'gazprom',
        password: 'gazpromushka',
    },
    {
        username: 'shvartem',
        password: '',
    },
];

export const authorize = (authData: User) => {
    const res = db.find((user) => user.username === authData.username);

    if (!res || res.password !== authData.password) {
        return { message: 'Пользователь с таким именем или паролем не найден' };
    }

    return { username: res.username };
};
