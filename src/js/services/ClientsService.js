import fetch from 'cross-fetch';

export const fetchClients = async () => {
    const response = await fetch(`http://localhost:8081/rest/clients`);
    return response.json();
};