import { fetchCommon } from "../../services/common/CommonFetcher";

export const COMMENTS = 'COMMENTS';
export const COMMENTS_PENDING = 'COMMENTS_PENDING';
export const COMMENTS_FULFILLED = 'COMMENTS_FULFILLED';
export const COMMENTS_REJECTED = 'COMMENTS_REJECTED';

function fetchCommentsAction() {
    return {
        type: COMMENTS,
        payload: fetchCommon('COMMENTS_SERVICE_URL')
    }
}

export { fetchCommentsAction as fetchComments };