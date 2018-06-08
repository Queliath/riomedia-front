import fetch from 'cross-fetch';

export const fetchBasicInfo = async () => {
  const response = await fetch(`http://localhost:8081/rest/basic-info`);
  return response.json();
};