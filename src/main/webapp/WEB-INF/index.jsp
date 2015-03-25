<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">


<head>
	<link href="<c:url value="/assets/css/global.css" />" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
</head>

<body ng-app="myapp">


<div ng-controller="HelloController" >

    <h2>Hello {{helloTo.title}} !</h2>

</div>
<!-- See http://tutorialzine.com/2013/08/learn-angularjs-5-examples/ -->
<!-- Adding the ng-app declaration to initialize AngularJS -->
<div id="main" ng-app>
	<!-- The navigation menu will get the value of the "active" variable as a class.
		 The $event.preventDefault() stops the page from jumping when a link is clicked. -->

	<nav class="{{active}}" ng-click="$event.preventDefault()">

		<!-- When a link in the menu is clicked, we set the active variable -->

		<a href="#" class="home" ng-click="active='home'">Home</a>
		<a href="#" class="projects" ng-click="active='projects'">Projects</a>
		<a href="#" class="services" ng-click="active='services'">Services</a>
		<a href="#" class="contact" ng-click="active='contact'">Contact</a>
	</nav>

	<!-- ng-show will show an element if the value in the quotes is truthful,
		 while ng-hide does the opposite. Because the active variable is not set
		 initially, this will cause the first paragraph to be visible. -->

	<p ng-hide="active">Please click a menu item</p>
	<p ng-show="active">You chose <b>{{active}}</b></p>
</div>


<script>
angular.module("myapp", [])
    .controller("HelloController", function($scope) {
        $scope.helloTo = {};
        $scope.helloTo.title = "World, AngularJS";
    } );
</script>



</body>

</html>





