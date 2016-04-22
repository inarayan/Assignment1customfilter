/**
 * Created by indrabijaynarayan on 4/20/16.
 */
angular.module('app',[])
    .controller('appCtrl',['$scope',function($scope){

    }])
    .filter("TitleCase",function(){
        return function(str){

            if(!str){
                return
            }
            var newstr = str.split(" ");
            for(i=0;i<newstr.length;i++){
                var copy = newstr[i].substring(1).toLowerCase();
                newstr[i] = newstr[i][0].toUpperCase() + copy;
            }
            newstr = newstr.join(" ");
            return newstr;
            
        };
    })
