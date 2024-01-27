export const localStorageHelper = (key, defValue = '') => {
    const onSetItemLocalStorage = (value) => {
        if (value) {
            window.localStorage.setItem(key, value);
        } else {
            window.localStorage.setItem(key, defValue);
        }
    };

    const onGetItemLocalStorage = (key) => {
        return window.localStorage.getItem(key);
    };

    const onClearLocalStorage = () => {
        window.localStorage.clear();
    };

    return {
        onSetItemLocalStorage,
        onGetItemLocalStorage,
        onClearLocalStorage,
    };
};

export default localStorageHelper;
