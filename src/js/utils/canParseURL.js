/**
 * Checks if a URL can be parsed.
 *
 * @param {string} url The URL to be parsed.
 * @returns {boolean} True if the URL can be parsed, false otherwise.
 */
export const canParseURL = url => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
