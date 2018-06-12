import {fetchCommon} from "../../services/common/CommonFetcher";

export const SERVICES = 'SERVICES';
export const SERVICES_PENDING = 'SERVICES_PENDING';
export const SERVICES_FULFILLED = 'SERVICES_FULFILLED';
export const SERVICES_REJECTED = 'SERVICES_REJECTED';

export const SERVICE = 'SERVICE';
export const SERVICE_PENDING = 'SERVICE_PENDING';
export const SERVICE_FULFILLED = 'SERVICE_FULFILLED';
export const SERVICE_REJECTED = 'SERVICE_REJECTED';

function fetchServicesAction() {
    return {
        type: SERVICES,
        payload: fetchCommon('SERVICES_SERVICE_URL')
    }
}
function fetchServiceByIdAction(serviceId) {
    return {
        type: SERVICE,
        payload: fetchCommon('SERVICES_SERVICE_URL', null, `/${serviceId}`)
    }
}

export { fetchServicesAction as fetchServices };
export { fetchServiceByIdAction as fetchServiceById };