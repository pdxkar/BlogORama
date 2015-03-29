<!DOCTYPE html>
<html ng-app="myApp">

<head>
  <meta charset="utf-8" />
  <title>AngularJS Plunker</title>
  <script>
    document.write('<base href="' + document.location + '" />');
  </script>
  <link rel="stylesheet" href="style.css" />
  <script data-require="angular.js@1.2.x" src="https://code.angularjs.org/1.2.21/angular.js" data-semver="1.2.21"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular-route.js"></script>
  <script src="app.js"></script>
</head>

<body>
  <a ng-href="#/">Home</a>
  <a ng-href="#/technology">Technology</a>
  <section ng-view></section>
</body>

</html>





