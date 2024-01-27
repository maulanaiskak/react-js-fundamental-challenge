export const LoginService = ({ doPost }) => {
    const login = async (username, password) => {
        try {
            return await doPost({
                url: '/login',
                data: { username: username, password: password },
            });
        } catch (e) {
            throw e;
        }
    };

    return { login };
};
