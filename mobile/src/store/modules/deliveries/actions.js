export function deliveriesRequest(page = 1, oldDocs = [], status = 'all') {
  return {
    type: '@deliveries/REQUEST',
    payload: {page, oldDocs, status},
  };
}

export function deliveriesSuccess(
  docs,
  pages,
  total,
  currentPage,
  oldDocs,
  status
) {
  return {
    type: '@deliveries/SUCCESS',
    payload: {docs, pages, total, currentPage, oldDocs, status},
  };
}

export function deliveriesFailure() {
  return {
    type: '@deliveries/FAILURE',
  };
}
