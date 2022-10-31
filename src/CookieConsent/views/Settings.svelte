<script lang="ts">
  import type { CategoryI, PolicyI } from 'src/types';
  /*--------------------------------------------------------------
  # Imports
  --------------------------------------------------------------*/
  import { createEventDispatcher } from 'svelte'
  import { isLoading, t } from "svelte-i18n"
  /*--------------------------------------------------------------
  # Vars
  --------------------------------------------------------------*/
  const dispatch = createEventDispatcher()
  export let policies: PolicyI[]
  export let categories: CategoryI[]
  export let requiredCategories: string[]
  export let userSelection: string[]
  let currentUserSelection = !userSelection || userSelection?.length === 0 ? [...requiredCategories] : [...userSelection]
  /*--------------------------------------------------------------
  # Methods
  --------------------------------------------------------------*/
  let updateUserSelection = (event) => {
    const selected = event.target.checked
    const policyId = event.target.dataset.policyId
    if (selected) {
      currentUserSelection.push(policyId)
    } else {
      currentUserSelection.splice(currentUserSelection.indexOf(policyId), 1)
    }
  }
</script>

{#if !$isLoading}
<div class="cc__main__header">
  <slot />
</div>
<div class="cc__main__content">
  {#if categories}
    {#each categories as category}
      <div class="cc__category">
        <p><strong>{category.label}</strong></p>
        <p>{category.description}</p>
        {#each policies.filter((p) => p.category === category.id) as policy}
          <div class="cc__policy">
            <div class="cc__policy__switch">
              <input
                data-policy-id={policy.id}
                class="cc__policy__switchinput"
                id={`ccp--${policy.id}`}
                type="checkbox"
                checked={currentUserSelection.indexOf(policy.id) > -1}
                on:input={updateUserSelection}
              />
              <label
                class="cc__policy__switchlabel"
                for={`ccp--${policy.id}`}
                aria-label={policy.label}
              />
            </div>
            <div class="cc__policy__content">
              <label for={`ccp--${policy.id}`}>
                <strong>{policy.label}</strong>
              </label>
              <p>{policy.description}</p>
            </div>
          </div>
        {/each}
      </div>
    {/each}
  {/if}
</div>
<div class="cc__main__footer">
  <button
    class="cc__button cc__button--decline"
    on:click={() => {
      dispatch('openStart')
    }}
  >
    {$t('femundfilou.cookie-consent.buttons.cancel')}
  </button>
  <button
    class="cc__button cc__button--accept"
    on:click={() => {
      dispatch('saveSelection', currentUserSelection)
    }}
  >
    {$t('femundfilou.cookie-consent.buttons.save')}
  </button>
</div>
{/if}

<style>
  .cc__main__content {
    padding: 2em 0;
  }

  .cc__category + .cc__category {
    margin-top: 1em;
    padding-top: 1em;
    border-top: 1px solid var(--cc-secondary-color);
  }

  .cc__policy {
    font-size: 0.8em;
    padding-top: 0.8em;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .cc__policy__switch {
    flex: 0 0 4em;
    padding-top: 0.2em;
    display: flex;
  }

  .cc__policy__content {
    flex: 1;
  }

  input[type='checkbox'].cc__policy__switchinput {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
  }

  label.cc__policy__switchlabel {
    cursor: pointer;
    text-indent: -9999px;
    width: 3em;
    height: 1.5em;
    background: var(--cc-secondary-color);
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label.cc__policy__switchlabel:after {
    content: '';
    position: absolute;
    top: 0.2em;
    left: 0.2em;
    width: 1.1em;
    height: 1.1em;
    background: var(--cc-background);
    border-radius: 1.1em;
    transition: 0.3s;
  }

  input.cc__policy__switchinput:checked + label.cc__policy__switchlabel {
    background: var(--cc-primary-color);
  }

  input.cc__policy__switchinput:checked + label.cc__policy__switchlabel:after {
    left: calc(100% - 0.2em);
    transform: translateX(-100%);
  }

  label.cc__policy__switchlabel:active:after {
    width: 2em;
  }
</style>
