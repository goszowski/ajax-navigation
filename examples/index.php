<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ajax Navigation</title>
  </head>
  <body>
    <a href="#" data-ajax="true">sharp</a>
    <a href="/examples/pages/home.php" data-ajax="true">home</a>
    <a href="/examples/pages/page.php" data-ajax="true">page</a>
    <a href="/examples/pages/dasdasdsa" data-ajax="true">error 404</a>
    <a href="/examples/pages/error500.php" data-ajax="true">error 500</a>

    <div id="app">

    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="../ajax-navigation.js"></script>
    <script type="text/javascript">
      $(function() {
        var navigation = new AjaxNavigation;
      });
    </script>
  </body>
</html>
