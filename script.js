const zones = {
  bruxelles: "Europe/Brussels",
  norfolk: "America/New_York",
  bucuresti: "Europe/Bucharest",
  utc: "UTC"
};

function formatTime(date, timeZone) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(date);
}

function updateClocks() {
  const now = new Date();

  for (const [id, tz] of Object.entries(zones)) {
    document.getElementById(id).textContent = formatTime(now, tz);
  }
}

updateClocks();
setInterval(updateClocks, 1000);
