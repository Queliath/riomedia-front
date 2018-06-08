import fetch from 'cross-fetch';

export const fetchServiceTypes = async (serviceId) => {
    const response = await fetch(`http://localhost:8081/rest/services/` + serviceId + `/types`);
    return response.json();
};