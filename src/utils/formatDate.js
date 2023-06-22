export function formatTime(timestamp) {
  if (typeof timestamp !== "string") {
    const date = new Date(timestamp);
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    return date.toLocaleTimeString(undefined, options);
  } else {
    return "Choose Time";
  }
}
export function formatDate(timestamp) {
   if (typeof timestamp !== "string") {
     const date = new Date(timestamp);
     return date.toLocaleDateString();
   } else {
     return "";
   }
}
