import { expect, test } from '@playwright/test';

// A test for the home page
test.describe('Home Page', () => {
	test('should render the home page', async ({ page }) => {
		await page.goto('http://localhost:5173');
		const title = await page.title();
		expect(title).toBe('Front-End Developer Portfolio | Ahmed suliman');
		const text = await page.textContent('h1');
		expect(text).toBe('AS');
		const button = await page.click('#btn');
		expect(button).toBeUndefined;
		const button2 = await page.click('#btn');
		expect(button2).toBeUndefined;
	});
});
test('should render the About page', async ({ page }) => {
	await page.goto('http://localhost:5173/about');
	const title = await page.title();
	expect(title).toBe('Front-End Developer Portfolio | Ahmed suliman');
	const text = await page.textContent('h1');
	expect(text).toBe('AS');
        const text2 = await page.textContent('p');
        expect(text2).toBeDefined
});

