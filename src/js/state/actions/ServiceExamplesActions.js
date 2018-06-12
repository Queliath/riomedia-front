import { fetchServiceExamples } from '../../services/ServiceExamplesService';

export const SERVICE_EXAMPLES = 'SERVICE_EXAMPLES';
export const SERVICE_EXAMPLES_PENDING = 'SERVICE_EXAMPLES_PENDING';
export const SERVICE_EXAMPLES_FULFILLED = 'SERVICE_EXAMPLES_FULFILLED';
export const SERVICE_EXAMPLES_REJECTED = 'SERVICE_EXAMPLES_REJECTED';

function fetchServiceExamplesAction(serviceId) {
    return {
        type: SERVICE_EXAMPLES,
        payload: fetchServiceExamples(serviceId)
    }
}

export { fetchServiceExamplesAction as fetchServiceExamples };