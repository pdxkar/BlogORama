/**
 * Loads the page when the href link is hit
 */
myApp.config([
		'$routeProvider',
		'$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider.when(
					'/',
					{
						templateUrl : __appContext__
								+ '/assets/partials/browseBooks.html',
						controller : 'BookListCtrl'
					}).when(
					__appContext__,
					{
						templateUrl : __appContext__
								+ '/assets/partials/browseBooks.html',
						controller : 'BookListCtrl'
					}).when(__appContext__ + '/about', {
				templateUrl : __appContext__ + '/assets/partials/aboutUs.html'
			}).when(
					__appContext__ + '/:isbn13',
					{
						templateUrl : __appContext__
								+ '/assets/partials/books-detail.html',
						controller : 'BookDetailCtrlISBN'
					}).otherwise({
				redirectTo : '/books'
			});
			$locationProvider.html5Mode(true);
		} ]);

// myApp.config(function($locationProvider, $stateProvider, $urlRouterProvider)
// {
//	
// //
// // For any unmatched url, redirect to /state1
// $urlRouterProvider.otherwise(__appContext__);
// //
// // Now set up the states
// $stateProvider.state(__appContext__, {
// url : __appContext__,
// templateUrl : __appContext__ + '/assets/partials/browseBooks.html',
// controller : 'BookListCtrl'
// }).state('bookDetail', {
// url : __appContext__+'/:{isbn13:[0-9]{1,10}}',
// templateUrl : __appContext__ + '/assets/partials/books-detail.html',
// controller : 'BookDetailCtrlISBN'
// });
// $locationProvider.html5Mode(true);
// });
