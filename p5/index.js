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
    'Ann',
    'Makoto',
    'Futaba',
    'Haru',
    'Justine',
    'Caroline',
    'Lavenza',
    { name: 'Mumumu', file: 'chihaya.png' },
    'Tae',
    'Kawakami',
    { name: 'Ohya', file: 'ohya.png', default: 'F' },
    'Hifumi',
    'Sae',
    { name: 'Shadow Sae', file: 'shadow-sae.png', default: null },
    { name: 'Shiho', file: 'shiho.png', default: null },
    { name: 'Principal-kun', file: 'principal.png', default: 'P' },
    { name: 'Mika', file: 'mika.png', default: null },
    { name: 'Ms. Chouno', file: 'chouno.png', default: null },
    { name: 'Ms. Usami', file: 'usami.png', default: null },
    { name: 'Wakaba', file: 'wakaba.png', default: null }
];

var RANKING_ORDER = [ 'P', 'SS', 'S', 'A', 'B', 'C', 'D', 'E', 'F' ];
    
angular.module('app')
    .constant('CHARACTERS', CHARACTERS)
    .constant('RANKINGS', RANKINGS)
    .constant('RANKING_ORDER', RANKING_ORDER)
    .config(function($localStorageProvider) {
        $localStorageProvider.setKeyPrefix('p5');
    });

})();
