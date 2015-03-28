'use strict';
/**
 * Controller for loading all the books
 */
myApp
		.controller(
				'BookListCtrl',
				[
						'$scope',
						'Books',
						function($scope, Books) {
							// Controller magic

							$scope.books = Books.query();
							$scope.orderByTitle = 'name';
							$scope.direction = false;
							$scope.sort = function(column, id) {
								console.log('run this');

								if ($scope.orderByTitle === column) {
									$scope.direction = !$scope.direction;
								} else {
									$scope.orderByTitle = column;
									$scope.direction = false;

								}

							};

							$('#titleSorter')
									.click(
											function() {
												if ($('#publisherSorter')
														.hasClass(
																'sortButtonShadow')
														&& $(
																'#browsePublisherTableHead')
																.hasClass(
																		'columnHeaderShadow')) {

													$('#publisherSorter')
															.removeClass(
																	'sortButtonShadow');
													$(
															'#browsePublisherTableHead')
															.removeClass(
																	'columnHeaderShadow');

												}

												$('#titleSorter').addClass(
														'sortButtonShadow');
												$('#browseTitleTableHead')
														.addClass(
																'columnHeaderShadow');

												if ($('#sorterForTitle')
														.hasClass(
																'glyphicon glyphicon-sort-by-alphabet-alt')) {

													$('#sorterForTitle')
															.removeClass(
																	'glyphicon glyphicon-sort-by-alphabet-alt')
															.addClass(
																	'glyphicon glyphicon-sort-by-alphabet');

												} else if ($('#sorterForTitle')
														.hasClass(
																'glyphicon glyphicon-sort-by-alphabet')) {

													$('#sorterForTitle')
															.removeClass(
																	'glyphicon glyphicon-sort-by-alphabet')
															.addClass(
																	'glyphicon glyphicon-sort-by-alphabet-alt');

												}

											});

							/**
							 * When the publisher sorter button is clicked, adds
							 * the class refer to global.css
							 */
							$('#publisherSorter')
									.click(
											function() {
												if ($('#titleSorter').hasClass(
														'sortButtonShadow')
														&& $(
																'#browseTitleTableHead')
																.hasClass(
																		'columnHeaderShadow')) {

													$('#titleSorter')
															.removeClass(
																	'sortButtonShadow');
													$('#browseTitleTableHead')
															.removeClass(
																	'columnHeaderShadow');

												}

												$('#publisherSorter').addClass(
														'sortButtonShadow');
												$('#browsePublisherTableHead')
														.addClass(
																'columnHeaderShadow');

												if ($('#sorterForPublisher')
														.hasClass(
																'glyphicon glyphicon-sort-by-alphabet')) {

													$('#sorterForPublisher')
															.removeClass(
																	'glyphicon glyphicon-sort-by-alphabet')
															.addClass(
																	'glyphicon glyphicon-sort-by-alphabet-alt');

												} else if ($(
														'#sorterForPublisher')
														.hasClass(
																'glyphicon glyphicon-sort-by-alphabet-alt')) {

													$('#sorterForPublisher')
															.removeClass(
																	'glyphicon glyphicon-sort-by-alphabet-alt')
															.addClass(
																	'glyphicon glyphicon-sort-by-alphabet');

												}

											});
						} ]);

/**
 * Controller for loading a single book using book isbn
 */

myApp.controller('BookDetailCtrlISBN', [ '$scope', '$routeParams',
		'BookDetail', function($scope, $routeParams, BookDetail) {

			$scope.bookDetail = BookDetail.get({
				isbn13 : $routeParams.isbn13
			});

		} ]);

/**
 * Controller for loading tags
 */
myApp.controller('BookTagsCtrl', [ '$scope', '$routeParams', 'BooksTags',
		function($scope, $routeParams, BooksTags) {
			// Controller magic
			$scope.bookTag = BooksTags.query();
		} ]);
