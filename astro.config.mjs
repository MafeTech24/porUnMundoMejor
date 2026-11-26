import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Dirección pública del sitio: se usa para las vistas previas de WhatsApp y redes,
// las direcciones canónicas, el mapa del sitio y los datos para Google.
// Cuando se conecte el dominio definitivo (porunmundomejor.org.ar), cambiarla acá.
const SITE = 'https://porunmundomejor.vercel.app';

export default defineConfig({
  site: SITE,
  integrations: [
    tailwind(),
    sitemap({
      // Páginas que no deben aparecer en buscadores
      filter: (page) => !page.includes('/programas/comunidad-terapeutica'),
    }),
  ],
  output: 'static',
});