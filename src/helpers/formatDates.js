export function formatDates(sendedDate) {
  const date = new Date(sendedDate);
  return date.toISOString().split("T")[0];
}
