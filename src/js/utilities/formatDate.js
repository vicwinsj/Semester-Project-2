function formatDate(jsonDate) {
  const date = new Date(jsonDate);

  const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = date.toLocaleString("no-NO", options).replace(",", "");

  return formattedDate;
}

export function creationDate(bid) {
  const jsonCreated = bid.created;
  const createdDate = formatDate(jsonCreated);
  return createdDate;
}
