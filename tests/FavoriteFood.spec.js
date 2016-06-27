describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter on food correctly', function () {
		 var mockedList = [{
				 name: 'Test',
					 favoriteFood: 'Pittsburgh'
		 }, {
				 name: 'Test 2',
					 favoriteFood: 'New York'
		 }, {
				 name: 'Test 3',
					 favoriteFood: 'Chicago'
		 }];

			var results = $filter('favoriteFood')(mockedList, 'Chicago');

			expect(results.length).toBe(1);
			expect(results[0].name).toBe('Test 3');
	});


});
