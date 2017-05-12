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
    'Ai',
    'Alice',
    'Ayane',
    'Chie',
    'Eri',
    'Hanako',
    { name: 'Hisano', file: 'hisano.png', default: null },
    { name: 'Izanami', file: 'izanami.png', default: null },
    'Labrys',
    'Margaret',
    'Marie',
    { name: 'Mayumi', file: 'mayumi.png', default: null },
    { name: 'Misuzu', file: 'misuzu.png', default: null },
    { name: 'Nanako', file: 'nanako.png', default: 'P' },
    'Naoto',
    'Noriko',
    'Rise',
    { name: 'Saki', file: 'saki.png', default: null },
    'Sayoko',
    'Yukiko',
    'Yumi'
];

var RANKING_ORDER = [ 'P', 'SS', 'S', 'A', 'B', 'C', 'D', 'E', 'F' ];
    
angular.module('app')
    .constant('CHARACTERS', CHARACTERS)
    .constant('RANKINGS', RANKINGS)
    .constant('RANKING_ORDER', RANKING_ORDER)
    .config(function($localStorageProvider) {
        $localStorageProvider.setKeyPrefix('p4');
    });

})();
