//browser-sync start --server --directory --files "**/*"

(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    
    ToBuyController.$inject = ['ShoppingListCheckOffService', '$scope'];
    function ToBuyController (ShoppingListCheckOffService){ 
        var buy = this; 
        buy.items = ShoppingListCheckOffService.getItems();
        
        buy.button = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
          };
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', '$scope'];
    function AlreadyBoughtController (ShoppingListCheckOffService){
        var bought = this;
        bought.items = ShoppingListCheckOffService.getItems2();
    
};

    function ShoppingListCheckOffService() {

        var service = this;

        var foodToBuy =  [
            {   name: "Milk",
                quantity: "1" },
            {   name: "Avocado",
                quantity: "1" },
            {   name: "Cans of Beans",
                quantity: "2" },
            {   name: "Apples",
                quantity: "8" },
            {   name: "Yogurts",
                quantity: "2" }
        ];
        
        var foodIsBought = [];

        service.removeItem = function(itemIndex){
            foodIsBought.push(foodToBuy[itemIndex]);
            foodToBuy.splice(itemIndex, 1);
            
        }

        service.getItems = function () {
            return foodToBuy;
        };

        service.getItems2 = function () {
            return foodIsBought;
        };
        
          

    };


})();
