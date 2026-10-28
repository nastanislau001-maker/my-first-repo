export class InventoryPage {
    
    constructor(page) {
        
        this.page = page;

        this.title = page.locator('[data-test="title"]');
        
        
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
        
        this.inventoryList = page.locator('[data-test="inventory-container"]');
        

       
        this.itemName = page.locator('[data-test="inventory-item-name"]');
        

        this.sortOptions = page.locator('[data-test="product-sort-container"]');

       
        



    }

    
    async addHighestPrice(){

        await this.sortOptions.selectOption('hilo');


        const highestPriceItemName = await this.itemName.first().innerText();

        await this.addItemToCart(highestPriceItemName);
        

        return highestPriceItemName; 
    }



    async addItemToCart(itemName){

        const formattedName = itemName.toLowerCase().replace(/ /g, '-');

        const addToCartButton = this.page.locator(`[data-test="add-to-cart-${formattedName}"]`);


        await addToCartButton.click();
        
    }
    
    
    async openCart(){
        await this.cartIcon.click();
    }


    async getPageTitle(){
        return await this.title.textContent();
    }


    



}