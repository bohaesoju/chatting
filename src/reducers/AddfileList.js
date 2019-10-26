export const ADDFILELIST_REQUEST = 'ADDFILELIST_REQUEST';
export const ADDFILELIST_SUCCESS = 'ADDFILELIST_SUCCESS';
export const ADDFILELIST_FAILURE = 'ADDFILELIST_FAILURE';

const initialState = {
    data: [],
    isFetchAddfileList: false
};

const addfileList = (state = initialState, action) => {
    switch(action.type){
        case ADDFILELIST_REQUEST:
            return {
                ...state,
                isFetchAddfileList: false
            };
        case ADDFILELIST_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFetchAddfileList: true
            };
        case ADDFILELIST_FAILURE:
            return {
                ...state,
                data: null,
                isFetchAddfileList: false
            };
        default:
            return Object.assign({}, state);
    }
};

export default addfileList;
