export const SETSTATE = "SETSTATE";

export const setStateAction = (payload) => ({
    type: SETSTATE,
    payload
});

export const LOADING = "LOADING";

export const loadingAction = (payload) => ({
    type: LOADING,
    payload
});