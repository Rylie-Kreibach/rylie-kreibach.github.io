export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
    
    plugins: [{ src: '~/plugins/vue-plyr.client.js', ssr: false }],
    build: {
      rollupOptions: {
        // external: ["vue-plyr"],
      },
    },
    vite: {
      optimizeDeps: {
        include: ["vue-plyr"],
      },
    },
    primevue: {
        /* Configuration */
        components: {
            prefix: "Prime",
        },
        options: {
            ripple: true,
            inputVariant: "filled",
        },
        usePrimeVue: true,        
        importTheme: { from: "@/themes/site-theme.js" },
    },
    css: ["primeicons/primeicons.css"],
    compatibilityDate: "2024-10-21",
    // nuxt.config.js
    
    router: {
      base: '/rylie-kreibach.github.io/'
    },
   
    css: [
      '@/assets/fancy.css'
    ],
  
   
});


