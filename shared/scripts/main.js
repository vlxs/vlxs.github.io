(function() {

angular.module('app', [ 'ui.bootstrap', 'ngStorage' ])
    .controller('MainController', function($scope, $timeout, $sce, $localStorage, $canvas, CHARACTERS, RANKINGS, RANKING_ORDER) {

        $scope.characters = angular.extend([ ], CHARACTERS);
        $scope.characters.sort(function(x,y) { return x.name.localeCompare(y.name); });

        $scope.availableRankings = RANKINGS;

        /***********************/

        $scope.rankings = { };
        for (var i=0;i<CHARACTERS.length;++i) {
            CHARACTERS[i].fileStr = $sce.trustAsHtml('<img src="assets/' + CHARACTERS[i].file + '">')
            if (CHARACTERS[i].hasOwnProperty('default')) continue;
            CHARACTERS[i].default = RANKING_ORDER[Math.floor(Math.random() * (RANKING_ORDER.length - 1)) + 1];
        }
        CHARACTERS.forEach(function(c) { $scope.rankings[c.name] = c.default });

        /***********************/

		$scope.update = function() {
			$canvas.update($scope.rankings);
		};

        $scope.download = function() {
            var link = document.createElement('a');
            link.href = $('#canvas')[0].toDataURL('image/jpeg');
            link.download = 'ranking.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        /***********************/

        if ($localStorage.rankings) angular.extend($scope.rankings, $localStorage.rankings);
        $localStorage.rankings = $scope.rankings;

		$scope.$on('$includeContentLoaded', function() {
			$timeout($scope.update);
		});

    });

})();
