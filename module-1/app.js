(function (){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject =['$scope'];
  function LunchCheckController($scope){
    $scope.items = "";
    $scope.message = "";
    $scope.verifyItems = function(){
      var array = $scope.items.split(',');
      if($scope.items == "")
        return $scope.message = "Plese enter data first";
      else{
        if(array.length < 4)
          return $scope.message = "Enjoy!";
        else
          return $scope.message = "Too much!";
      }
    };
  }
})();
