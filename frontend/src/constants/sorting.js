export const SORT_OPTION = {
  PRICE_ASC: 'PRICE_ASC',
  PRICE_DESC: 'PRICE_DESC',
  NEWEST: 'NEWEST',
  OLDEST: 'OLDEST',
  RATING: 'RATING',
  POPULARITY: 'POPULARITY',
  NAME_ASC: 'NAME_ASC',
};

export const SORT_LABELS = {
  [SORT_OPTION.PRICE_ASC]: 'Prix croissant',
  [SORT_OPTION.PRICE_DESC]: 'Prix d\u00E9croissant',
  [SORT_OPTION.NEWEST]: 'Plus r\u00E9cents',
  [SORT_OPTION.OLDEST]: 'Plus anciens',
  [SORT_OPTION.RATING]: 'Meilleures notes',
  [SORT_OPTION.POPULARITY]: 'Popularit\u00E9',
  [SORT_OPTION.NAME_ASC]: 'Nom A\u2013Z',
};

export const SORT_PARAMS = {
  [SORT_OPTION.PRICE_ASC]: { sortBy: 'price', order: 'asc' },
  [SORT_OPTION.PRICE_DESC]: { sortBy: 'price', order: 'desc' },
  [SORT_OPTION.NEWEST]: { sortBy: 'createdAt', order: 'desc' },
  [SORT_OPTION.OLDEST]: { sortBy: 'createdAt', order: 'asc' },
  [SORT_OPTION.RATING]: { sortBy: 'rating', order: 'desc' },
  [SORT_OPTION.POPULARITY]: { sortBy: 'popularity', order: 'desc' },
  [SORT_OPTION.NAME_ASC]: { sortBy: 'name', order: 'asc' },
};

export default SORT_OPTION;
