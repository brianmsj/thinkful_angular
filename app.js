angular.module('myApp',[])
.controller('MultiplicationCtrl', function($scope,$attrs) {
    var vm = this;
    vm.numberLimit = $attrs.initialNumberLimit || 10
    vm.numbers = function() {
        var numbers = [];
        if(vm.numberLimit > 50) {
          alert('too high of a number')
          vm.numberLimit = 10
        }
        else {
        for(var i=0; i < vm.numberLimit; i++) {
            numbers.push(i + 1);

        };
      }
        return numbers;
    };

    vm.compute = function(a,b) {
        return a * b;
    };
});
