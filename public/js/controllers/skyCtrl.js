'use strict';

app.controller('skyCtrl', function($scope, skyService) {
	$scope.msgtxt = '';
 	$scope.readData = function() {
 		skyService.readData().then(function(msg) {
 			var data = msg.data;
 			$scope.theJSONData = '';
 			if($scope.checkboxModel) {
 				$scope.theJSONData = JSON.stringify(data);
 			}
			// if($scope.checkboxModel.toJSON === true) {
			// 	$scope.theJSONData = JSON.stringify(data);
			// }
			$scope.total = data.total;
			$scope.callChargesTotal = data.callCharges.total;
			$scope.packageTotal = data.package.total;
			$scope.skyStoreTotal = data.skyStore.total;
			$scope.statementDue = data.statement.due;
			$scope.statementGenerated = data.statement.generated;



			$scope.subscriptions = data.package.subscriptions;
			$scope.callCharges = data.callCharges.calls;
			$scope.msgtxt = 'Loaded Sucessfuly';
		});
	};
});