var app = angular.module ('shoppingList',[]);

app.controller('listCtrl',function($scope){
    $scope.list = [
        {"item":"apple"},
        {"item":"bread"},
        {"item":"butter"}
    ]
    $scope.add = function(){
        $scope.item;
        newVar= {
            "item":$scope.item
           
        }
         $scope.newId=-1;
        $scope.newId= $scope.searchItem($scope.item);
        $scope.newId= $scope.searchItem($scope.item);
        if($scope.newId==2){
            $scope.list.push(newVar);
        }
        else{
            alert(" item already exists");
        }
    }
    $scope.searchItem=function(id){
        for(i=0;i<$scope.list.length;i++){
            if($scope.list[i].item==$scope.item)
               { return 1;
               }
        } return 2;
        }
       
});
