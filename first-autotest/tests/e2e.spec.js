import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { InventoryPage } from '../pages/inventory.page.js';
import { cartPage } from '../pages/cart.page.js'; 
import { CheckOutStepOnePage } from '../pages/checkout-step-one.page.js';
import { CheckOutStepTwoPage } from '../pages/chekout-step-two.page.js'; 
import { CheckoutCompletePage } from '../pages/checkout-complete.page.js';

test('Попытка залогиниться', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);


    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');


    await expect(inventoryPage.title).toContainText('Product');


    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});


test('E2E тест', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cart = new cartPage(page);
    const checkoutStepOne = new CheckOutStepOnePage(page);
    const checkoutStepTwo = new CheckOutStepTwoPage(page);
    const checkoutComplete = new CheckoutCompletePage(page);


    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');


    await expect(inventoryPage.title).toContainText('Product');


    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


    const expectedItemName = await inventoryPage.addHighestPrice();

    await inventoryPage.openCart();


    const actualItemName = await cart.getFirstItemNameInCart();
    expect(actualItemName).toBe(expectedItemName);


    await cart.goToCheckout();

    await checkoutStepOne.fillUserInfo('Иван', 'Иванов', '123456');

    await checkoutStepTwo.finishCheckout();
    

    const successMessage = await checkoutComplete.getCompletionMessage();
    expect(successMessage).toContain('Thank you for your order!');


});







