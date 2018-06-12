import { fetchServicePriceTable } from '../../services/ServicePriceTablesService';

export const SERVICE_PRICE_TABLE = 'SERVICE_PRICE_TABLE';
export const SERVICE_PRICE_TABLE_PENDING = 'SERVICE_PRICE_TABLE_PENDING';
export const SERVICE_PRICE_TABLE_FULFILLED = 'SERVICE_PRICE_TABLE_FULFILLED';
export const SERVICE_PRICE_TABLE_REJECTED = 'SERVICE_PRICE_TABLE_REJECTED';

function fetchServicePriceTableAction(serviceId) {
    return {
        type: SERVICE_PRICE_TABLE,
        payload: fetchServicePriceTable(serviceId)
    }
}

export { fetchServicePriceTableAction as fetchServicePriceTable };