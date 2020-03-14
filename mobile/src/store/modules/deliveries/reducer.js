import produce from 'immer';

const INITIAL_STATE = {
  docs: [],
  currentPage: 1,
  status: null,
  totalPages: null,
  total: null,
  loading: false,
};

export default function deliveries(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliveries/REQUEST': {
        draft.loading = true;
        break;
      }

      case '@deliveries/SUCCESS': {
        draft.docs = [...action.payload.oldDocs, ...action.payload.docs];
        draft.currentPage = action.payload.currentPage;
        draft.totalPages = action.payload.pages;
        draft.total = action.payload.total;
        draft.status = action.payload.status;
        draft.loading = false;
        break;
      }

      case '@deliveries/FAILURE': {
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.docs = [];
        draft.currentPage = 1;
        draft.totalPages = null;
        draft.total = null;
        draft.status = null;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
