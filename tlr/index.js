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
    { name: 'Sephie', file: 'sephie.png'},
    { name: 'Shizu', file: 'shizu.png'},
    { name: 'Tearju', file: 'tearju.png'},
    { name: 'Yami (darkness)', file: 'darkness.png'},
    { name: 'Yami', file: 'yami.png'},
    { name: 'Yui', file: 'yui.png'}
];

var RANKING_ORDER = [ 'P', 'SS', 'S', 'A', 'B', 'C', 'D', 'E', 'F' ];
    
angular.module('app')
    .constant('CHARACTERS', CHARACTERS)
    .constant('RANKINGS', RANKINGS)
    .constant('RANKING_ORDER', RANKING_ORDER)
	.config(function($localStorageProvider) {
		$localStorageProvider.setKeyPrefix('tlr');
	});

})();
