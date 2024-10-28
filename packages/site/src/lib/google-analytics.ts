import { GTAG_ID } from "./constants";

export const initGoogleAnalytics = (): void => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag(..._: unknown[]) {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', GTAG_ID);
};
