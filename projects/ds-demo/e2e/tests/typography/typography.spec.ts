import { test } from '@playwright/test';

import { A11y } from '../../modules/a11y.po';
import { VisualRegression } from '../../modules/visual-regression.po';

test.describe('typography', () => {
	test('wcag and visual regression', async ({ page }) => {
		await page.goto('/typography');

		await VisualRegression.check(page, 'typography');

		await A11y.analyze(page);
	});
});
