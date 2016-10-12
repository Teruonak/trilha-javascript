'use strict';

const HEADER_PROPERTY = 'accept-language';
const DEFAULT_LOCALE = 'en';
const messages = {
    en: require('../i18n/en.json'),
    pt: require('../i18n/pt.json')
}

function getEffectiveLocaleMessages(locales) {
    return messages[getLocale(locales)];
}

function getLocale(locales) {
    let locale = getEffectiveLocale(locales);
    if (hasSubString(locale, 'en')) {
        return 'en';
    }
    if (hasSubString(locale, 'pt')) {
        return 'pt';
    }
    return DEFAULT_LOCALE;
}

function hasSubString(text, subString) {
    return text.indexOf(subString) !== -1;
}

function getEffectiveLocale(locales) {
    let localesData = locales.split(',');
    let effectiveLocale = ['en', 0];
    for (let locale of localesData) {
        let attributes = locale.split(';');
        if (attributes[1] && attributes[1] > effectiveLocale[1]) {
            effectiveLocale = attributes;
            continue;
        } else {
            effectiveLocale = attributes;
            break;
        }
    }
    return effectiveLocale[0];
}

module.exports = (req, res, next) => {
    let locales = req.headers[HEADER_PROPERTY];
    console.log(locales);

    console.log(messages);
    // Locales separados por ',' e propriedades do locale separados por ';'
    // pt-BR,pt;q=0.8,

    req.messages = getEffectiveLocaleMessages(locales);

    next();
};
