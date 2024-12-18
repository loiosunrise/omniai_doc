// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'OmniAI Docs',
			social: {
				discord: 'https://discord.gg/DSGHSMCv2H'
			},
			sidebar: [
				{ label: '介绍', link: '/introduction/' },
				{ label: '使用指导', link: '/guide/' },
				{ label: '计费方式与模型定价', link: '/model_price/' },
			],
		}),
	],
});
