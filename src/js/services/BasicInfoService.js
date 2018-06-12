import fetch from 'cross-fetch';

export const fetchBasicInfo = async () => {
  let stringBasicInfo = localStorage.getItem('basicInfo');
  let storedBasicInfo = stringBasicInfo ? JSON.parse(stringBasicInfo) : null;
  if (storedBasicInfo) {
    return storedBasicInfo;
  } else {
    const response = await fetch(`http://localhost:8081/rest/basic-info`);
    return response.json();
  }
};