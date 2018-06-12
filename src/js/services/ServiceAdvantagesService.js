import fetch from 'cross-fetch';

export const fetchServiceAdvantages = async (serviceId) => {
    const response = await fetch(`http://localhost:8081/rest/services/` + serviceId + `/advantages`);
    return response.json();
};