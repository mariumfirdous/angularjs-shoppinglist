var app = angular.module ('shoppingList',[]);

app.controller('listCtrl',function($scope){
    $scope.list = [
        {"item":"apple"},
        {"item":"bread"},
        {"item":"butter"}
    ]
    console.log("09");
    $scope.add = function(){
        console.log('o11');
        $scope.item;
        console.log('o13');
        newVar= {
            "item":$scope.item
           
        }
         console.log('o16');
         $scope.newId=-1;
        $scope.newId= $scope.searchItem($scope.item);  
        console.log('o19');  
        if($scope.newId==2){
            console.log('o21');
            $scope.list.push(newVar);
            console.log('o23');
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