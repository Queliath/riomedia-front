import fetch from 'cross-fetch';

export const fetchServiceExamples = async (serviceId) => {
    const response = await fetch(`http://localhost:8081/rest/services/` + serviceId + `/examples`);
    return response.json();
};