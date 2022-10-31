<?php

use Fefi\CookieConsent\Category;
use Fefi\CookieConsent\Policy;
use Kirby\Toolkit\A;
use Kirby\Toolkit\Str;

if (!isset($policies)) {
  $policies = new Kirby\Toolkit\Collection([]);
  foreach ($site->cookiepolicies()->toStructure() as $policy) :
    $policies->append(new Policy(
      $policy->label()->value(),
      Str::unhtml($policy->description()->value()),
      $policy->id(),
      $policy->category()->value(),
    ));
  endforeach;
  $policies = $policies->toArray();
}

if (!isset($categories)) {
  $categories = new Kirby\Toolkit\Collection([]);
  foreach ($site->cookiecategories()->toStructure() as $category) :
    $categories->append(new Category(
      $category->label()->value(),
      Str::unhtml($category->description()->value()),
      $category->id()
    ));
  endforeach;
  $categories = $categories->toArray();
}

$options = option('femundfilou.cookie-consent');

if(isset($cookieName)) {
  $options['cookieName'] = $cookieName;
}
if(isset($blockPage)) {
  $options['blockPage'] = $blockPage;
}
if(isset($expires)) {
  $options['expires'] = $expires;
}
if(isset($locale)) {
  $options['locale'] = $locale;
}
if(isset($position)) {
  $options['position'] = $position;
}
if(isset($autoIncludeJs)) {
  $options['autoIncludeJs'] = $autoIncludeJs;
}

$translations = [];
foreach ($kirby->translations() as $code => $translation) {
  $pluginTranslation = A::filter($translation->data(), function($translation, $key) { return Str::startsWith($key, 'femundfilou.cookie-consent'); });
  if($pluginTranslation) {
    $translations[$code] = $pluginTranslation;
  }
}
?>
<div id="cookie-consent"
  data-options='<?=json_encode($options)?>'
  data-policies='<?=json_encode($policies)?>'
  data-categories='<?=json_encode($categories)?>'
  data-translations='<?= json_encode($translations)?>'
  ></div>
<?php
if($options['autoIncludeJs']):
  echo js('/media/plugins/femundfilou/cookie-consent/js/cookie-consent.js');
endif;?>