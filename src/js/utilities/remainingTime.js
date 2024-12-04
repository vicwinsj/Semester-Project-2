export function calculateTimeRemaining(endsAt) {
  const endDate = new Date(endsAt);
  const now = new Date();

  const timeDifference = endDate - now;

  if (timeDifference <= 0) {
    return "Expired";
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  return "Ends in " + `${days} d ${hours} h ${minutes} min`;
}
