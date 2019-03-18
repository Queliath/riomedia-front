import {fetchCommon} from "../../services/common/CommonFetcher";

export const SERVICE_ADVANTAGES = 'SERVICE_ADVANTAGES';
export const SERVICE_ADVANTAGES_PENDING = 'SERVICE_ADVANTAGES_PENDING';
export const SERVICE_ADVANTAGES_FULFILLED = 'SERVICE_ADVANTAGES_FULFILLED';
export const SERVICE_ADVANTAGES_REJECTED = 'SERVICE_ADVANTAGES_REJECTED';

function fetchServiceAdvantagesAction(serviceId) {
  return {
    type: SERVICE_ADVANTAGES,
    payload: fetchCommon('SERVICES_SERVICE_URL', null, `/${serviceId}/advantages`)
  }
}

export { fetchServiceAdvantagesAction as fetchServiceAdvantages };