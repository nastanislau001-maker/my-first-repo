export class cartPage {
    
    constructor(page) {
        
        this.page = page;

        this.cartList = page.locator('[data-test="inventory-item"]');
        
        this.checkoutButton = page.locator('[data-test="checkout"]');
        
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
        


        this.itemNameInCart = page.locator('[data-test="inventory-item-name"]'); 

    }

    

    async goToCheckout(){

        await this.checkoutButton.click();
        
    }
   

    
    async getFirstItemNameInCart() {
        return await this.itemNameInCart.first().innerText();
    }


}