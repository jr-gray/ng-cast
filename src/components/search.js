angular.module('video-player')

.controller('searchController', function() {
	this.result = () => {};
})

.component('search', {
  templateUrl: 'src/templates/search.html',
  controller: 'searchController'
});
