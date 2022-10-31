<script lang="ts">
  /*--------------------------------------------------------------
  # Imports
  --------------------------------------------------------------*/
  import { createEventDispatcher } from 'svelte'
  import { t, isLoading } from "svelte-i18n"
  /*--------------------------------------------------------------
  # Vars
  --------------------------------------------------------------*/
  const dispatch = createEventDispatcher()
</script>
{#if !$isLoading}
<div class="cc__main__header">
  <slot />
</div>
<div class="cc__main__footer">
  <button
    class="cc__button cc__button--decline"
    on:click={() => {
      dispatch('acceptRequired')
    }}>{$t('femundfilou.cookie-consent.buttons.decline')}</button
  >
  <button
    class="cc__button cc__button--accept"
    on:click={() => {
      dispatch('acceptAll')
    }}>{$t('femundfilou.cookie-consent.buttons.acceptall')}</button
  >
  <button
    class="cc__button cc__button--settings"
    on:click={() => {
      dispatch('openSettings')
    }}>{$t('femundfilou.cookie-consent.buttons.settings')}</button
  >
</div>
{/if}