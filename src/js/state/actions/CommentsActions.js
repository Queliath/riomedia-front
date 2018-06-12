import { fetchComments } from '../../services/CommentsService';

export const COMMENTS = 'COMMENTS';
export const COMMENTS_PENDING = 'COMMENTS_PENDING';
export const COMMENTS_FULFILLED = 'COMMENTS_FULFILLED';
export const COMMENTS_REJECTED = 'COMMENTS_REJECTED';

function fetchCommentsAction() {
    return {
        type: COMMENTS,
        payload: fetchComments()
    }
}

export { fetchCommentsAction as fetchComments };