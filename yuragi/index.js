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
	{ name: 'Chisaki', file: 'chisaki.png' },
	{ name: 'Chitose', file: 'chitose.png' },
	{ name: 'Hibari', file: 'hibari.png' },
    { name: 'Karura', file: 'karura.png' },
	{ name: 'Koyuzu', file: 'koyuzu.png', default: 'P' },
    { name: 'Matora', file: 'matora.png' },
	{ name: 'Nonko', file: 'nonko.png' },
	{ name: 'Oboro', file: 'oboro.png' },
	{ name: 'Renge', file: 'renge.png' },
	{ name: 'Sagiri', file: 'sagiri.png' },
	{ name: 'Yaya', file: 'yaya.png' },
	{ name: 'Yuuna', file: 'yuuna.png' }
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
