<?php

use Kirby\Cms\App;

@require_once __DIR__ . '/lib/Policy.php';
@require_once __DIR__ . '/lib/Category.php';

App::plugin('femundfilou/cookie-consent', [
    'blueprints' => [
        'sections/cookie-consent' => __DIR__ . '/blueprints/sections/cookie-consent.yml'
    ],
    'options' => [
        'cookieName' => 'cc_policies',
        'blockPage' => false,
        'expires' => 365,
        'locale' => 'en',
        'position' => 'bottom-right',
        'autoIncludeJs' => true
    ],
    'snippets' => [
        'cookie-consent' => __DIR__ . '/snippets/cookie-consent.php',
    ],
    'translations' => [
        'en' => [
            "femundfilou.cookie-consent.start.headline" => "Cookie Management",
            "femundfilou.cookie-consent.start.text" => "We use cookies to run our website and analyze user interaction.",
            "femundfilou.cookie-consent.settings.headline" => "Settings",
            "femundfilou.cookie-consent.settings.text" => "Here you can choose individually, which cookies you wish to consent to.",
            "femundfilou.cookie-consent.buttons.decline" => "Decline",
            "femundfilou.cookie-consent.buttons.cancel" => "Cancel",
            "femundfilou.cookie-consent.buttons.save" => "Save",
            "femundfilou.cookie-consent.buttons.acceptall" => "Accept all",
            "femundfilou.cookie-consent.buttons.settings" => "Edit settings",
        ],
        'de' => [
            "femundfilou.cookie-consent.start.headline" => "Cookie Verwaltung",
            "femundfilou.cookie-consent.start.text" => "Wir verwenden Cookies zum Betrieb der Webseite und zur Analyse des Nutzerverhaltens.",
            "femundfilou.cookie-consent.settings.headline" => "Einstellungen",
            "femundfilou.cookie-consent.settings.text" => "Hier können Sie individuelle Einstellungen treffen, welchen Cookies Sie zustimmen möchten.",
            "femundfilou.cookie-consent.buttons.decline" => "Ablehnen",
            "femundfilou.cookie-consent.buttons.cancel" => "Abbrechen",
            "femundfilou.cookie-consent.buttons.save" => "Speichern",
            "femundfilou.cookie-consent.buttons.acceptall" => "Alle akzeptieren",
            "femundfilou.cookie-consent.buttons.settings" => "Einstellungen bearbeiten",
        ]
    ]
]);
