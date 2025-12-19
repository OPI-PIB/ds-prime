import { expect, Page } from '@playwright/test';

interface Options {
	timeout: number;
	fullPage: boolean;
}

export class VisualRegression {
	static async check(page: Page, name: string, options: Partial<Options> = {}) {
		const defaultOptions: Options = {
			timeout: 10_000,
			fullPage: true
		};

		const mergedOptions: Options = { ...defaultOptions, ...options };

		await expect(page).toHaveScreenshot(`${name}.png`, {
			mask: [page.locator('.e2e-blackout')],
			fullPage: mergedOptions.fullPage,
			maxDiffPixelRatio: 0,
			timeout: mergedOptions.timeout,
			animations: 'disabled'
		});
	}
}
