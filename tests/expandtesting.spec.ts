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

test.describe('Login Page Scenarios', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/login');
    });

    test('Successfull login', async ({ page }) => {
        await page.getByLabel('Username').fill('practice');
        await page.getByLabel('password').fill('SuperSecretPassword!');
        await page.getByRole('button', { name: 'Login' }).click();

        expect(page.url()).toEqual('https://practice.expandtesting.com/secure');
        console.log('user is redirected to the /secure page.');
        await expect(page.locator('#flash')).toHaveText('You logged into a secure area!');
        console.log('"You logged into a secure area!" is visible.');
    });

    test('Invalid username', async ({ page }) => {
        await page.getByLabel('Username').fill('user123');
        await page.getByLabel('password').fill('SuperSecretPassword!');
        await page.getByRole('button', { name: 'Login' }).click();

        const errorMessage = await page.locator('#flash b').textContent();
        expect(errorMessage).toEqual('Invalid username.');
        // This test case is failed sceanrio.
    });

    test('Invalid password', async ({ page }) => {
        await page.getByLabel('Username').fill('practice');
        await page.getByLabel('password').fill('pwd12345');
        await page.getByRole('button', { name: 'Login' }).click();

        const errorMessage = await page.locator('#flash b').textContent();
        expect(errorMessage).toEqual('Your password is invalid!');
        console.log('Your password is invalid! is showing');

    });

    test.describe('Register user scenarios', () => {
        test.beforeEach(async ({ page }) => {
            page.goto('https://practice.expandtesting.com/register');
        });

        test('invalid registor process', async ({ page }) => {
            await page.getByLabel('Username').fill('user12');
            await page.getByLabel('Password', { exact: true }).fill('123');
            await page.getByLabel('Confirm Password', { exact: true }).fill('123');
            await page.getByRole('button', { name: 'Register' }).click();

            const errorMessage = await page.locator('#flash b').textContent();
            expect(errorMessage).toEqual('Password must be at least 4 characters long.');
        });

    });
});