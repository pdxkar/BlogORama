
<%
	/*
	 * use jsp _appContext_ for statically generated URLs
	 * use ng-init _appContext_ for any dynamically (client side) built URLs
	 */
	String _appContext_ = getServletContext().getContextPath();
%>
<!DOCTYPE html>
<html ng-app="myApp"
	ng-init="_appContext_='<%=getServletContext().getContextPath()%>'">

<head>
<script type="text/javascript">
var __appContext__ = '<%=getServletContext().getContextPath()%>';
</script>
<title>Fabulous!</title>	

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  
  <script src="https://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
	
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular-route.js"></script>
  
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular-resource.min.js"></script>
  <script src="<%=_appContext_%>/assets/js/require.js"></script>
</head>



<body>
  <a ng-href="#/">Home</a>
  <a ng-href="#/technology">Technology</a>
  <section ng-view></section>
 
<script>
var routeApp = angular.module('myApp', ['ngRoute']);

routeApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '<%=getServletContext().getContextPath()%>' + '/assets/partials/task.html'
        })
        .when('/technology', {
            templateUrl: '<%=getServletContext().getContextPath()%>' + '/assets/partials/technology.html'
        })
.otherwise({redirectTo:"/technology"});

});
</script> 
  
</body>

</html>





