import { test } from '@playwright/test';

import { A11y } from '../../modules/a11y.po';
import { VisualRegression } from '../../modules/visual-regression.po';

test.describe('colors', () => {
	test('wcag and visual regression', async ({ page }) => {
		await page.goto('/colors');

		await VisualRegression.check(page, 'colors');

		await A11y.analyze(page);
	});
});
