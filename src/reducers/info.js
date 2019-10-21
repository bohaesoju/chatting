const initialState = {
    data: false,
};

export const INFO_REQUEST = 'INFO_REQUEST';
export const INFO_SUCCESS = 'INFO_SUCCESS';
export const INFO_FAILURE = 'INFO_FAILURE';

export const requestInfo = () => {
    return {
        type: INFO_REQUEST
    }
};

const info = (state, action) => {
    switch(action.type){
        case INFO_REQUEST:
            return {
                ...state,
            };
        case INFO_SUCCESS:
            return {
                ...state,
                data: action.data
            };
        case INFO_FAILURE:
            return {
                ...state,
                data: null
            };
        default:
            return Object.assign({}, state);
    }
};

export default info;