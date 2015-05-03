app.controller('bpCtrl', function ($scope, Azureservice) {

    Azureservice.query('bonplan', {
            criteria: {
            },
        })
       .then(function (items) {

           $scope.items = items;

       }, function (err) {
           console.error('There was an error quering Azure ' + err);
       });
	   
	});