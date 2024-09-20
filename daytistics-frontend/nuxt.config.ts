import Lara from '@primevue/themes/lara';
import Nora from '@primevue/themes/nora';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    components: [
        { path: '~/components/daytistic', prefix: 'Daytistic' },
        '~/components',
    ],

    modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxt/test-utils/module', '@pinia/nuxt'],

    nitro: {
        devProxy: {
            '/api': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
            },
        },
    },

    image: {
        dir: 'assets/graphics',
    },
});