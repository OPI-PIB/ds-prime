import { test } from '@playwright/test';

import { A11y } from '../../modules/a11y.po';
import { VisualRegression } from '../../modules/visual-regression.po';

test.describe('components', () => {
	test('button', async ({ page }) => {
		await page.goto('/components/button');

		await VisualRegression.check(page, 'button');

		await A11y.analyze(page);
	});

	test('checkbox', async ({ page }) => {
		await page.goto('/components/checkbox');

		await VisualRegression.check(page, 'checkbox');

		await A11y.analyze(page);
	});

	test('radio', async ({ page }) => {
		await page.goto('/components/radio');

		await VisualRegression.check(page, 'radio');

		await A11y.analyze(page);
	});

	test('text-field', async ({ page }) => {
		await page.goto('/components/text-field');

		await VisualRegression.check(page, 'text-field');

		await A11y.analyze(page);
	});

	test('toggle', async ({ page }) => {
		await page.goto('/components/toggle');

		await VisualRegression.check(page, 'toggle');

		await A11y.analyze(page);
	});
});
