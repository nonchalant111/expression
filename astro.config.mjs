import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://nonchalant111.github.io/expression',
	base: '/expression/',
	integrations: [mdx(), sitemap()],
});
