import fetch from 'cross-fetch';

export const fetchComments = async () => {
    const response = await fetch(`http://localhost:8081/rest/comments`);
    return response.json();
};