interface Window {
  CookieConsent: {
    openSettings: () => boolean
    getUserConsent: () => string[]
    policies: string[]
  };
}