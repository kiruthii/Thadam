export const formatUrl = (url) => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
};

export const formatEmail = (email) => {
  if (!email) return "";
  return `mailto:${email}`;
};

export const formatPhone = (phone) => {
  if (!phone) return "";
  return `tel:${phone}`;
};

export const extractUrlId = (url) => {
  if (!url) return "";

  const perfectUrl = url.startsWith("http") ? url : `https://${url}`;

  try {
    const parsed = new URL(perfectUrl);
    const path = parsed.pathname.split("/").filter(Boolean);

    if (parsed.hostname.includes("linkedin")) {
      return path[1] || path[0]; // skip "in"
    }

    return path[path.length - 1];
  } catch {
    return url;
  }
};
