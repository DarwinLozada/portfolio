import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import astroI18next from 'astro-i18next';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), astroI18next({
    baseLanguage: 'en',
    i18next: {
      debug: false,
      // convenient during development to check for missing keys
      supportedLngs: ['en', 'es']
    }
  })]
});