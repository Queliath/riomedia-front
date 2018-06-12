import { fetchCommon } from "../../services/common/CommonFetcher";

export const CLIENTS = 'CLIENTS';
export const CLIENTS_PENDING = 'CLIENTS_PENDING';
export const CLIENTS_FULFILLED = 'CLIENTS_FULFILLED';
export const CLIENTS_REJECTED = 'CLIENTS_REJECTED';

function fetchClientsAction() {
  return {
    type: CLIENTS,
    payload: fetchCommon('CLIENTS_SERVICE_URL')
  }
}

export { fetchClientsAction as fetchClients };