import { test, expect } from '@playwright/test';

test('Web Input', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/inputs');
    await page.getByRole('spinbutton', { name: 'Input: Number' }).fill('80');
    await page.getByRole('textbox', { name: 'Input: Text' }).fill('Greeting');
    await page.getByRole('textbox', { name: 'Input: Password' }).fill('pwd#456161');
    await page.getByRole('textbox', { name: 'Input: Date' }).fill('2026-05-27');
    await page.getByRole('button', { name: 'Display Inputs' }).click();

    //assertion of Display
    await expect(page.locator('#output-number')).toHaveText('80');
    await expect(page.locator('#output-text')).toHaveText('Greeting');
    await expect(page.locator('#output-password')).toHaveText('pwd#456161');
    await expect(page.locator('#output-date')).toHaveText('2026-05-27');
});