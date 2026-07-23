export const PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;
export const DEFAULT_PAGE = 1;

export const buildPaginationParams = (page = DEFAULT_PAGE, pageSize = PAGE_SIZE) => {
  const safePage = Math.max(1, Math.floor(Number(page)) || DEFAULT_PAGE);
  const safeSize = Math.min(Math.max(1, Math.floor(Number(pageSize)) || PAGE_SIZE), MAX_PAGE_SIZE);
  return { page: safePage, pageSize: safeSize, offset: (safePage - 1) * safeSize };
};
