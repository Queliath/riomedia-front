import fetch from 'cross-fetch';

export const fetchServicePriceTable = async (serviceId) => {
    const response = await fetch(`http://localhost:8081/rest/services/` + serviceId + `/price-table`);
    return response.json();
};