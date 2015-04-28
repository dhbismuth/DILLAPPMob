(function(){
	angular.module('WIB' ).controller('userCTRL', function($scope){
			$scope.inscription = function (Nom){
				$scope.user = {
					nom: Nom
				}
			};

			

	});
});