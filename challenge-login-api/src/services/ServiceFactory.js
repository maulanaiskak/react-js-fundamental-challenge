import { LoginService } from './LoginService';

export const serviceFactory = (apiClient) => {
    return {
        loginService: LoginService(apiClient),
    };
};
