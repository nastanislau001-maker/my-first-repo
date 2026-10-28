export class CheckoutCompletePage{
    
    constructor(page) {
        
        this.page = page;

        this.thankingText = page.locator('[data-test="complete-header"]');
       
        this.backToProductsButton = page.locator('[data-test="back-to-products"]');
        

        
    }



    async getCompletionMessage(){
        return await this.thankingText.textContent();
    }



}