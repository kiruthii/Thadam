export const formatUrl = (url) => {
  if (!url) return "";

  const trimmed = url.trim();

  if (trimmed.startsWith("http")) {
    return trimmed;
  }

  return `https://${trimmed}`;
};

export const formatEmail = (email) => {
  if (!email) return "";
  return `mailto:${email.trim()}`;
};

export const formatPhone = (phone) => {
  if (!phone) return "";
  return `tel:${phone.trim()}`;
};

export const extractUrlId = (url) => {
  if (!url) return "";

  const trimmed = url.trim();

  const perfectUrl = trimmed.startsWith("http")
    ? trimmed
    : `https://${trimmed}`;

  try {
    const parsed = new URL(perfectUrl);
    const path = parsed.pathname.split("/").filter(Boolean);

    if (parsed.hostname.includes("linkedin")) {
      return path[1] || path[0];
    }

    return path[path.length - 1];
  } catch {
    return url;
  }
};
