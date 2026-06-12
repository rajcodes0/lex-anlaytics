/**
 * utils/formatters.js
 * Formatting helpers used across the app.
 */

export function formatDate(dateInput) {
  if (!dateInput) return "";
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatRelativeDate(dateInput) {
  if (!dateInput) return "";
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return "";
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000; // seconds
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return formatDate(d);
}

export function getRiskColor(score) {
  if (score <= 3) return "var(--risk-green)";
  if (score <= 6) return "var(--risk-yellow)";
  return "var(--risk-red)";
}

export function getRiskLabel(score) {
  if (score <= 3) return "Low Risk";
  if (score <= 6) return "Medium Risk";
  return "High Risk";
}

export function getRiskBadgeClass(level) {
  // level: 'green' | 'yellow' | 'red'
  switch (level) {
    case "green":
      return "badge-green";
    case "yellow":
      return "badge-yellow";
    case "red":
      return "badge-red";
    default:
      return "badge-muted";
  }
}

export function truncate(str = "", n = 100) {
  if (!str) return "";
  return str.length > n ? str.slice(0, n).trimEnd() + "…" : str;
}
