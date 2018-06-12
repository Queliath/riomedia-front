import { fetchCommon } from '../../services/common/CommonFetcher';

export const BASIC_INFO = 'BASIC_INFO';
export const BASIC_INFO_PENDING = 'BASIC_INFO_PENDING';
export const BASIC_INFO_FULFILLED = 'BASIC_INFO_FULFILLED';
export const BASIC_INFO_REJECTED = 'BASIC_INFO_REJECTED';

function fetchBasicInfoAction() {
  return {
    type: BASIC_INFO,
    payload: fetchCommon('BASIC_INFO_URL', 'basicInfo')
  }
}

export { fetchBasicInfoAction as fetchBasicInfo };