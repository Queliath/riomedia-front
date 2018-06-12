import {fetchCommon} from "../../services/common/CommonFetcher";

export const SERVICE_EXAMPLES = 'SERVICE_EXAMPLES';
export const SERVICE_EXAMPLES_PENDING = 'SERVICE_EXAMPLES_PENDING';
export const SERVICE_EXAMPLES_FULFILLED = 'SERVICE_EXAMPLES_FULFILLED';
export const SERVICE_EXAMPLES_REJECTED = 'SERVICE_EXAMPLES_REJECTED';

function fetchServiceExamplesAction(serviceId) {
  return {
    type: SERVICE_EXAMPLES,
    payload: fetchCommon('SERVICES_SERVICE_URL', null, `/${serviceId}/examples`)
  }
}

export { fetchServiceExamplesAction as fetchServiceExamples };