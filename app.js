//browser-sync start --server --directory --files "**/*"

(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', [ '$scope', LunchCheckController]);

    function LunchCheckController($scope){
        $scope.fruitModel = "";

        $scope.fruitButton = function (fruitOutput){
            const str = fruitOutput;
            const words = str.split(',');
            if (!words[0]) {
                $scope.fruitOutput = "Empty";
            } else if (words[0] && !words[3]) {
                $scope.fruitOutput = "Enjoy!";
            } else if (words[3]) {
                $scope.fruitOutput = "Too much!";
            }
        }
    }
    

})();
