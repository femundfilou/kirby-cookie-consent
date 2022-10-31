<script lang="ts">
  /*--------------------------------------------------------------
  # Import
  --------------------------------------------------------------*/
  import { onMount, afterUpdate } from 'svelte'
  import { addMessages, init, t, isLoading } from 'svelte-i18n';
  import { fly } from 'svelte/transition'
  import type { CategoryI, OptionsI, PolicyI, TranslationI } from "../types"
  import Cookie from 'js-cookie'
  import Start from './views/Start.svelte'
  import Settings from './views/Settings.svelte'
  /*--------------------------------------------------------------
  # Vars
  --------------------------------------------------------------*/
  export let options: OptionsI
  export let policies: PolicyI[]
  export let categories: CategoryI[]
  export let translations: { [key: string] : TranslationI }

  let modalOpen = false
  let settingsOpen = false
  let translation: TranslationI
  let requiredCategories = categories.filter((c) => policies.filter((p) => p.category === c.id).length === 0).map(r => r.id);
  let userSelection = []

  try {
    if(!translations) {
      throw new Error("Cookie Consent: Translations missing.");
    }
  } catch (error) {
    console.error(error.message)
  }
  /*--------------------------------------------------------------
  # Methods
  --------------------------------------------------------------*/
  let addTranslations = () => {
    Object.entries(translations).forEach(([code, translation]) => {
      addMessages(code, translation);
    });
    init({
      fallbackLocale: 'en',
      initialLocale: options['locale'] ?? 'en',
    });
  }
  let acceptAll = () => {
    modalOpen = false
    Cookie.set(
      options.cookieName,
      JSON.stringify(policies.map((p) => p.id)),
      {
        expires: options.expires,
        sameSite: 'Strict'
      }
    )
    location.reload()
  }
  let acceptRequired = () => {
    modalOpen = false
    Cookie.set(options.cookieName, JSON.stringify([...requiredCategories]), {
      expires: options.expires,
      sameSite: 'Strict'
    })
  }
  let saveSelection = (event) => {
    const userSelection: string[] = event.detail
    Cookie.set(options.cookieName, JSON.stringify(userSelection), {
      expires: options.expires,
      sameSite: 'Strict'
    })
    modalOpen = false
    location.reload()
  }
  let openSettings = () => {
    modalOpen = true
    settingsOpen = true
    return true
  }
  let openStart = () => {
    modalOpen = true
    settingsOpen = false
  }
  let getConsent = () => {
    const consent: string = Cookie.get(options.cookieName)
    if (!consent) return null
    return JSON.parse(consent) as string[]
  }
  /*--------------------------------------------------------------
  # AfterUpdate Hook
  --------------------------------------------------------------*/
  afterUpdate(() => {
    if (modalOpen && options.blockPage) {
      document.body.classList.add('cc-open')
    } else {
      document.body.classList.remove('cc-open')
    }
  })
  /*--------------------------------------------------------------
  # Window
  --------------------------------------------------------------*/
  window.CookieConsent = {
    policies: policies.map((p) => p.id),
    getUserConsent: getConsent,
    openSettings: openSettings
  }
  /*--------------------------------------------------------------
  # onMount Hook
  --------------------------------------------------------------*/
  onMount(() => {
    if(!translations) return
    addTranslations()
    userSelection = getConsent()
    if (!userSelection) {
      setTimeout(() => {
        modalOpen = true
      }, 400)
    }
  })
