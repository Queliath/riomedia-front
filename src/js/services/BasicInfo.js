import fetch from 'cross-fetch';

const isError = false;

export const fetchBasicInfo = async () => {
  const response = await fetch(`http://localhost:8081/rest/basic-info`);
  return response.json();
};