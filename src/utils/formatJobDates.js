const MONTH_ABBREV = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

function formatMonth(yyyyMm) {
  const [year, month] = yyyyMm.split("-");
  const monthIndex = parseInt(month, 10) - 1;
  return `${MONTH_ABBREV[monthIndex]} ${year}`;
}

function formatJobDateRange(startMonth, endMonth) {
  if (!startMonth) {
    return "";
  }
  const start = formatMonth(startMonth);
  const end =
    endMonth == null || endMonth === undefined
      ? "Present"
      : formatMonth(endMonth);
  return `${start} – ${end}`;
}

module.exports = {formatJobDateRange, formatMonth};
