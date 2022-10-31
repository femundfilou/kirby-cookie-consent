import { parseJson } from './composables/parseJson'
import CookieConsent from './CookieConsent/CookieConsent.svelte'
const cookieConsentElement = document.getElementById('cookie-consent')
let app
if (cookieConsentElement) {
  app = new CookieConsent({
    target: cookieConsentElement,
    props: {
      options: parseJson(cookieConsentElement.dataset.options, null, 'options'),
      policies: parseJson(cookieConsentElement.dataset.policies, [], 'policies'),
      categories: parseJson(cookieConsentElement.dataset.categories, [], 'categories'),
      translations: parseJson(cookieConsentElement.dataset.translations, [], 'translations'),
    },
  })
}
export default app
