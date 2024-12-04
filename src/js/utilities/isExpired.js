export function isExpired(endsAt) {
  const endDate = new Date(endsAt);
  const now = new Date();

  return endDate <= now;
}
