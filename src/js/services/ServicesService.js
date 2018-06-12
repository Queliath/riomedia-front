import fetch from 'cross-fetch';

export const fetchServices = async () => {
    const response = await fetch(`http://localhost:8081/rest/services`);
    return response.json();
};

export const fetchServiceById = async (serviceId) => {
    const response = await fetch(`http://localhost:8081/rest/services/` + serviceId);
    return response.json();
};