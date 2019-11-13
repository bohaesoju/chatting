export const ADDFILELIST_REQUEST = 'ADDFILELIST_REQUEST';
export const ADDFILELIST_SUCCESS = 'ADDFILELIST_SUCCESS';
export const ADDFILELIST_FAILURE = 'ADDFILELIST_FAILURE';
export const SEND_TO_IMAGE = 'SEND_TO_IMAGE';
export const SEND_TO_TEXT = 'SEND_TO_TEXT';
export const SEND_TO_TEXTIMAGE = 'SEND_TO_TEXTIMAGE';

export const sendToImage = (i) => {
    return {
        type: SEND_TO_IMAGE,
        index: i,
    }
};

export const sendToText = (i) => {
    return {
        type: SEND_TO_TEXT,
        index: i,
    }
};

export const sendToTextImage = (i) => {
    return {
        type: SEND_TO_TEXTIMAGE,
        index: i,
    }
};

const initialState = {
    data: [],
    isFetchAddfileList: false,
    id: '',
    textImage: [],
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
        case SEND_TO_IMAGE:
            state.textImage.push(action);
            return {
                ...state,
                // image: action.index
            };
        case SEND_TO_TEXT:
            state.textImage.push(action);
            return {
                ...state,
            };
        default:
            return Object.assign({}, state);
    }
};

export default addfileList;
