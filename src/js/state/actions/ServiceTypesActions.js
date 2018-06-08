import { fetchServiceTypes } from '../../services/ServiceTypesService';

export const SERVICE_TYPES = 'SERVICE_TYPES';
export const SERVICE_TYPES_PENDING = 'SERVICE_TYPES_PENDING';
export const SERVICE_TYPES_FULFILLED = 'SERVICE_TYPES_FULFILLED';
export const SERVICE_TYPES_REJECTED = 'SERVICE_TYPES_REJECTED';

function fetchServiceTypesAction(serviceId) {
    return {
        type: SERVICE_TYPES,
        payload: fetchServiceTypes(serviceId)
    }
}

export { fetchServiceTypesAction as fetchServiceTypes };