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
    { label: '(Exclude)', value: null },
];

var CHARACTERS = [
    'Aigis',
    'Chidori',
    'Chihiro',
    'Elizabeth',
    { name: 'Door-tan', file: 'femc.png' },
    'Fuuka',
    { name: 'Kikuno', file: 'kikuno.png', default: null },
    { name: 'Maiko', file: 'maiko.png', default: 'P' },
    'Metis',
    { name: 'Natsuki', file: 'natsuki.png', default: null },
    'Rio',
    'Saori',
    { name: 'Ms. Toriumi', file: 'toriumi.png' },
    'Yukari',
    'Yuko'
];

var RANKING_ORDER = [ 'P', 'SS', 'S', 'A', 'B', 'C', 'D', 'E', 'F' ];
    
angular.module('app')
    .constant('CHARACTERS', CHARACTERS)
    .constant('RANKINGS', RANKINGS)
    .constant('RANKING_ORDER', RANKING_ORDER)
    .config(function($localStorageProvider) {
        $localStorageProvider.setKeyPrefix('p3');
    });

})();
