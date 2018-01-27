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
    { label: '(Exclude)', value: null }
];

var CHARACTERS = [
    { name: 'Awata', file: 'awata.png', default: null },
    'Camie',
    { name: 'Eri', file: 'eri.png', default: 'P' },
    { name: 'Fuyumi', file: 'fuyumi.png', default: null },
    'Hatsume',
    { name: 'Inko', file: 'inko.png', default: null },
    'Jirou',
    'Kendou',
    'Midnight',
    { name: 'Ms. Joke', file: 'msjoke.png', default: null },
    { name: 'Mt. Lady', file: 'mtlady.png' },
    'Mina',
    'Momo',
    'Nejire',
    'Ochako',
    'Ryuukyuu',
    { name: 'Snake Hero', file: 'snakehero.png', default: null },
    { name: 'Shiozaki', file: 'shiozaki.png', default: null },
    'Toga',
    'Toru',
    'Tsuyu'
];

var RANKING_ORDER = [ 'P', 'SS', 'S', 'A', 'B', 'C', 'D', 'E', 'F' ];
    
angular.module('app')
    .constant('CHARACTERS', CHARACTERS)
    .constant('RANKINGS', RANKINGS)
    .constant('RANKING_ORDER', RANKING_ORDER)
    .config(function($localStorageProvider) {
        $localStorageProvider.setKeyPrefix('bnha');
    });

})();
