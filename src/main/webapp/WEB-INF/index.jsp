<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>AngularJS Plunker</title>
 <!--  <script data-require="angular.js@1.2.x" src="https://code.angularjs.org/1.2.21/angular.js" data-semver="1.2.21"></script> -->
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular-route.js"></script>
  
  <script src="app.js"></script>
    <link rel="stylesheet" href="style.css" />
</head>

<body ng-app="myApp">
  <a ng-href="#/">Home</a>
  <a ng-href="#/technology">Technology</a>
  <section ng-view></section>
</body>

</html>





