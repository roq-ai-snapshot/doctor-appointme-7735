const mapping: Record<string, string> = {
  appointments: 'appointment',
  customers: 'customer',
  insurances: 'insurance',
  organizations: 'organization',
  profiles: 'profile',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
