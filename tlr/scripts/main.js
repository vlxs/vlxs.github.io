(function() {

var RANKINGS = [
    { label: 'Too Pure', value: 'P' },
    { label: 'S+', value: 'SS' },
    { label: 'S', value: 'S' },
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' },
    { label: 'E', value: 'E' },
    { label: 'F', value: 'F' },
];

var CHARACTERS = [
    { name: 'Aya', file: 'aya.png' },
    { name: 'Celine', file: 'celine.png', default: 'P', },
    { name: 'Haruna', file: 'haruna.png' },
    { name: 'Kyouko', file: 'kyouko.png'},
    { name: 'Lala', file: 'lala.png'},
    { name: 'Mea', file: 'mea.png'},
    { name: 'Mikan', file: 'mikan.png'},
    { name: 'Mio', file: 'mio.png'},
    { name: 'Momo', file: 'momo.png'},
    { name: 'Nana', file: 'nana.png'},
    { name: 'Nemesis', file: 'nemesis.png'},
    { name: 'Riko', file: 'riko.png'},
    { name: 'Rin', file: 'rin.png'},
    { name: 'Risa', file: 'risa.png'},
    { name: 'Run', file: 'run.png'},
    { name: 'Ryouko', file: 'ryouko.png'},
    { name: 'Saki', file: 'saki.png'},
    { name: 'Shizu', file: 'shizu.png'},
    { name: 'Tearju', file: 'tearju.png'},
    { name: 'Yami (darkness)', file: 'darkness.png'},
    { name: 'Yami', file: 'yami.png'},
    { name: 'Yui', file: 'yui.png'}
];

var RANKING_ORDER = [ 'P', 'SS', 'S', 'A', 'B', 'C', 'D', 'E', 'F' ];

/***********************/
    
angular.module('app', [ 'ui.bootstrap', 'ngStorage' ])
    .constant('CHARACTERS', CHARACTERS)
    .constant('RANKINGS', RANKINGS)
    .constant('RANKING_ORDER', RANKING_ORDER)
    .controller('MainController', function($scope, $timeout, $sce, $localStorage, $canvas) {

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
        else {

        }

        $localStorage.rankings = $scope.rankings;

        $timeout($scope.update);

    });

})();
