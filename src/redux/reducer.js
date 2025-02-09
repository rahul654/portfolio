import { SETSTATE, LOADING } from "./action";

const stateReducer = (state = {}, action) => {
    switch (action?.type) {
        case SETSTATE:
            return { ...action.payload };
        default:
            return state
    }
}

const loadingReducer = (state = true, action) => {
    switch (action?.type) {
        case LOADING:
            return action.payload;
        default:
            return state
    }
}

export { stateReducer, loadingReducer };