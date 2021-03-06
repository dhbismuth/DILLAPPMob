app.controller('userCtrl', function ($scope, Azureservice) {

    $scope.inscription = function (prenom, nom, email, mdp) {

			    Azureservice.insert('user', {
			        firstName: prenom,
			        lastName: nom,
			        email: email,
			        password: mdp
			    })
               .then(function () {
                   console.log('Insert successful');
               }, function (err) {
                   console.error('Azure Error: ' + err);
               });
			};

Azureservice.query('user',{
            criteria: {
            },
        })
       .then(function (items) {

           $scope.items = items;

       }, function (err) {
           console.error('There was an error quering Azure ' + err);
       });

	});