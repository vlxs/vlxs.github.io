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
    'Chisaki',
    'Chitose',
    'Hibari',
    'Karura',
    { name: 'Koyuzu', file: 'koyuzu.png', default: 'P' },
    'Matora',
    'Nonko',
    'Oboro',
    'Renge',
    'Sagiri',
    'Yaya',
    'Yuuna'
];

var RANKING_ORDER = [ 'P', 'SS', 'S', 'A', 'B', 'C', 'D', 'E', 'F' ];
    
angular.module('app')
    .constant('CHARACTERS', CHARACTERS)
    .constant('RANKINGS', RANKINGS)
    .constant('RANKING_ORDER', RANKING_ORDER)
    .config(function($localStorageProvider) {
        $localStorageProvider.setKeyPrefix('yuragi');
    });

})();
