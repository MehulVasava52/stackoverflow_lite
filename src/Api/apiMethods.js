import { RequestType, getQueryUrl } from "./apiConstants";

export const listFeaturedQuestions = async () => {
    return await (
        await fetch(getQueryUrl(RequestType.featuredQuestions))
    ).json();
}

export const fetchUserData = async (userId) => {
    return await (
        await fetch(getQueryUrl(RequestType.userDetails, {id : userId}))
    ).json();
}

export const fetchUserQuestions = async (userId) => {
    return await (
        await fetch(getQueryUrl(RequestType.userQuestions, {id : userId}))
    ).json();
}

export const fetchUserTopTags = async (userId) => {
    return await (
        await fetch(getQueryUrl(RequestType.userTags, {id : userId}))
    ).json();
}