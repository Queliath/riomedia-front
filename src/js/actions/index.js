import fetch from 'cross-fetch';

export const REQUEST_BASIC_INFO = 'REQUEST_BASIC_INFO';
function requestBasicInfo() {
  return {
    type: REQUEST_BASIC_INFO
  }
}

export const RECEIVE_BASIC_INFO = 'RECEIVE_BASIC_INFO';
function receiveBasicInfo(response) {
  return {
    type: RECEIVE_BASIC_INFO,
    basicInfo: response,
    receivedAt: Date.now(),
  }
}

export function fetchBasicInfo() {
  return function (dispatch) {
    dispatch(requestBasicInfo());
    return fetch(`http://localhost:8081/rest/basic-info`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      ).then(
        json => dispatch(receiveBasicInfo(json))
      );
  }
}