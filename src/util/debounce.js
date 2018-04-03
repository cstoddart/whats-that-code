export const debounce = (fn, ms) => {
    let timeout;

    return (...args) => {
        const debounced = () => {
            timeout = null;
            fn(...args);
        }

        clearTimeout(timeout);
        timeout = setTimeout(debounced, ms);
    }
}