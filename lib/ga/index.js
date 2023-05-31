// log the pageview with their URL
export const pageview = (url, gaID) => {
  window.gtag('config', gaID, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};
