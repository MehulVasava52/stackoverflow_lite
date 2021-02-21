const base_url = 'https://api.stackexchange.com/2.2';

export const site = 'stackoverflow';

// Question list request or users detail request.
export const RequestType = {
    featuredQuestions : 0,
    userDetails : 1,
    userQuestions: 2,
    userTags: 3
}

export const getQueryUrl = (type, queryParams) => {

    switch (type) {
        case RequestType.featuredQuestions :
            return `${base_url}/questions/featured?site=${site}`;
        case RequestType.userDetails:
            return `${base_url + '/users/' + queryParams.id}?site=${site}`;
        case RequestType.userQuestions:
            return `${base_url + '/users/' + queryParams.id}/questions?site=${site}`;
        case RequestType.userTags:
            return `${base_url + '/users/' + queryParams.id}/top-question-tags?site=${site}`;
        default:
            return base_url;
    }
}