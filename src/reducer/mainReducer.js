import {FETCH_FEATURED_QUESTIONS, FETCH_USERDATA, FETCH_USER_QUESTIONS, FETCH_USERTAGS, FETCH_START} from "../actions/Actions";

const initialState = {
    questions: [],
    userData: {},
    topTags: [],
    isLoading: false
};

const mainReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case FETCH_START: 
            return {
                ...initialState,
                isLoading: true
            }

        case FETCH_FEATURED_QUESTIONS:
            return {
                ...state,
                questions: action.questions,
                isLoading: false
            }

        case FETCH_USERDATA:
            return {
                ...state,
                userData: action.userData[0],
                isLoading: false
            }

        case FETCH_USER_QUESTIONS:
            return {
                ...state,
                questions: action.questions,
                isLoading: false
            }

        case FETCH_USERTAGS: 
            return {
                ...state,
                topTags: action.topTags,
                isLoading: false
            }

        default :
           return {...state}
    }
}

export default mainReducer;