</script>
{#if !$isLoading}
{#if modalOpen}
  {#if options.blockPage}
    <div class="cookie-consent__inner__background" />
  {/if}
  <div
    class="cookie-consent__inner {options.position === 'center'
      ? 'cookie-consent__inner--centered'
      : ''}"
    transition:fly={{ duration: 200, y: 100 }}
  >
    {#if settingsOpen}
      <Settings
        {categories}
        {policies}
        {requiredCategories}
        {userSelection}
        on:openStart={openStart}
        on:saveSelection={saveSelection}
      >
        <p class="cc_title"><strong>{$t('femundfilou.cookie-consent.settings.headline')}</strong></p>
        <p>
          {$t('femundfilou.cookie-consent.settings.text')}
        </p>
      </Settings>
    {:else}
      <Start
        {translation}
        on:acceptAll={acceptAll}
        on:acceptRequired={acceptRequired}
        on:openSettings={openSettings}
      >
        <p class="cc_title"><strong>{$t('femundfilou.cookie-consent.start.headline')}</strong></p>
        <p>
          {$t('femundfilou.cookie-consent.start.text')}
        </p>
      </Start>
    {/if}
  </div>
{/if}
{/if}

<style>
  :root {
    --cc-primary-color: hsl(103, 88%, 47%);
    --cc-primary-color-invert: white;
    --cc-primary-color-dark: hsl(103, 88%, 34%);
    --cc-primary-color-dark-invert: white;
    --cc-secondary-color: lightgray;
    --cc-secondary-color-invert: black;
    --cc-secondary-color-dark: rgb(161, 160, 160);
    --cc-secondary-color-dark-invert: black;
    --cc-background: white;
    --cc-text: black;
    --cc-overlay-background: rgba(255, 255, 255, 0.5);
    --cc-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    --cc-font-size: 14px;
  }

  :global(#cookie-consent) {
    z-index: 999;
  }

  :global(body.cc-open) {
    height: 100vh;
    overflow-y: hidden;
  }

  .cc_title {
    font-size: 1.25em;
  }

  .cookie-consent__inner__background {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: var(--cc-overlay-background);
  }

  .cookie-consent__inner {
    position: fixed;
    z-index: 3;
    bottom: 2em;
    right: 2em;
    width: 100%;
    max-width: 560px;
    max-height: 100vh;
    overflow-y: scroll;
    padding: 2em;
    font-family: var(--cc-font-family);
    font-size: var(--cc-font-size);
    background: var(--cc-background);
    border-radius: 0.2em;
    box-shadow: 0 0 2.3em -0.2em rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
  }

  @media screen and (max-width: 560px) {
    .cookie-consent__inner {
      bottom: 0;
      right: 0;
    }
  }

  .cookie-consent__inner.cookie-consent__inner--centered {
    bottom: auto;
    right: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :global(.cc__main__header) {
    padding-bottom: 0.5em;
  }
  :global(.cc__main__footer) {
    padding-top: 1em;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    width: 100%;
    grid-gap: 0.5em;
  }

  :global(.cc__button) {
    appearance: none;
    background-color: var(--cc-secondary-color);
    border: 1px solid var(--cc-secondary-color);
    color: var(--cc-secondary-color-invert);
    outline: none;
    padding: 0.5em 1em;
    border-radius: 0.2em;
    cursor: pointer;
    transition: all 0.15s ease-in;
    box-sizing: border-box;
    grid-row: span 1;
    font-family: var(--cc-font-family);
    font-size: 0.9em;
    display: block;
  }

  :global(button.cc__button:hover),
  :global(button.cc__button:focus),
  :global(button.cc__button:active),
  :global(button.cc__button:visited) {
    background-color: var(--cc-secondary-color-dark);
    border-color: var(--cc-secondary-color-dark);
  }

  :global(button.cc__button.cc__button--accept:hover),
  :global(button.cc__button.cc__button--accept:focus),
  :global(button.cc__button.cc__button--accept:active),
  :global(button.cc__button.cc__button--accept:visited) {
    background-color: var(--cc-primary-color-dark);
    border-color: var(--cc-primary-color-dark);
  }

  :global(button.cc__button.cc__button--settings) {
    grid-column: 1/3;
    background-color: transparent;
  }

  :global(button.cc__button.cc__button--decline) {
    grid-column: 1/2;
  }

  :global(button.cc__button.cc__button--accept) {
    grid-column: 2/3;
    background-color: var(--cc-primary-color);
    border-color: var(--cc-primary-color);
    color: var(--cc-primary-color-invert);
  }
</style>
