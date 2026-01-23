import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !['en', 'es'].includes(locale)) {
        locale = 'en';
    }

    // Static mapping for Turbopack compatibility
    const messages = locale === 'es'
        ? (await import('../messages/es.json')).default
        : (await import('../messages/en.json')).default;

    return {
        locale,
        messages
    };
});
