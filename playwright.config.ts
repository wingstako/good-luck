import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testMatch: '**/?(*.)+(spec|test).[tj]s?(x)',
	testDir: 'tests'
};

export default config;
