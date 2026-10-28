export class CheckOutStepTwoPage{
    
    constructor(page) {
        
        this.page = page;

        this.cartInfo = page.locator('[data-test="cart-list"]');
        this.total = page.locator('[data-test="total-label"]');
        
        this.finishButton = page.locator('[data-test="finish"]');
        

        
    }



    async finishCheckout(){
        await this.finishButton.click();
    }



}