export const ROLE = {
  BUYER: 'BUYER',
  SELLER: 'SELLER',
  ADMIN: 'ADMIN',
  DELIVERY: 'DELIVERY',
  SUPPORT: 'SUPPORT',
};

export const ROLE_LABELS = {
  [ROLE.BUYER]: 'Acheteur',
  [ROLE.SELLER]: 'Vendeur',
  [ROLE.ADMIN]: 'Administrateur',
  [ROLE.DELIVERY]: 'Livreur',
  [ROLE.SUPPORT]: 'Support',
};

export const ROLE_HIERARCHY = {
  [ROLE.ADMIN]: 4,
  [ROLE.SUPPORT]: 3,
  [ROLE.SELLER]: 2,
  [ROLE.DELIVERY]: 1,
  [ROLE.BUYER]: 0,
};

export const hasMinimumRole = (userRole, requiredRole) => {
  const userLevel = ROLE_HIERARCHY[userRole] ?? -1;
  const requiredLevel = ROLE_HIERARCHY[requiredRole] ?? Infinity;
  return userLevel >= requiredLevel;
};

export default ROLE;
