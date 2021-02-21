import {FETCH_FEATURED_QUESTIONS, FETCH_START, FETCH_USERDATA, FETCH_USER_QUESTIONS, FETCH_USERTAGS} from "./Actions";
import {listFeaturedQuestions, fetchUserData, fetchUserQuestions, fetchUserTopTags} from "../Api/apiMethods";

export const getQuestionList = () => async (dispatch) => {
    dispatch({type: FETCH_START});
    
    const resp = await listFeaturedQuestions();
    dispatch({
        questions: resp.items,
        type: FETCH_FEATURED_QUESTIONS
    })
}

export const getUserData = (userId) => async (dispatch) => {
    const resp = await fetchUserData(userId);
    dispatch({
        userData: resp.items,
        type: FETCH_USERDATA
    })
}

export const getUserQuestions = (userId) => async (dispatch) => {
    dispatch({type: FETCH_START});
    
    const resp = await fetchUserQuestions(userId);
    dispatch({
        questions: resp.items,
        type: FETCH_USER_QUESTIONS
    })
}

export const getUserTopTags = (userId) => async (dispatch) => {
    const resp = await fetchUserTopTags(userId);
    dispatch({
        topTags: resp.items,
        type: FETCH_USERTAGS
    })
}