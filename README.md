# Cookie Consent

Cookie Consent is a customizable, easy-to-use [Kirby CMS](https://getkirby.com) plugin that manages cookie consents.

## Concept

### Categories

Cookie Consent uses categories to group single policies (or cookies as you wish). Each category is an object with the following entries.

| key     |  type  | value                           |
| :------ | :----: | :------------------------------ |
| `id`    | string | unique string                   |
| `label` | string | Label visible to the user       |
| `desc`  | string | Description visible to the user |

### Policies

A policy needs to be created for each cookie or tool you wish to have user consent for. A policy in an object with the following entries.

| key        |  type  | value                           |
| :--------- | :----: | :------------------------------ |
| `id`       | string | unique string                   |
| `label`    | string | Label visible to the user       |
| `desc`     | string | Description visible to the user |
| `category` | string | must match with an category id  |

## Installation

### Via composer

```bash
composer require femundfilou/kirby-cookie-consent
```

## Usage

1. Add the section to your `site.yml`  to get an interface to provide policies and categories.

```yml
  sections:
    cookieconsent: sections/cookie-consent
```

2. Add this snippet to the footer of your website.

```php

<?php snippet('cookie-consent'); ?>

```


## Handling consent

You need the handle the initialisation of your scripts and tools after consent of a user yourself.
For this, you can use the `CookieConsent.getUserConsent()` function to return the policy ids, the user has given consent to. After given consent, the site will reload.

_Example_

```html
<script async>
document.addEventListener("DOMContentLoaded", function() {
  if (window.CookieConsent.getUserConsent().indexOf("matomo") > -1) {
   ... Activate analytics
  }
});
</script>
```

## Javascript Methods

A global object is added to window. You can use it by calling `CookieConsent` or `window.CookieConsent`. The object exposes the following entries.

| key            |    type    | description                                                 |
| :------------- | :--------: | :---------------------------------------------------------- |
| policies       |  `array`   | Return all possible policy ids                              |
| getUserConsent | `function` | Returns an `array` of policy ids, the user has consented to |
| openSettings   | `function` | Opens the settings page.                                    |

## Configuration

You can override the default configuration in your `site/config/config.php` or on the snippet itself. The following options are provided:

| name          |  type   |     default      |       possible values        | description                                                                                                      |
| :------------ | :-----: | :--------------: | :--------------------------: | :--------------------------------------------------------------------------------------------------------------- |
| locale        | string  |      `'en'`      |        `'en'`, `'de'`        | Language used in the cookie banner. You can also [add your own translation](#overwriting-or-adding-translations) |
| expires       | number  |      `365`       |         any integer          | Number in days, the cookie banner shows up again.                                                                |
| position      | string  | `'bottom-right'` | `'center'`, `'bottom-right'` | Position of banner.                                                                                              |
| blockPage     | boolean |     `false`      |       `true`, `false `       | Adds a layer to block interaction with the page.                                                                 |
| autoIncludeJs | boolean |      `true`      |       `true`, `false `       | Automatically add necessary javascript assets.                                                                   |


### Overwrite in `config.php`

```php
return [
  'femundfilou.cookie-consent' => [
    'cookieName' => 'cc_policies',
    'blockPage' => false,
    'expires' => 365,
    'locale' => 'en',
    'position' => 'bottom-right',
    'autoIncludeJs' => true
  ]
];
```

### Overwrite on snippet

```php
<?php snippet('cookie-consent', ['locale' => 'de']); ?>
```

## Overwriting or adding translations

Out of the box this plugin provides support for German and English translations. You may overwrite them or add other languages. Look at the kirby docs for more info about how to add [custom language variables](https://getkirby.com/docs/guide/languages/custom-language-variables).

The following variables are provided:

```yml
femundfilou.cookie-consent.start.headline: ""
femundfilou.cookie-consent.start.text: ""
femundfilou.cookie-consent.settings.headline: ""
femundfilou.cookie-consent.settings.text: ""
femundfilou.cookie-consent.buttons.decline: ""
femundfilou.cookie-consent.buttons.cancel: ""
femundfilou.cookie-consent.buttons.save: ""
femundfilou.cookie-consent.buttons.acceptall: ""
femundfilou.cookie-consent.buttons.settings: ""
```



## Styling

Cookie Consent uses CSS Variables. You can overwrite them in your styles.

```css
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
  --cc-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --cc-font-size: 14px;
}
```

### Example overwrite in css

```scss
:root {
  --cc-primary-color: yellow;
}
```

### Example overwrite in scss

Be sure to use `#{$sassVariable}` to use scss variables in css variables.

```scss
:root {
  --cc-primary-color: #{$primary};
}
```
